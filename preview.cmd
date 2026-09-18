@echo off
setlocal

rem One-click Windows preview for the static travel site.
rem The PowerShell script uses only Windows built-ins; no Python or npm is required.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0preview.ps1"

if errorlevel 1 (
  echo.
  echo Preview could not be started. Press any key to close this window.
  pause >nul
)
