export default
{
    "commands": {
        "spawn": true,
        "kit1": true,
        "kit2": true,
        "kit3": true,
        "blocks": true,
        "fly": false,
        "speed": true,
        "speed2": true,
        "jumpboost": true,
        "jumpboost2": true,
        "sword": true
    },
    "commandData": {
        "spawn": {
            "x": 0,
            "y": 100,
            "z": 0
        },
        "blocks": {
            "blockid": "minecraft:wool",
        },
        "speed": {
            "command": "effect @s speed 10000 1",
        },
        "speed2": {
            "command": "effect @s speed 10000 2",
        },
        "jumpboost": {
            "command": "effect @s jump_boost 10000 1",
        },
        "jumpboost2": {
            "command": "effect @s jump_boost 10000 2",
        },
        "sword": {
            "command": "give @s diamond_sword"
        }
    }
}