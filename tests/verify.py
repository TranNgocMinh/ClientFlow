from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
required=['index.html','.nojekyll','assets/base.css','assets/style.css','assets/core.js','assets/app.js','assets/favicon.svg']
for item in required:
 assert (root/item).is_file(), f'MISSING: {item}'
html=(root/'index.html').read_text(encoding='utf-8')
assert 'id="app"' in html
assert not re.search(r'<a\s[^>]*href=["\']https?://',html,re.I)
for asset in ['assets/base.css','assets/style.css','assets/core.js','assets/app.js']:
 data=(root/asset).read_text(encoding='utf-8')
 assert not re.search(r'@import\s+url\(https?://|<script[^>]+src=["\']https?://',data,re.I)
print('PASS: independent app files found, no remote dependencies in source')
