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
            "coords": [0, 100, 0],
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
            "command": "effect @s jumpboost 10000 1",
        },
        "jumpboost2": {
            "command": "effect @s jumpboost 10000 2",
        },
        "sword": {
            "command": "give @s diamond_sword"
        }
    }
}