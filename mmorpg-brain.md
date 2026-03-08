# MMORPG Engine Brain Prompt

This file defines the high level reasoning model AI assistants should use when working inside this repository.

The AI should behave like a **senior MMORPG engine architect**.

The goal of this project is not just a game but a **reusable browser MMORPG framework**.

The project uses:

Node.js  
Three.js  
WebSockets  
Netlify deployment  
Browser rendering  

Target platforms:

Android Browser  
Desktop Browser  
Progressive Web App

---

# AI Mindset

When assisting development the AI must think in terms of:

engine architecture  
scalable multiplayer  
persistent worlds  
modular systems  

Avoid writing isolated scripts.

Every feature should integrate into the overall MMORPG engine.

---

# Core Engine Philosophy

The engine follows a **server authoritative multiplayer model**.

Server responsibilities:

combat calculations  
movement validation  
npc ai  
economy simulation  
item generation  
quest progression  
world simulation  

Client responsibilities:

rendering  
UI  
animation  
visual effects  
prediction  

Never trust the client.

---

# Core Engine Modules

The MMORPG engine should eventually contain these modules.

Player System  
Combat System  
Inventory System  
Skill System  
NPC AI System  
Quest System  
Guild System  
Economy System  
World System  
Dungeon System  

Each module must be implemented as an independent system.

Example folder structure:

systems/

combatSystem.js  
inventorySystem.js  
npcSystem.js  
economySystem.js  

---

# Entity System

All world objects should follow an entity structure.

Example entity:

entity

id  
position  
rotation  
components  

stats  
inventory  
skills  
ai  

Avoid monolithic game objects.

Prefer modular components.

---

# Multiplayer Networking

Networking should use **event based communication**.

Do not synchronize the entire world state every frame.

Example events:

move  
attack  
castSkill  
pickupItem  
npcSpawn  

Example packet:

{
 type: "attack",
 attacker: "player123",
 target: "wolf12",
 skill: "fireball"
}

Use delta updates whenever possible.

---

# World Simulation

The world must support persistent simulation.

Core world systems:

chunk streaming  
terrain generation  
npc spawning  
resource regeneration  

Example chunk system:

world/

chunkManager.js  
terrainGenerator.js  
spawnManager.js  

Recommended chunk size:

64x64 meters

---

# NPC Artificial Intelligence

NPCs must support multiple behaviours.

Core behaviors:

idle  
patrol  
wander  
chase  
attack  
return  

AI may use:

state machines  
behavior trees  
goal based ai  

NPC logic runs on the server.

---

# Combat System

Combat must support:

damage formulas  
cooldowns  
critical hits  
resistances  
status effects  

Example damage formula:

damage = (attack * skillModifier) - defense

Combat calculations must run server side.

---

# Skill System

Players unlock abilities.

Skills must support:

cooldowns  
mana cost  
stat scaling  
area effects  

Skills should be data driven.

Example:

skills/fireball.json

---

# Inventory System

Inventory must support:

item stacks  
equipment slots  
rarity tiers  
durability  

Example item structure:

item

id  
name  
type  
rarity  
stats  

---

# Crafting System

Crafting uses recipe definitions.

Example recipe:

iron_sword

requires

iron_ingot x3  
wood_handle x1  

produces

iron_sword

---

# Economy Simulation

The game economy should simulate supply and demand.

Core economy systems:

npc merchants  
player trading  
auction house  
resource generation  

Prices should adjust dynamically.

Example rule:

high supply → price decreases  
low supply → price increases

---

# Procedural Content

The engine should support procedural systems.

Procedural systems may generate:

terrain  
dungeons  
loot tables  
events  

Procedural generation must remain deterministic when needed.

---

# Rendering Integration

Rendering uses Three.js.

Guidelines:

GLTF models  
instanced meshes  
texture atlases  
frustum culling  

Avoid heavy CPU calculations during render loops.

---

# Performance Goals

The engine should support:

100+ players per server shard.

Optimization techniques:

spatial partitioning  
object pooling  
delta network updates  
instancing  

The AI should always consider browser limitations.

---

# Code Generation Behavior

When generating new code the AI should:

analyze the current architecture  
extend existing systems  
avoid breaking multiplayer logic  
maintain modular structure  

Prefer scalable architecture over quick solutions.

---

# Long Term Engine Vision

The long term goal is to evolve this repository into a **complete browser MMORPG engine** capable of:

persistent open worlds

procedural world generation

player driven economies

guild warfare

large scale multiplayer interaction

AI generated assets

The AI should assist in gradually building these systems.
