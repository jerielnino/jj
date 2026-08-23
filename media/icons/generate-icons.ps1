Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms

$sizes = @(72, 96, 128, 144, 152, 192, 384, 512)
$outputDir = "C:\Users\Asus\Mywork\imposter-pwa\icons"

foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Dark background gradient
    $rect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, [System.Drawing.Color]::FromArgb(30,30,30), [System.Drawing.Color]::FromArgb(5,5,5), 45)
    $g.FillRectangle($brush, $rect)

    # Gold circle
    $padding = [int]($size * 0.1)
    $inner = $size - $padding * 2
    $circleRect = New-Object System.Drawing.Rectangle $padding + [int]($inner * 0.1), $padding + [int]($inner * 0.1), [int]($inner * 0.8), [int]($inner * 0.8)
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(232,185,58), [int]($size * 0.03))
    $g.DrawEllipse($pen, $circleRect)

    # Draw detective emoji as text
    $fontSize = [int]($inner * 0.5)
    $font = New-Object System.Drawing.Font("Segoe UI Emoji", $fontSize, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.DrawString("🕵️", $font, $textBrush, [int]($size/2), [int]($size/2 + $inner * 0.02), $stringFormat)

    $bmp.Save("$outputDir\icon-$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
    Write-Host "Generated icon-$size.png"
}

Write-Host "All icons generated!"