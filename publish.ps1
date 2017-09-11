[CmdletBinding()]
Param(
    [Parameter(Mandatory=$True, Position = 0)]
    [String]$localFiles,

    [Parameter(Mandatory=$True)]
    [String]$username,

    [Parameter(Mandatory=$True)]
    [String]$password,

    [Parameter(Mandatory=$True)]
    [String]$remotePath
)

#ftp server 
$ftp = "ftp://nareshrohra.com/" + $remotePath + "/"
 
#open ftp connection
$webclient = New-Object System.Net.WebClient 
$webclient.Credentials = New-Object System.Net.NetworkCredential($username, $password)
"Connected to $ftp with user $username..."

# upload files
$folder = Split-Path -Parent $script:MyInvocation.MyCommand.Path
foreach($item in $localFiles.split(",")) {
    $filePath = Join-Path $folder $item
    "Uploading $filePath..."
    $uri = New-Object System.Uri($ftp + $item)
    "remote-path $uri"
    $webclient.UploadFile($uri, $filePath) 
}