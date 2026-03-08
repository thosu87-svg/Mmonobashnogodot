# NOCODE MASTER INSTALLATION

AUFGABE:
Nimm diese Master-Version und bringe zuerst die sofort startbare Runtime zum Laufen.
Danach prüfe die vorhandene Legacy-Codebasis und die Bridge-Dateien.

## Verzeichnisübersicht

- `master-runtime/` -> sofort startbar
- `legacy-src/` -> ursprünglicher hochgeladener Code
- `brain-plugin/` -> separates World-Brain Modul
- `integration/` -> Bridge-Dateien
- `sources/` -> alle extrahierten Ursprungsquellen

## PHASE 1: Startbare Runtime

### 1. In `master-runtime/` wechseln
```bash
cd master-runtime
```

### 2. Node.js prüfen
```bash
node -v
npm -v
```
Erwartung:
- Node.js 18 oder neuer
- npm vorhanden

### 3. Abhängigkeiten installieren
```bash
npm install
```

### 4. Server starten
```bash
npm start
```

### 5. Browser testen
```text
http://localhost:3000
http://localhost:3000/dashboard.html
```

### 6. Prüfen
- Hauptseite lädt
- WebSocket verbindet
- Welt aktualisiert sich
- Dashboard zeigt Brain-Aktionen
- Buttons im HUD senden Aktionen
- Server bleibt mindestens 60 Sekunden stabil

## PHASE 2: Legacy-Code prüfen

Untersuche:
- `legacy-src/app/`
- `legacy-src/components/`
- `legacy-src/backend/`
- `legacy-src/ai/`

Ziel:
- Verstehen, welche Teile später direkt an die Brain-Bridge gehängt werden sollen

## PHASE 3: Integration vorbereiten

Prüfe:
- `integration/ServiceFieldAdapter.ts`
- `integration/HeuristicBrainBridge.ts`
- `integration/MASTER_MERGE_PLAN.md`

## Wichtige Regel

Arbeite additiv.
Nichts aus `legacy-src/` löschen.
Zuerst Runtime stabil machen, dann Integration planen.

## Kurzform

`master-runtime` starten -> Browser testen -> `legacy-src` analysieren -> `integration` vorbereiten.
