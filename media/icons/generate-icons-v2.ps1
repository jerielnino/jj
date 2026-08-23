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
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, [System.Drawing.Color]::FromArgb(30,30,30), [System.Drawing.Color]::FromArgb(5,5,5), 135)
    $g.FillRectangle($brush, $rect)

    # Gold accent ring
    $padding = [int]($size * 0.08)
    $inner = $size - $padding * 2
    $centerX = $size / 2
    $centerY = $size / 2
    $radius = [int]($inner * 0.42)
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(232,185,58), [int]($size * 0.025))
    $g.DrawEllipse($pen, $centerX - $radius, $centerY - $radius, $radius * 2, $radius * 2)

    # Draw Among Us style crewmate (imposter theme)
    # Body color - dark red for imposter vibe
    $bodyColor = [System.Drawing.Color]::FromArgb(180, 40, 40)
    $bodyBrush = New-Object System.Drawing.SolidBrush($bodyColor)
    $highlightColor = [System.Drawing.Color]::FromArgb(220, 80, 80)
    $highlightBrush = New-Object System.Drawing.SolidBrush($highlightColor)
    $shadowColor = [System.Drawing.Color]::FromArgb(120, 20, 20)
    $shadowBrush = New-Object System.Drawing.SolidBrush($shadowColor)
    $visorColor = [System.Drawing.Color]::FromArgb(60, 180, 220)
    $visorBrush = New-Object System.Drawing.SolidBrush($visorColor)
    $visorHighlight = [System.Drawing.Color]::FromArgb(120, 220, 255)
    $visorHighlightBrush = New-Object System.Drawing.SolidBrush($visorHighlight)

    $bodyWidth = [int]($radius * 1.5)
    $bodyHeight = [int]($radius * 1.6)
    $bodyX = $centerX - $bodyWidth / 2
    $bodyY = $centerY - [int]($radius * 0.1)

    # Backpack
    $bpWidth = [int]($bodyWidth * 0.35)
    $bpHeight = [int]($bodyHeight * 0.55)
    $bpX = $bodyX + $bodyWidth - [int]($bpWidth * 0.7)
    $bpY = $bodyY + [int]($bodyHeight * 0.25)
    $bpRect = New-Object System.Drawing.Rectangle $bpX, $bpY, $bpWidth, $bpHeight
    $gp = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp.AddArc($bpRect.X, $bpRect.Y, $bpWidth * 2, $bpHeight * 2, 90, 180)
    $gp.AddLine($bpRect.X + $bpWidth, $bpRect.Y, $bpRect.X + $bpWidth, $bpRect.Y + $bpHeight)
    $gp.AddArc($bpRect.X, $bpRect.Y + $bpHeight - $bpWidth, $bpWidth * 2, $bpWidth * 2, 270, 180)
    $gp.CloseFigure()
    $g.FillPath($bodyBrush, $gp)

    # Main body (rounded rectangle with curved bottom)
    $bodyRect = New-Object System.Drawing.Rectangle $bodyX, $bodyY, $bodyWidth, $bodyHeight
    $cornerRadius = [int]($bodyWidth * 0.35)
    $gp2 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp2.AddArc($bodyRect.X, $bodyRect.Y, $cornerRadius * 2, $cornerRadius * 2, 180, 90)
    $gp2.AddArc($bodyRect.Right - $cornerRadius * 2, $bodyRect.Y, $cornerRadius * 2, $cornerRadius * 2, 270, 90)
    $gp2.AddArc($bodyRect.Right - $cornerRadius * 2, $bodyRect.Bottom - $cornerRadius * 2, $cornerRadius * 2, $cornerRadius * 2, 0, 90)
    $gp2.AddArc($bodyRect.X, $bodyRect.Bottom - $cornerRadius * 2, $cornerRadius * 2, $cornerRadius * 2, 90, 90)
    $gp2.CloseFigure()
    $g.FillPath($bodyBrush, $gp2)

    # Highlight on left side of body
    $hlRect = New-Object System.Drawing.Rectangle $bodyX + [int]($bodyWidth * 0.08), $bodyY + [int]($bodyHeight * 0.1), [int]($bodyWidth * 0.3), [int]($bodyHeight * 0.7)
    $gp3 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp3.AddEllipse($hlRect)
    $g.FillPath($highlightBrush, $gp3)

    # Shadow on right side
    $shRect = New-Object System.Drawing.Rectangle $bodyRect.Right - [int]($bodyWidth * 0.25), $bodyY + [int]($bodyHeight * 0.2), [int]($bodyWidth * 0.2), [int]($bodyHeight * 0.6)
    $gp4 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp4.AddEllipse($shRect)
    $g.FillPath($shadowBrush, $gp4)

    # Visor (helmet window) - curved shape
    $visorWidth = [int]($bodyWidth * 0.65)
    $visorHeight = [int]($bodyHeight * 0.45)
    $visorX = $centerX - $visorWidth / 2
    $visorY = $bodyY + [int]($bodyHeight * 0.18)
    $visorRect = New-Object System.Drawing.Rectangle $visorX, $visorY, $visorWidth, $visorHeight
    $visorCorner = [int]($visorWidth * 0.4)
    $gp5 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp5.AddArc($visorRect.X, $visorRect.Y, $visorCorner * 2, $visorCorner * 2, 180, 90)
    $gp5.AddArc($visorRect.Right - $visorCorner * 2, $visorRect.Y, $visorCorner * 2, $visorCorner * 2, 270, 90)
    $gp5.AddArc($visorRect.Right - $visorCorner * 2, $visorRect.Bottom - $visorCorner * 2, $visorCorner * 2, $visorCorner * 2, 0, 90)
    $gp5.AddArc($visorRect.X, $visorRect.Bottom - $visorCorner * 2, $visorCorner * 2, $visorCorner * 2, 90, 90)
    $gp5.CloseFigure()
    $g.FillPath($visorBrush, $gp5)

    # Visor highlight
    $vhRect = New-Object System.Drawing.Rectangle $visorX + [int]($visorWidth * 0.1), $visorY + [int]($visorHeight * 0.15), [int]($visorWidth * 0.5), [int]($visorHeight * 0.35)
    $gp6 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp6.AddEllipse($vhRect)
    $g.FillPath($visorHighlightBrush, $gp6)

    # Suspicious "?" mark above head (imposter indicator)
    $qSize = [int]($size * 0.18)
    $qFont = New-Object System.Drawing.Font("Segoe UI", $qSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $qBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232,185,58))
    $qFormat = New-Object System.Drawing.StringFormat
    $qFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $qFormat.LineAlignment = [System.Drawing.StringAlignment]::Far
    $g.DrawString("?", $qFont, $qBrush, $centerX, $bodyY - [int]($size * 0.02), $qFormat)

    # Small magnifying glass icon in corner (detective theme)
    $mgSize = [int]($size * 0.14)
    $mgX = $size - $padding - $mgSize
    $mgY = $size - $padding - $mgSize
    $mgPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(232,185,58), [int]($size * 0.018))
    $mgCenterX = $mgX + $mgSize * 0.55
    $mgCenterY = $mgY + $mgSize * 0.55
    $mgRadius = [int]($mgSize * 0.35)
    $g.DrawEllipse($mgPen, $mgCenterX - $mgRadius, $mgCenterY - $mgRadius, $mgRadius * 2, $mgRadius * 2)
    $handleX1 = $mgCenterX + [int]($mgRadius * 0.7)
    $handleY1 = $mgCenterY + [int]($mgRadius * 0.7)
    $handleX2 = $mgX + $mgSize * 0.9
    $handleY2 = $mgY + $mgSize * 0.9
    $g.DrawLine($mgPen, $handleX1, $handleY1, $handleX2, $handleY2)

    $bmp.Save("$outputDir\icon-$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
    Write-Host "Generated icon-$size.png"
}

Write-Host "All imposter-themed icons generated!"