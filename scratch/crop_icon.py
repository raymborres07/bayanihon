from PIL import Image
import os

img_path = r'c:\Users\raymb\Portfolio\bayanihon\public\apple-icon.png'
output_path = r'c:\Users\raymb\Portfolio\bayanihon\public\icon.png'

if os.path.exists(img_path):
    img = Image.open(img_path)
    width, height = img.size
    
    # Crop to a square centered on the content
    size = min(width, height)
    left = (width - size) / 2
    top = (height - size) / 2
    right = (width + size) / 2
    bottom = (height + size) / 2
    
    img_cropped = img.crop((left, top, right, bottom))
    img_cropped.save(output_path)
    print(f"Successfully cropped {img_path} to {output_path}")
else:
    print(f"File not found: {img_path}")
