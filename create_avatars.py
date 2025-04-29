from PIL import Image, ImageDraw
import os

def create_avatar(size, color, text, filename):
    img = Image.new('RGB', (size, size), color=color)
    d = ImageDraw.Draw(img)
    # Draw a circle
    d.ellipse((0, 0, size, size), fill=color)
    # Add text
    d.text((size/2, size/2), text, fill='white', anchor='mm')
    img.save(filename)

# Create directory if it doesn't exist
os.makedirs('public/images', exist_ok=True)

# Create avatar images
colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
for i in range(1, 7):
    create_avatar(200, colors[i-1], f'U{i}', f'public/images/avatar{i}.jpg') 