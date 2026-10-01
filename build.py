"""Arma Corchete en un solo archivo HTML.
dist/corchete.html  -> documento completo (abrir en el celular o subir a GitHub Pages)
index.html          -> copia en la raíz para GitHub Pages
dist/artifact.html  -> mismo contenido sin <html>/<head>/<body> (para publicar como Artifact)
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
DIST = ROOT / "dist"
DIST.mkdir(exist_ok=True)

tpl = (SRC / "template.html").read_text(encoding="utf-8")
css = (SRC / "styles.css").read_text(encoding="utf-8")
data = "\n".join((SRC / f"data-{i}.js").read_text(encoding="utf-8") for i in range(1, 5))
app = (SRC / "app.js").read_text(encoding="utf-8")

body = tpl.replace("/*CSS*/", css).replace("/*DATA*/", data).replace("/*APP*/", app)
(DIST / "artifact.html").write_text(body, encoding="utf-8")

head_end = body.index("</style>") + len("</style>")
full = (
    '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    '<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F5F8FC">\n'
    '<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#18231F">\n'
    + body[:head_end] + "\n</head>\n<body>\n" + body[head_end:] + "\n</body>\n</html>\n"
)
(DIST / "corchete.html").write_text(full, encoding="utf-8")
(ROOT / "index.html").write_text(full, encoding="utf-8")  # página que publica GitHub Pages
print("ok", len(full) // 1024, "KB")
