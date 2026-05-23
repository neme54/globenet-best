# Re-capture project screenshots when sites change
$dest = Join-Path $PSScriptRoot "..\public\images\projects"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$sites = @{
  trustfund = "https://trustfundcapitalmgt.com"
  globedispatch = "https://globedispatch.org"
}
foreach ($k in $sites.Keys) {
  $enc = [uri]::EscapeDataString($sites[$k])
  $json = Invoke-RestMethod -Uri "https://api.microlink.io/?url=$enc&screenshot=true&meta=false" -TimeoutSec 90
  Invoke-WebRequest -Uri $json.data.screenshot.url -OutFile (Join-Path $dest "$k.png") -TimeoutSec 60
  Write-Host "Updated $k.png"
}
