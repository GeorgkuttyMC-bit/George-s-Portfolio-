import urllib.request
import re
import json
req = urllib.request.Request('https://www.behance.net/Georgecreativelab', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
match = re.search(r'window\.initialState = (\{.*?\});\n', html)
if match:
    data = json.loads(match.group(1))
    profile = data.get('profile', {})
    projects = profile.get('activeSection', {}).get('work', {}).get('projects', [])
    for p in projects[:6]:
        print(f"Title: {p.get('name')}")
        print(f"URL: {p.get('url')}")
        covers = p.get('covers', {})
        print(f"Image: {covers.get('max_808', covers.get('original', ''))}")
        print(f"Type: {p.get('fields', [''])[0]}")
        print("---")
else:
    print("No initial state found")
