Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms

$sizes = @(72, 96, 128, 144, 152, 192, 384, 512)
$outputDir = "C:\Users\Asus\Mywork\imposter-pwa\icons"

foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Pre-compute scale helper
    $sx = { param($f) [int]($size * $f) }

    # ===== BACKGROUND: Kerala sunset gradient =====
    $rect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect,
        [System.Drawing.Color]::FromArgb(20, 40, 20),
        [System.Drawing.Color]::FromArgb(180, 120, 30), 45)
    $g.FillRectangle($bgBrush, $rect)

    # Coconut tree silhouettes in background
    $treeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 0, 0, 0))
    for ($i = 0; $i -lt 3; $i++) {
        $tx = & $sx (0.15 + $i * 0.35)
        $ty = & $sx 0.15
        $trunkW = & $sx 0.02
        $trunkH = & $sx 0.35
        $g.FillRectangle($treeBrush, $tx, $ty, $trunkW, $trunkH)
        $frondBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 0, 60, 0))
        for ($f = 0; $f -lt 5; $f++) {
            $angle = -60 + $f * 30
            $rad = $angle * [Math]::PI / 180
            $fx = $tx + [int]($trunkW/2) + [int]([Math]::Cos($rad) * & $sx 0.12)
            $fy = $ty + [int]([Math]::Sin($rad) * & $sx 0.12)
            $g.FillEllipse($frondBrush, $fx - & $sx 0.04, $fy - & $sx 0.02, & $sx 0.08, & $sx 0.04)
        }
    }

    $centerX = $size / 2
    $centerY = & $sx 0.55

    # ===== COLORS =====
    $bodyColor    = [System.Drawing.Color]::FromArgb(245, 240, 230)
    $bodyShadow   = [System.Drawing.Color]::FromArgb(200, 180, 160)
    $bodyHighlight= [System.Drawing.Color]::FromArgb(255, 250, 240)
    $kasavuGold   = [System.Drawing.Color]::FromArgb(212, 175, 55)
    $skinTone     = [System.Drawing.Color]::FromArgb(210, 170, 130)
    $skinShadow   = [System.Drawing.Color]::FromArgb(180, 140, 100)
    $kathakaliGreen = [System.Drawing.Color]::FromArgb(0, 120, 60)
    $kathakaliRed   = [System.Drawing.Color]::FromArgb(180, 30, 30)
    $kathakaliWhite = [System.Drawing.Color]::FromArgb(255, 255, 255)
    $kathakaliBlack = [System.Drawing.Color]::FromArgb(20, 20, 20)

    $bodyBrush        = New-Object System.Drawing.SolidBrush($bodyColor)
    $shadowBrush      = New-Object System.Drawing.SolidBrush($bodyShadow)
    $highlightBrush   = New-Object System.Drawing.SolidBrush($bodyHighlight)
    $kasavuBrush      = New-Object System.Drawing.SolidBrush($kasavuGold)
    $skinBrush        = New-Object System.Drawing.SolidBrush($skinTone)
    $skinShadowBrush  = New-Object System.Drawing.SolidBrush($skinShadow)
    $greenBrush       = New-Object System.Drawing.SolidBrush($kathakaliGreen)
    $redBrush         = New-Object System.Drawing.SolidBrush($kathakaliRed)
    $whiteBrush       = New-Object System.Drawing.SolidBrush($kathakaliWhite)
    $blackBrush       = New-Object System.Drawing.SolidBrush($kathakaliBlack)

    $penKasavuThin = New-Object System.Drawing.Pen($kasavuGold, [int]($size*0.008))
    $penKasavuMed  = New-Object System.Drawing.Pen($kasavuGold, [int]($size*0.012))
    $penBlackThin  = New-Object System.Drawing.Pen($blackBrush, [int]($size*0.01))
    $penBlackMed   = New-Object System.Drawing.Pen($blackBrush, [int]($size*0.015))
    $penRedThin    = New-Object System.Drawing.Pen($redBrush,  [int]($size*0.012))

    $bodyWidth  = & $sx 0.48
    $bodyHeight = & $sx 0.52
    $bodyX = $centerX - [int]($bodyWidth / 2)
    $bodyY = & $sx 0.45

    # ===== BACKPACK (uri/olla bag) =====
    $bpWidth  = [int]($bodyWidth * 0.3)
    $bpHeight = [int]($bodyHeight * 0.5)
    $bpX = $bodyX + $bodyWidth - [int]($bpWidth * 0.6)
    $bpY = $bodyY + [int]($bodyHeight * 0.2)
    $gp = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp.AddArc($bpX, $bpY, $bpWidth * 1.5, $bpHeight * 1.5, 90, 180)
    $gp.AddLine($bpX + $bpWidth, $bpY, $bpX + $bpWidth, $bpY + $bpHeight)
    $gp.AddArc($bpX, $bpY + $bpHeight - [int]($bpWidth * 0.8), $bpWidth * 1.5, [int]($bpWidth * 1.5), 270, 180)
    $gp.CloseFigure()
    $g.FillPath($bodyBrush, $gp)
    $g.DrawPath($penKasavuThin, $gp)

    # ===== BODY (mundu) =====
    $cornerRadius = [int]($bodyWidth * 0.35)
    $gp2 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp2.AddArc($bodyX, $bodyY, $cornerRadius * 2, $cornerRadius * 2, 180, 90)
    $gp2.AddArc($bodyX + $bodyWidth - $cornerRadius * 2, $bodyY, $cornerRadius * 2, $cornerRadius * 2, 270, 90)
    $gp2.AddArc($bodyX + $bodyWidth - $cornerRadius * 2, $bodyY + $bodyHeight - $cornerRadius * 2, $cornerRadius * 2, $cornerRadius * 2, 0, 90)
    $gp2.AddArc($bodyX, $bodyY + $bodyHeight - $cornerRadius * 2, $cornerRadius * 2, $cornerRadius * 2, 90, 90)
    $gp2.CloseFigure()
    $g.FillPath($bodyBrush, $gp2)

    # Kasavu border
    $kasavuY = $bodyY + $bodyHeight - & $sx 0.06
    $kasavuH = & $sx 0.05
    $gpKasavu = New-Object System.Drawing.Drawing2D.GraphicsPath
    $kr = [int]($kasavuH * 0.5)
    $gpKasavu.AddArc($bodyX, $kasavuY, $kr*2, $kr*2, 180, 90)
    $gpKasavu.AddArc($bodyX + $bodyWidth - $kr*2, $kasavuY, $kr*2, $kr*2, 270, 90)
    $gpKasavu.AddArc($bodyX + $bodyWidth - $kr*2, $kasavuY + $kasavuH - $kr*2, $kr*2, $kr*2, 0, 90)
    $gpKasavu.AddArc($bodyX, $kasavuY + $kasavuH - $kr*2, $kr*2, $kr*2, 90, 90)
    $gpKasavu.CloseFigure()
    $g.FillPath($kasavuBrush, $gpKasavu)

    # Body highlight
    $gp3 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp3.AddEllipse($bodyX + [int]($bodyWidth * 0.08), $bodyY + [int]($bodyHeight * 0.12), [int]($bodyWidth * 0.25), [int]($bodyHeight * 0.6))
    $g.FillPath($highlightBrush, $gp3)

    # Body shadow
    $gp4 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gp4.AddEllipse($bodyX + $bodyWidth - [int]($bodyWidth * 0.28), $bodyY + [int]($bodyHeight * 0.2), [int]($bodyWidth * 0.2), [int]($bodyHeight * 0.55))
    $g.FillPath($shadowBrush, $gp4)

    # ===== HEAD =====
    $headRadius = [int]($bodyWidth * 0.55)
    $headY = $bodyY - [int]($headRadius * 0.85)
    $g.FillEllipse($skinBrush, $centerX - $headRadius, $headY, $headRadius * 2, $headRadius * 2)
    $g.FillEllipse($whiteBrush, $centerX - [int]($headRadius * 0.3), $headY + [int]($headRadius * 0.15), [int]($headRadius * 0.35), [int]($headRadius * 0.25))
    $g.FillEllipse($skinShadowBrush, $centerX + [int]($headRadius * 0.25), $headY + [int]($headRadius * 0.3), [int]($headRadius * 0.3), [int]($headRadius * 0.35))

    # ===== KATHAKALI CROWN (mudi) =====
    $crownBaseY = $headY - [int]($headRadius * 0.25)
    $crownHeight = [int]($headRadius * 1.1)
    $crownWidth = [int]($headRadius * 2.1)
    $crownX = $centerX - [int]($crownWidth / 2)
    $gpCrown = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gpCrown.AddLine($crownX + [int]($crownWidth * 0.15), $crownBaseY + [int]($crownHeight * 0.3), $centerX, $crownBaseY)
    $gpCrown.AddLine($centerX, $crownBaseY, $crownX + $crownWidth - [int]($crownWidth * 0.15), $crownBaseY + [int]($crownHeight * 0.3))
    $gpCrown.AddCurve(@(
        (New-Object System.Drawing.Point($crownX + $crownWidth - [int]($crownWidth * 0.05), $crownBaseY + [int]($crownHeight * 0.35))),
        (New-Object System.Drawing.Point($crownX + $crownWidth, $crownBaseY + [int]($crownHeight * 0.6))),
        (New-Object System.Drawing.Point($crownX + $crownWidth - [int]($crownWidth * 0.1), $crownBaseY + [int]($crownHeight * 0.9))),
        (New-Object System.Drawing.Point($centerX + [int]($crownWidth * 0.15), $crownBaseY + $crownHeight)),
        (New-Object System.Drawing.Point($crownX + [int]($crownWidth * 0.1), $crownBaseY + [int]($crownHeight * 0.9))),
        (New-Object System.Drawing.Point($crownX, $crownBaseY + [int]($crownHeight * 0.6))),
        (New-Object System.Drawing.Point($crownX + [int]($crownWidth * 0.05), $crownBaseY + [int]($crownHeight * 0.35)))
    ))
    $gpCrown.CloseFigure()
    $g.FillPath($greenBrush, $gpCrown)
    $g.DrawPath($penKasavuMed, $gpCrown)

    # Crown gold dots
    $dotSize = & $sx 0.018
    $dots = @(
        @($centerX, $crownBaseY + [int]($crownHeight * 0.15)),
        @($centerX - [int]($crownWidth * 0.18), $crownBaseY + [int]($crownHeight * 0.35)),
        @($centerX + [int]($crownWidth * 0.18), $crownBaseY + [int]($crownHeight * 0.35)),
        @($centerX, $crownBaseY + [int]($crownHeight * 0.55)),
        @($centerX - [int]($crownWidth * 0.12), $crownBaseY + [int]($crownHeight * 0.75)),
        @($centerX + [int]($crownWidth * 0.12), $crownBaseY + [int]($crownHeight * 0.75))
    )
    foreach ($d in $dots) {
        $g.FillEllipse($kasavuBrush, $d[0] - $dotSize, $d[1] - $dotSize, $dotSize * 2, $dotSize * 2)
    }

    # Crown central jewel
    $jewelSize = & $sx 0.035
    $g.FillEllipse($redBrush, $centerX - $jewelSize, $crownBaseY + [int]($crownHeight * 0.12) - $jewelSize, $jewelSize * 2, $jewelSize * 2)
    $g.FillEllipse($whiteBrush, $centerX - [int]($jewelSize*0.4), $crownBaseY + [int]($crownHeight * 0.12) - [int]($jewelSize*0.8), [int]($jewelSize*0.8), [int]($jewelSize*0.5))

    # ===== FACE =====
    $eyeY = $headY + [int]($headRadius * 0.3)
    $eyeSizeW = [int]($headRadius * 0.22)
    $eyeSizeH = [int]($headRadius * 0.18)
    $eyeGap = [int]($headRadius * 0.3)

    # Left eye
    $leX = $centerX - $eyeGap - $eyeSizeW
    $gpEye = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gpEye.AddArc($leX, $eyeY, $eyeSizeW * 2, $eyeSizeH * 2, 0, 180)
    $gpEye.AddArc($leX, $eyeY + $eyeSizeH, $eyeSizeW * 2, $eyeSizeH * 2, 180, 180)
    $gpEye.CloseFigure()
    $g.FillPath($whiteBrush, $gpEye)
    $g.DrawPath($penBlackThin, $gpEye)

    $gpRedEye = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gpRedEye.AddArc($leX - [int]($eyeSizeW*0.3), $eyeY, [int]($eyeSizeW * 2.6), $eyeSizeH * 2, 0, 180)
    $gpRedEye.AddArc($leX - [int]($eyeSizeW*0.3), $eyeY + $eyeSizeH, [int]($eyeSizeW * 2.6), $eyeSizeH * 2, 180, 180)
    $gpRedEye.CloseFigure()
    $g.FillPath($redBrush, $gpRedEye)
    $g.FillEllipse($blackBrush, $leX + [int]($eyeSizeW*0.4), $eyeY + [int]($eyeSizeH*0.3), [int]($eyeSizeW*0.5), [int]($eyeSizeH*0.6))

    # Right eye
    $reX = $centerX + $eyeGap - $eyeSizeW
    $gpEye2 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gpEye2.AddArc($reX, $eyeY, $eyeSizeW * 2, $eyeSizeH * 2, 0, 180)
    $gpEye2.AddArc($reX, $eyeY + $eyeSizeH, $eyeSizeW * 2, $eyeSizeH * 2, 180, 180)
    $gpEye2.CloseFigure()
    $g.FillPath($whiteBrush, $gpEye2)
    $g.DrawPath($penBlackThin, $gpEye2)

    $gpRedEye2 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gpRedEye2.AddArc($reX - [int]($eyeSizeW*0.3), $eyeY, [int]($eyeSizeW * 2.6), $eyeSizeH * 2, 0, 180)
    $gpRedEye2.AddArc($reX - [int]($eyeSizeW*0.3), $eyeY + $eyeSizeH, [int]($eyeSizeW * 2.6), $eyeSizeH * 2, 180, 180)
    $gpRedEye2.CloseFigure()
    $g.FillPath($redBrush, $gpRedEye2)
    $g.FillEllipse($blackBrush, $reX + [int]($eyeSizeW*0.4), $eyeY + [int]($eyeSizeH*0.3), [int]($eyeSizeW*0.5), [int]($eyeSizeH*0.6))

    # Eyebrows
    $browY = $eyeY - [int]($headRadius * 0.1)
    $g.DrawCurve($penBlackMed, @(
        (New-Object System.Drawing.Point($leX, $browY + [int]($headRadius*0.05))),
        (New-Object System.Drawing.Point($centerX - $eyeGap, $browY - [int]($headRadius*0.1))),
        (New-Object System.Drawing.Point($leX + $eyeSizeW * 2, $browY + [int]($headRadius*0.05)))
    ))
    $g.DrawCurve($penBlackMed, @(
        (New-Object System.Drawing.Point($reX, $browY + [int]($headRadius*0.05))),
        (New-Object System.Drawing.Point($centerX + $eyeGap, $browY - [int]($headRadius*0.1))),
        (New-Object System.Drawing.Point($reX + $eyeSizeW * 2, $browY + [int]($headRadius*0.05)))
    ))

    # Nose
    $noseY = $eyeY + [int]($eyeSizeH * 1.5)
    $g.DrawCurve($penBlackMed, @(
        (New-Object System.Drawing.Point($centerX - [int]($headRadius*0.05), $noseY)),
        (New-Object System.Drawing.Point($centerX, $noseY + [int]($headRadius*0.08))),
        (New-Object System.Drawing.Point($centerX + [int]($headRadius*0.05), $noseY))
    ))

    # Mouth
    $mouthY = $noseY + [int]($headRadius * 0.15)
    $g.DrawArc($penRedThin, $centerX - [int]($headRadius*0.15), $mouthY - [int]($headRadius*0.05), [int]($headRadius*0.3), [int]($headRadius*0.2), 0, -180)

    # ===== KERALA ELEMENTS =====
    # Coconut tree on left shoulder
    $treeX = $bodyX - & $sx 0.08
    $treeY = $bodyY - & $sx 0.1
    $tTrunkW = & $sx 0.015
    $tTrunkH = & $sx 0.35
    $tTrunkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100, 60, 30))
    $g.FillRectangle($tTrunkBrush, $treeX, $treeY, $tTrunkW, $tTrunkH)
    $tFrondBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 0, 100, 0))
    for ($f = 0; $f -lt 4; $f++) {
        $ang = -70 + $f * 40
        $rad = $ang * [Math]::PI / 180
        $frX = $treeX + [int]($tTrunkW/2) + [int]([Math]::Cos($rad) * & $sx 0.09)
        $frY = $treeY + [int]([Math]::Sin($rad) * & $sx 0.09)
        $g.FillEllipse($tFrondBrush, $frX - & $sx 0.03, $frY - & $sx 0.015, & $sx 0.06, & $sx 0.03)
    }

    # Houseboat on right
    $boatX = $bodyX + $bodyWidth + & $sx 0.02
    $boatY = $bodyY + $bodyHeight - & $sx 0.15
    $boatW = & $sx 0.18
    $boatH = & $sx 0.08
    $boatBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 140, 100))
    $gpBoat = New-Object System.Drawing.Drawing2D.GraphicsPath
    $gpBoat.AddArc($boatX, $boatY, $boatH*2, $boatH*2, 90, 180)
    $gpBoat.AddLine($boatX + $boatH, $boatY, $boatX + $boatW - $boatH, $boatY)
    $gpBoat.AddArc($boatX + $boatW - $boatH*2, $boatY, $boatH*2, $boatH*2, 270, 180)
    $gpBoat.AddLine($boatX + $boatW - $boatH, $boatY + $boatH, $boatX + $boatH, $boatY + $boatH)
    $gpBoat.CloseFigure()
    $g.FillPath($boatBrush, $gpBoat)
    $roofBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(160, 100, 60))
    $g.FillRectangle($roofBrush, $boatX + [int]($boatW*0.15), $boatY - [int]($boatH*0.5), [int]($boatW*0.7), [int]($boatH*0.5))

    # ===== GOLD ACCENT RING =====
    $ringRadius = & $sx 0.44
    $ringPen = New-Object System.Drawing.Pen($kasavuGold, [int]($size * 0.018))
    $g.DrawEllipse($ringPen, $centerX - $ringRadius, $centerY - $ringRadius - & $sx 0.05, $ringRadius * 2, $ringRadius * 2)

    # ===== "?" MARK =====
    $qSize = & $sx 0.16
    $qFont = New-Object System.Drawing.Font("Segoe UI", $qSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $qFormat = New-Object System.Drawing.StringFormat
    $qFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $qFormat.LineAlignment = [System.Drawing.StringAlignment]::Far
    $g.DrawString("?", $qFont, $kasavuBrush, $centerX, $crownBaseY - & $sx 0.02, $qFormat)

    # Save
    $bmp.Save("$outputDir\icon-$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
    Write-Host "Generated Kerala icon-$size.png"
}

Write-Host "All Kerala-themed imposter icons generated!"