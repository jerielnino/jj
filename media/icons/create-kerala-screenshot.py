from PIL import Image, ImageDraw, ImageFont
import math

# Create a 240x480 image with FULLY TRANSPARENT background
width, height = 240, 480
img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# ===== COCONUT TREE SILHOUETTES (top area) =====
tree_color = (40, 0, 0, 180)  # Dark semi-transparent
for i in range(3):
    tx = int(width * (0.15 + i * 0.35))
    ty = int(height * 0.08)
    trunk_w = int(width * 0.02)
    trunk_h = int(height * 0.18)

    # Trunk
    draw.rectangle([tx, ty, tx + trunk_w, ty + trunk_h], fill=tree_color)

    # Fronds
    frond_color = (0, 80, 0, 200)
    for f in range(5):
        angle = -60 + f * 30
        rad = angle * math.pi / 180
        fx = tx + trunk_w // 2 + int(math.cos(rad) * width * 0.06)
        fy = ty + int(math.sin(rad) * width * 0.06)
        draw.ellipse([fx - int(width * 0.02), fy - int(width * 0.01),
                      fx + int(width * 0.02), fy + int(width * 0.01)], fill=frond_color)

# ===== MAIN KATHAKALI CHARACTER (center) =====
center_x = width // 2
center_y = int(height * 0.55)

# Colors from Kerala theme - FULLY OPAQUE for character
body_color = (245, 240, 230, 255)
body_shadow = (200, 180, 160, 255)
body_highlight = (255, 250, 240, 255)
kasavu_gold = (212, 175, 55, 255)
skin_tone = (210, 170, 130, 255)
skin_shadow = (180, 140, 100, 255)
kathakali_green = (0, 120, 60, 255)
kathakali_red = (180, 30, 30, 255)
kathakali_white = (255, 255, 255, 255)
kathakali_black = (20, 20, 20, 255)

body_width = int(width * 0.48)
body_height = int(height * 0.35)
body_x = center_x - body_width // 2
body_y = int(height * 0.45)

# ===== BACKPACK (uri/olla bag) =====
bp_width = int(body_width * 0.3)
bp_height = int(body_height * 0.5)
bp_x = body_x + body_width - int(bp_width * 0.6)
bp_y = body_y + int(body_height * 0.2)

# Draw backpack as rounded shape
backpack_points = []
bp_curve = int(bp_width * 0.75)
for angle in range(90, 271):
    rad = angle * math.pi / 180
    x = bp_x + bp_width + int(math.cos(rad) * bp_curve)
    y = bp_y + bp_height // 2 + int(math.sin(rad) * bp_curve)
    backpack_points.append((x, y))
backpack_points.append((bp_x + bp_width, bp_y + bp_height))
backpack_points.append((bp_x + bp_width, bp_y))
draw.polygon(backpack_points, fill=body_color, outline=kasavu_gold)

# ===== BODY (mundu) =====
corner_radius = int(body_width * 0.35)
# Rounded rectangle for body
draw.rounded_rectangle([body_x, body_y, body_x + body_width, body_y + body_height],
                       radius=corner_radius, fill=body_color, outline=kasavu_gold, width=2)

# Kasavu border (gold strip at bottom)
kasavu_y = body_y + body_height - int(height * 0.03)
kasavu_h = int(height * 0.025)
draw.rounded_rectangle([body_x, kasavu_y, body_x + body_width, kasavu_y + kasavu_h],
                       radius=int(kasavu_h * 0.5), fill=kasavu_gold)

# Body highlight (left side)
hl_x = body_x + int(body_width * 0.08)
hl_y = body_y + int(body_height * 0.12)
hl_w = int(body_width * 0.25)
hl_h = int(body_height * 0.6)
draw.ellipse([hl_x, hl_y, hl_x + hl_w, hl_y + hl_h], fill=body_highlight)

# Body shadow (right side)
sh_x = body_x + body_width - int(body_width * 0.28)
sh_y = body_y + int(body_height * 0.2)
sh_w = int(body_width * 0.2)
sh_h = int(body_height * 0.55)
draw.ellipse([sh_x, sh_y, sh_x + sh_w, sh_y + sh_h], fill=body_shadow)

# ===== HEAD =====
head_radius = int(body_width * 0.55)
head_y = body_y - int(head_radius * 0.85)
# Face
draw.ellipse([center_x - head_radius, head_y, center_x + head_radius, head_y + head_radius * 2], fill=skin_tone)
# Forehead mark
draw.ellipse([center_x - int(head_radius * 0.3), head_y + int(head_radius * 0.15),
              center_x + int(head_radius * 0.05), head_y + int(head_radius * 0.4)], fill=kathakali_white)
# Cheek shadow
draw.ellipse([center_x + int(head_radius * 0.25), head_y + int(head_radius * 0.3),
              center_x + int(head_radius * 0.55), head_y + int(head_radius * 0.65)], fill=skin_shadow)

# ===== KATHAKALI CROWN (mudi) =====
crown_base_y = head_y - int(head_radius * 0.25)
crown_height = int(head_radius * 1.1)
crown_width = int(head_radius * 2.1)
crown_x = center_x - crown_width // 2

# Crown shape using polygon
crown_points = [
    (crown_x + int(crown_width * 0.15), crown_base_y + int(crown_height * 0.3)),
    (center_x, crown_base_y),
    (crown_x + crown_width - int(crown_width * 0.15), crown_base_y + int(crown_height * 0.3)),
    (crown_x + crown_width - int(crown_width * 0.05), crown_base_y + int(crown_height * 0.35)),
    (crown_x + crown_width, crown_base_y + int(crown_height * 0.6)),
    (crown_x + crown_width - int(crown_width * 0.1), crown_base_y + int(crown_height * 0.9)),
    (center_x + int(crown_width * 0.15), crown_base_y + crown_height),
    (crown_x + int(crown_width * 0.1), crown_base_y + int(crown_height * 0.9)),
    (crown_x, crown_base_y + int(crown_height * 0.6)),
    (crown_x + int(crown_width * 0.05), crown_base_y + int(crown_height * 0.35)),
]
draw.polygon(crown_points, fill=kathakali_green, outline=kasavu_gold, width=3)

# Crown gold dots
dot_size = int(width * 0.018)
dots = [
    (center_x, crown_base_y + int(crown_height * 0.15)),
    (center_x - int(crown_width * 0.18), crown_base_y + int(crown_height * 0.35)),
    (center_x + int(crown_width * 0.18), crown_base_y + int(crown_height * 0.35)),
    (center_x, crown_base_y + int(crown_height * 0.55)),
    (center_x - int(crown_width * 0.12), crown_base_y + int(crown_height * 0.75)),
    (center_x + int(crown_width * 0.12), crown_base_y + int(crown_height * 0.75)),
]
for dx, dy in dots:
    draw.ellipse([dx - dot_size, dy - dot_size, dx + dot_size, dy + dot_size], fill=kasavu_gold)

# Crown central jewel
jewel_size = int(width * 0.035)
draw.ellipse([center_x - jewel_size, crown_base_y + int(crown_height * 0.12) - jewel_size,
              center_x + jewel_size, crown_base_y + int(crown_height * 0.12) + jewel_size], fill=kathakali_red)
draw.ellipse([center_x - int(jewel_size * 0.4), crown_base_y + int(crown_height * 0.12) - int(jewel_size * 0.8),
              center_x + int(jewel_size * 0.4), crown_base_y + int(crown_height * 0.12)], fill=kathakali_white)

# ===== FACE DETAILS =====
eye_y = head_y + int(head_radius * 0.3)
eye_w = int(head_radius * 0.22)
eye_h = int(head_radius * 0.18)
eye_gap = int(head_radius * 0.3)

# Left eye
le_x = center_x - eye_gap - eye_w
# Eye white
draw.ellipse([le_x, eye_y, le_x + eye_w * 2, eye_y + eye_h * 2], fill=kathakali_white, outline=kathakali_black, width=2)
# Red eye surround
draw.ellipse([le_x - int(eye_w * 0.3), eye_y, le_x + int(eye_w * 2.3), eye_y + eye_h * 2], fill=kathakali_red)
# Pupil
draw.ellipse([le_x + int(eye_w * 0.4), eye_y + int(eye_h * 0.3),
              le_x + int(eye_w * 0.9), eye_y + int(eye_h * 0.9)], fill=kathakali_black)

# Right eye
re_x = center_x + eye_gap - eye_w
draw.ellipse([re_x, eye_y, re_x + eye_w * 2, eye_y + eye_h * 2], fill=kathakali_white, outline=kathakali_black, width=2)
draw.ellipse([re_x - int(eye_w * 0.3), eye_y, re_x + int(eye_w * 2.3), eye_y + eye_h * 2], fill=kathakali_red)
draw.ellipse([re_x + int(eye_w * 0.4), eye_y + int(eye_h * 0.3),
              re_x + int(eye_w * 0.9), eye_y + int(eye_h * 0.9)], fill=kathakali_black)

# Eyebrows
brow_y = eye_y - int(head_radius * 0.1)
# Left brow
draw.arc([le_x, brow_y - int(head_radius * 0.1), le_x + eye_w * 2, brow_y + int(head_radius * 0.1)],
         180, 0, fill=kathakali_black, width=int(width * 0.015))
# Right brow
draw.arc([re_x, brow_y - int(head_radius * 0.1), re_x + eye_w * 2, brow_y + int(head_radius * 0.1)],
         180, 0, fill=kathakali_black, width=int(width * 0.015))

# Nose
nose_y = eye_y + int(eye_h * 1.5)
draw.arc([center_x - int(head_radius * 0.05), nose_y, center_x + int(head_radius * 0.05), nose_y + int(head_radius * 0.08)],
         180, 0, fill=kathakali_black, width=int(width * 0.015))

# Mouth
mouth_y = nose_y + int(head_radius * 0.15)
draw.arc([center_x - int(head_radius * 0.15), mouth_y - int(head_radius * 0.05),
          center_x + int(head_radius * 0.15), mouth_y + int(head_radius * 0.15)],
         0, 180, fill=kathakali_red, width=int(width * 0.012))

# ===== KERALA ELEMENTS: Coconut tree on left shoulder =====
tree_x = body_x - int(width * 0.04)
tree_y = body_y - int(height * 0.05)
t_trunk_w = int(width * 0.015)
t_trunk_h = int(height * 0.18)
t_trunk_color = (100, 60, 30, 255)
draw.rectangle([tree_x, tree_y, tree_x + t_trunk_w, tree_y + t_trunk_h], fill=t_trunk_color)

t_frond_color = (0, 120, 0, 255)
for f in range(4):
    ang = -70 + f * 40
    rad = ang * math.pi / 180
    fr_x = tree_x + t_trunk_w // 2 + int(math.cos(rad) * width * 0.05)
    fr_y = tree_y + int(math.sin(rad) * width * 0.05)
    draw.ellipse([fr_x - int(width * 0.015), fr_y - int(width * 0.008),
                  fr_x + int(width * 0.015), fr_y + int(width * 0.008)], fill=t_frond_color)

# ===== HOUSEBOAT on right =====
boat_x = body_x + body_width + int(width * 0.01)
boat_y = body_y + body_height - int(height * 0.08)
boat_w = int(width * 0.18)
boat_h = int(height * 0.04)
boat_color = (180, 140, 100, 255)

# Boat hull
draw.ellipse([boat_x, boat_y, boat_x + boat_w, boat_y + boat_h * 2], fill=boat_color)
# Boat roof
roof_color = (160, 100, 60, 255)
draw.rectangle([boat_x + int(boat_w * 0.15), boat_y - int(boat_h * 0.5),
                boat_x + int(boat_w * 0.85), boat_y], fill=roof_color)

# ===== GOLD ACCENT RING =====
ring_radius = int(width * 0.44)
ring_width = int(width * 0.018)
# Draw ring as two ellipses
draw.ellipse([center_x - ring_radius, center_y - ring_radius - int(height * 0.02),
              center_x + ring_radius, center_y + ring_radius - int(height * 0.02)],
             outline=kasavu_gold, width=ring_width)

# ===== "?" MARK (imposter symbol) =====
q_y = crown_base_y - int(height * 0.01)
try:
    font = ImageFont.truetype("arial.ttf", int(width * 0.16))
except:
    font = ImageFont.load_default()

# Draw ? with gold color
draw.text((center_x, q_y), "?", font=font, fill=kasavu_gold, anchor="ms", stroke_width=2, stroke_fill=kathakali_black)

# Save
img.save('imposter-pwa/icons/play-store-kerala.webp', 'WEBP', quality=90, lossless=False)
print("Saved Kerala-themed Play Store image with FULLY TRANSPARENT background")