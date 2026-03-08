# World Simulation Rules

Defines how the persistent MMORPG world behaves.

---

## World Persistence

The world exists continuously.

Player actions affect world state.

Examples:

- killed NPCs respawn
- resources regenerate
- markets fluctuate

---

## Chunk Streaming

World divided into chunks.

Example:

64x64 meter chunks

Server loads chunks near players.

Client loads visible chunks only.

---

## NPC Behavior

NPCs use AI routines:

- patrol
- guard
- trade
- attack

NPC logic runs server side.

---

## Procedural Content

World may include procedural generation:

- terrain
- dungeons
- events

This reduces manual content creation.
