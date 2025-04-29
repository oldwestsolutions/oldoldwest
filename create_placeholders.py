from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(width, height, text, filename):
    img = Image.new('RGB', (width, height), color='gray')
    d = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("Arial", 72)
    except:
        font = ImageFont.load_default()
    # Get text size using the newer API
    bbox = d.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    position = ((width-text_width)/2, (height-text_height)/2)
    d.text(position, text, fill='white', font=font)
    img.save(filename)

# Create directory if it doesn't exist
os.makedirs('public/images', exist_ok=True)

# Create stream thumbnails
for i in range(1, 7):
    create_placeholder(1280, 720, f'Stream {i}', f'public/images/stream{i}.jpg')

# Create category images
for i in range(1, 7):
    create_placeholder(1280, 720, f'Category {i}', f'public/images/category{i}.jpg')

# Create featured images
for i in range(1, 4):
    create_placeholder(1280, 720, f'Featured {i}', f'public/images/featured{i}.jpg') 