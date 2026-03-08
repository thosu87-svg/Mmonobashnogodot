PORTABLE SERVER ARTIFACT

Dieser Ordner ist für ein vorgebautes Server-Artefakt gedacht, damit der No-Code-Agent KEIN bash und KEIN npm braucht.

Zielinhalt später:
- mmorpg-server.exe   (Windows)
- mmorpg-server       (Linux/macOS)
- config.json
- saves/
- logs/

WICHTIG:
In dieser Umgebung konnte ich kein echtes vorkompiliertes Binary bauen, weil dafür ein separater Build-Lauf mit Node/SEA oder pkg/nexe nötig wäre.

Darum ist dies eine vorbereitete Auslieferungsstruktur.
Die sofort nutzbare No-Bash-Route in diesem Paket ist:
- `static-site/` für Drag-and-Drop Hosting
- plus ein extern/vorab gebauter Server-Binary-Release

Wenn du später auf einem Build-Rechner kompilierst, lege das Ergebnis hier hinein.
