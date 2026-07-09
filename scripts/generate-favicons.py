from PIL import Image

src = Image.open("public/logo-icon.png").convert("RGBA")
w, h = src.size
size = max(w, h)
square = Image.new("RGBA", (size, size), (0, 0, 0, 0))
square.paste(src, ((size - w) // 2, (size - h) // 2))

outputs = [
    (48, "favicon-48x48.png"),
    (96, "favicon-96x96.png"),
    (192, "favicon-192x192.png"),
    (512, "apple-touch-icon.png"),
]

for dim, name in outputs:
    square.resize((dim, dim), Image.Resampling.LANCZOS).save(f"public/{name}")
    print(f"created public/{name} ({dim}x{dim})")

square.resize((512, 512), Image.Resampling.LANCZOS).save("public/logo-square.png")
print("created public/logo-square.png (512x512)")
