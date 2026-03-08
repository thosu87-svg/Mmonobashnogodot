# NOCODE INTEGRATED MAIN INSTALL

## Auftrag
Bringe diese integrierte Hauptversion zum Laufen und prüfe danach die Legacy-Anbindung.

## Schritte
1. ZIP entpacken
2. In `integrated-main/` wechseln
3. `node -v` und `npm -v` prüfen
4. `npm install`
5. `npm start`
6. Browser öffnen:
   - `http://localhost:3000`
   - `http://localhost:3000/dashboard.html`
   - `http://localhost:3000/integration.html`

## Prüfen
- Spiel lädt
- WebSocket läuft
- Dashboard zeigt Brain-Daten
- Integration Hub zeigt Legacy-Zusammenfassung
- `legacy-src/` existiert
- `src/integration/` existiert

## Zusatz
Legacy-Dateien nicht löschen.
Erst Runtime prüfen, dann Legacy-Services schrittweise an die Bridge hängen.
