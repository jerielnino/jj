from PIL import Image
import os

# Source image
src_path = "imposter-pwa/icons/boy_hoodie_specs_imposter.png"
output_dir = "imposter-pwa/icons"

# Load source
src = Image.open(src_path)
print(f"Source: {src.size}, {src.mode}")

# Convert to RGBA if needed
if src.mode != 'RGBA':
    src = src.convert('RGBA')

# Icon sizes needed for PWA
icon_sizes = [72, 96, 128, 144, 152, 192, 384, 512]

# Generate icons
for size in icon_sizes:
    # Resize with high-quality resampling
    icon = src.resize((size, size), Image.Resampling.LANCZOS)

    # Save as PNG
    out_path = os.path.join(output_dir, f"icon-{size}.png")
    icon.save(out_path, "PNG", optimize=True)
    print(f"Generated: icon-{size}.png ({size}x{size})")

# Generate screenshot (240x480) - portrait orientation
# We'll create a 240x480 version, keeping aspect ratio with padding if needed
screenshot_w, screenshot_h = 240, 480

# Calculate scaling to fit width
scale = screenshot_w / src.width
new_h = int(src.height * scale)

if new_h <= screenshot_h:
    # Fits in height, center vertically
    screenshot = src.resize((screenshot_w, new_h), Image.Resampling.LANCZOS)
    # Create canvas with transparent background
    canvas = Image.new('RGBA', (screenshot_w, screenshot_h), (0, 0, 0, 0))
    y_offset = (screenshot_h - new_h) // 2
    canvas.paste(screenshot, (0, y_offset), screenshot)
else:
    # Too tall, crop or scale to height
    scale = screenshot_h / src.height
    new_w = int(src.width * scale)
    screenshot = src.resize((new_w, screenshot_h), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (screenshot_w, screenshot_h), (0, 0, 0, 0))
    x_offset = (screenshot_w - new_w) // 2
    canvas.paste(screenshot, (x_offset, 0), screenshot)

screenshot_path = os.path.join(output_dir, "play-store-kerala.webp")
canvas.save(screenshot_path, "WEBP", quality=90)
print(f"Generated: play-store-kerala.webp ({screenshot_w}x{screenshot_h})")

# Also generate maskable icon (512x512 with safe zone)
# For maskable, content should be in center 40% (safe zone)
maskable_size = 512
maskable = src.resize((maskable_size, maskable_size), Image.Resampling.LANCZOS)
maskable_path = os.path.join(output_dir, "icon-512-maskable.png")
maskable.save(maskable_path, "PNG", optimize=True)
print(f"Generated: icon-512-maskable.png ({maskable_size}x{maskable_size})")

print("\nAll icons and screenshots generated!")