# AI Development Rules for MMORPG Systems

This document defines how AI assistants should behave when generating code for this MMORPG project.

AI should behave like a **senior MMORPG engine developer**.

Focus areas:

- multiplayer scalability
- deterministic server simulation
- modular architecture
- browser performance
- maintainable systems

---

# Primary Goal

Whenever new code is generated it must contribute to building a **complete MMORPG engine**.

The AI should prioritize implementing reusable gameplay systems instead of one-off scripts.

---

# System Creation Rules

When implementing gameplay features AI must create **separate systems**.

Examples:

CombatSystem  
InventorySystem  
SkillSystem  
QuestSystem  
GuildSystem  
EconomySystem  
NPCSystem  

Each system must be modular.

Example folder structure:

systems/
 combatSystem.js
 inventorySystem.js
 npcSystem.js

---

# Server Authority Rules

All important logic must run on the server.

Server handles:

- damage
- hit detection
- item drops
- economy
- quest progress
- npc ai

Client handles:

- rendering
- UI
- prediction
- animation

Never trust client input.

---

# Multiplayer Synchronization

AI should implement **event-based networking**.

Avoid sending full world states.

Preferred pattern:

event packets

Example:

{
 type: "attack",
 attacker: "player1",
 target: "goblin2",
 skill: "fireball"
}

Use delta updates whenever possible.

---

# World Simulation

The game world should support:

- persistent simulation
- chunk streaming
- spatial partitioning

Example chunk system:

world/
 chunkManager.js
 terrainGenerator.js

Chunk size recommendation:

64x64 meters

---

# NPC Artificial Intelligence

NPC systems should include:

- pathfinding
- aggro system
- threat tables
- behavior trees or simple state machines

Example NPC states:

idle  
patrol  
chase  
attack  
return  

---

# Combat System

Combat must support:

- cooldowns
- damage formulas
- resistances
- critical hits
- status effects

Combat calculations run **only on the server**.

---

# Inventory System

Inventory system should support:

- item stacks
- equipment slots
- weight limits
- item rarity

Example item structure:

item
 id
 name
 type
 rarity
 stats

---

# Skill System

Players may unlock abilities.

Skill system must support:

- cooldown timers
- mana or resource costs
- scaling with stats
- upgrades

---

# Crafting System

Crafting should support recipes.

Example recipe:

iron_sword

requires:

iron_ingot x3  
wood_handle x1  

produces:

iron_sword

---

# Economy Simulation

Economy should support:

- npc merchants
- supply demand pricing
- item sinks
- player trading

AI should prevent inflation.

---

# Procedural Content

AI may generate procedural content:

- dungeons
- loot tables
- world events

These systems must remain deterministic.

---

# Rendering Integration

Client rendering must use Three.js.

Guidelines:

- GLTF models
- texture atlases
- instanced meshes
- frustum culling

Avoid heavy per-frame CPU calculations.

---

# Performance Optimization

AI should always consider:

- browser memory limits
- mobile GPU limits
- network bandwidth

Prefer:

spatial queries  
object pooling  
event driven updates  

---

# Code Generation Behavior

When generating code AI should:

1. analyze existing systems
2. extend existing architecture
3. avoid breaking multiplayer logic
4. keep modules reusable

AI should prefer **clean architecture over quick hacks**.

---

# Long Term Systems

The AI should gradually help build:

procedural world generator

large scale economy simulation

guild warfare systems

player cities

AI generated asset pipeline

---

# Development Philosophy

This project is intended to evolve into a **full MMORPG framework for the browser**.

AI systems assisting development should think in terms of:

engine design  
system scalability  
long-term maintainability
