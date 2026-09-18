param(
  [int]$Port = 4173
)

$ErrorActionPreference = "Stop"
$root = [IO.Path]::GetFullPath($PSScriptRoot)
$prefix = "http://127.0.0.1:$Port/"

$server = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $Port)

try {
  $server.Start()
} catch {
  if ($_.Exception.Message -match "already in use|conflict|failed|Only one usage|normally permitted") {
    Write-Host "A preview may already be running. Opening $prefix"
    try {
      Start-Process $prefix | Out-Null
    } catch {
      Write-Warning "The preview is already running. Open $prefix manually."
    }
    exit 0
  }
  throw
}

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".webp" = "image/webp"
}

function Send-Response {
  param(
  [Parameter(Mandatory = $true)] [IO.Stream]$Stream,
  [int]$StatusCode,
  [byte[]]$Body,
  [string]$ContentType
  )

  $statusText = if ($StatusCode -eq 200) { "OK" } elseif ($StatusCode -eq 403) { "Forbidden" } elseif ($StatusCode -eq 404) { "Not Found" } else { "Internal Server Error" }
  $header = "HTTP/1.1 $StatusCode $statusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`nCache-Control: no-store`r`n`r`n"
  $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
  $Stream.Flush()
}

try {
  Start-Process $prefix | Out-Null
} catch {
  Write-Warning "The preview server is ready, but Windows could not open a browser automatically. Open $prefix manually."
}
Write-Host "Travel Japan preview is running at $prefix"
Write-Host "Close this window to stop the preview."

try {
while ($server.Server.IsBound) {
    $client = $server.AcceptTcpClient()
    $stream = $client.GetStream()
    try {
      $reader = [IO.StreamReader]::new($stream, [Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      while (($headerLine = $reader.ReadLine()) -ne $null -and $headerLine -ne "") { }

      if ([string]::IsNullOrWhiteSpace($requestLine)) {
        Send-Response -Stream $stream -StatusCode 400 -Body ([Text.Encoding]::UTF8.GetBytes("Bad request")) -ContentType "text/plain; charset=utf-8"
        continue
      }

      $requestParts = $requestLine.Split(" ")
      $requestPath = if ($requestParts.Length -ge 2) { $requestParts[1] } else { "/" }
      $relativePath = [Uri]::UnescapeDataString(([Uri]::new("http://127.0.0.1$requestPath")).AbsolutePath).TrimStart("/")
      if ([string]::IsNullOrWhiteSpace($relativePath)) { $relativePath = "index.html" }

      $candidate = [IO.Path]::GetFullPath((Join-Path $root ($relativePath -replace "/", [IO.Path]::DirectorySeparatorChar)))
      $rootPrefix = $root.TrimEnd([IO.Path]::DirectorySeparatorChar) + [IO.Path]::DirectorySeparatorChar
      if (-not $candidate.StartsWith($rootPrefix, [StringComparison]::OrdinalIgnoreCase) -and $candidate -ne $root.TrimEnd([IO.Path]::DirectorySeparatorChar)) {
        Send-Response -Stream $stream -StatusCode 403 -Body ([Text.Encoding]::UTF8.GetBytes("Forbidden")) -ContentType "text/plain; charset=utf-8"
        continue
      }

      if (-not [IO.File]::Exists($candidate)) {
        Send-Response -Stream $stream -StatusCode 404 -Body ([Text.Encoding]::UTF8.GetBytes("Not found")) -ContentType "text/plain; charset=utf-8"
        continue
      }

      $extension = [IO.Path]::GetExtension($candidate).ToLowerInvariant()
      $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
      Send-Response -Stream $stream -StatusCode 200 -Body ([IO.File]::ReadAllBytes($candidate)) -ContentType $contentType
    } catch {
      if ($stream.CanWrite) {
        Send-Response -Stream $stream -StatusCode 500 -Body ([Text.Encoding]::UTF8.GetBytes("Preview server error")) -ContentType "text/plain; charset=utf-8"
      }
    } finally {
      $stream.Dispose()
      $client.Dispose()
    }
  }
} finally {
  $server.Stop()
}
