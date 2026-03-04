#!/usr/bin/env python3
from PIL import Image
import os
from pathlib import Path

# Image directory
img_dir = Path("src/images")
if not img_dir.exists():
    print("Image directory not found")
    exit(1)

total_before = 0
total_after = 0

for img_file in img_dir.glob("*"):
    if img_file.suffix.lower() not in ['.jpg', '.jpeg', '.png', '.webp']:
        continue
    
    try:
        original_size = img_file.stat().st_size / (1024 * 1024)
        
        # Open image
        img = Image.open(img_file)
        
        # Convert RGBA to RGB if needed
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Compress based on format
        if img_file.suffix.lower() in ['.jpg', '.jpeg']:
            img.save(img_file, 'JPEG', quality=78, optimize=True, progressive=True)
        elif img_file.suffix.lower() == '.png':
            # For PNGs, reduce quality and convert to RGB
            img = img.convert('RGB')
            img.save(img_file, 'JPEG', quality=80, optimize=True)
            # Rename to jpg
            new_file = img_file.with_suffix('.jpg')
            img_file.rename(new_file)
            img_file = new_file
        
        new_size = img_file.stat().st_size / (1024 * 1024)
        reduction = ((original_size - new_size) / original_size * 100) if original_size > 0 else 0
        
        total_before += original_size
        total_after += new_size
        
        print("[OK] {}: {:.2f}MB -> {:.2f}MB ({:.1f}% reduction)".format(img_file.name, original_size, new_size, reduction))
    
    except Exception as e:
        print("[ERROR] {}: {}".format(img_file.name, str(e)[:60]))

if total_before > 0:
    print("\nTotal: {:.2f}MB -> {:.2f}MB ({:.1f}% reduction)".format(total_before, total_after, ((total_before - total_after) / total_before * 100)))

