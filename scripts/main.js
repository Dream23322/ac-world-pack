import * as Minecraft from "@minecraft/server";
import config from "./data/config.js";

const world = Minecraft.world;
const system = Minecraft.system;
world.beforeEvents.chatSend.subscribe((msg) => {
	const message = msg.message.toLowerCase();
	const player = msg.sender;

    if(message == ">spawn") {
        player.runCommandAsync(`tp @s ${config.commandData.spawn[0]} ${config.commandData.spawn[1]} ${config.commandData.spawn[2]}`);
        player.sendMessage(`§b> §aYou have been sent to spawn!`);
    } else if(message == ">fly") {
        if(player.hasTag("op")) {
            player.runCommandAsync(`ability @s mayfly true`);
            player.sendMessage(`§b> §aFly enabled!`);
        } else {
            player.sendMessage(`§b> §cYou don't have permission to use this command! (MissingTag: "op")`);
        }
    } else if(message == ">blocks") {
        player.runCommandAsync(`give @s ${config.commandData.blocks.blockid} 256`);
        player.sendMessage(`§b> §aBlocks given!`);
    } else if(message == ">speed") {
        player.runCommandAsync(config.commandData.speed.command);
        player.sendMessage(`§b> §aYou have been given Speed 1 for 10000 seconds!`);
    } else if(message == ">speed2") {
        player.runCommandAsync(config.commandData.speed2.command);
        player.sendMessage(`§b> §aYou have been given Speed 2 for 10000 seconds!`);
    } else if(message == ">jumpboost") {
        player.runCommandAsync(config.commandData.jumpboost.command);
        player.sendMessage(`§b> §aYou have been given Jump Boost 1 for 10000 seconds!`);
    } else if(message == ">jumpboost2") {
        player.runCommandAsync(config.commandData.jumpboost2.command);
        player.sendMessage(`§b> §aYou have been given Jump Boost 2 for 10000 seconds!`);
    } else if(message == ">sword") {
        player.runCommandAsync(config.commandData.sword.command);
        player.sendMessage(`§b> §aSummoned sword!`);
    } else if(message == ">kit1") {
        try {
            // Kit 1:
            /*
            helmet: Iron
            Chestplate: Iron
            Leggings: Iron
            Boots: Iron
            sword: iron
            goldenapple: 3
            fishingrod: 1
            */
            // Set sword
            player.runCommandAsync(`give @s iron_sword`);
            // Set golden apple
            player.runCommandAsync(`give @s golden_apple 3`);
            // Set fishing rod
            player.runCommandAsync(`give @s fishing_rod 1`);
            // Set helmet
            player.runCommandAsync(`give @s iron_helmet`);
            // Set chestplate
            player.runCommandAsync(`give @s iron_chestplate`);
            // Set leggings
            player.runCommandAsync(`give @s iron_leggings`);
            // Set boots
            player.runCommandAsync(`give @s iron_boots`);

            player.sendMessage(`§b> §aSummoned in Kit 1!`);
        } catch (e) {
            player.sendMessage(`§b> §cError Summoning Kit 1: ${e.message}`);
        }
    } else if(message == ">kit2") {
        try {
            // OP kit (Diamond)

            player.runCommandAsync(`give @s diamond_helmet`);
            player.runCommandAsync(`give @s diamond_chestplate`);
            player.runCommandAsync(`give @s diamond_leggings`);
            player.runCommandAsync(`give @s diamond_boots`);

            player.runCommandAsync(`give @s diamond_sword`);

            player.runCommandAsync(`give @s golden_apple 32`);
            player.runCommandAsync(`give @s enchanted_golden_apple 16`);

            player.runCommandAsync(`give @s fishing_rod 1`);

            player.sendMessage(`§b> §aSummoned in OP Kit!`);
        } catch (e) {
            player.sendMessage(`§b> §cError Summoning OP Kit: ${e.message}`);
        }
    }

    if(message == ">help") {
        player.sendMessage(`§b> §aCommands: \n>spawn \n>fly \n>blocks \n>speed \n>speed2 \n>jumpboost \n>jumpboost2 \n>sword \n>kit1 \n>kit2`);
    }

});