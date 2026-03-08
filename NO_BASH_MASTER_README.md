# No-Bash / No-npm Delivery Pack

Dieses Paket ist für einen No-Code-Agenten gedacht, der:
- keine Shell-Befehle ausführen darf
- kein npm benutzen darf
- aber Dateien entpacken, hochladen und testen darf

## Enthalten

### `integrated-main/`
Die vollständige integrierte Projektbasis aus der letzten Version.
Diese ist für technische Bearbeitung gedacht.

### `no-bash-delivery/static-site/`
Fertige statische Dateien für Drag-and-Drop Deploy.
Diese kann ein No-Code-Agent direkt auf statisches Hosting hochladen.

### `no-bash-delivery/portable-server/`
Vorbereitete Struktur für ein vorgebautes Server-Artefakt.
Hier fehlt absichtlich noch das echte Binary, weil das in dieser Umgebung nicht gebaut werden konnte.

## Empfohlene No-Code-Strategie

1. Statische Seite hochladen
2. Remote-Server-Binary separat bereitstellen
3. In `config.js` die WebSocket-URL des Remote-Servers eintragen
4. Seite testen

## Ehrlicher Hinweis

Ein echter No-Bash-Komplettbetrieb braucht immer mindestens EINEN vorgelagerten Build-Schritt auf einer Maschine, die Node/npm ausführen darf.
Dieses Paket macht daraus eine klare Auslieferungsstruktur.
