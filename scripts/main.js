import * as Minecraft from "@minecraft/server";
import config from "./data/config.js";

const world = Minecraft.world;
const system = Minecraft.system;
world.beforeEvents.chatSend.subscribe((msg) => {
	const message = msg.message.toLowerCase();
	const player = msg.sender;

    if(message == ">spawn") {
        player.runCommandAsync(`tp @s ${config.commandData.spawn.x} ${config.commandData.spawn.y} ${config.commandData.spawn.z}`);
        player.sendMessage(`§bAssistant §h> §aYou have been sent to spawn!`);
    } else if(message == ">fly") {
        if(player.hasTag("op")) {
            player.runCommandAsync(`ability @s mayfly true`);
            player.sendMessage(`§bAssistant §h> §aFly enabled!`);
        } else {
            player.sendMessage(`§bAssistant §h> §cYou don't have permission to use this command! (MissingTag: "op")`);
        }
    } else if(message == ">blocks") {
        player.runCommandAsync(`give @s ${config.commandData.blocks.blockid} 256`);
        player.sendMessage(`§bAssistant §h> §aBlocks given!`);
    } else if(message == ">speed") {
        player.runCommandAsync(config.commandData.speed.command);
        player.sendMessage(`§bAssistant §h> §aYou have been given Speed 1 for 10000 seconds!`);
    } else if(message == ">speed2") {
        player.runCommandAsync(config.commandData.speed2.command);
        player.sendMessage(`§bAssistant §h> §aYou have been given Speed 2 for 10000 seconds!`);
    } else if(message == ">jumpboost") {
        player.runCommandAsync(config.commandData.jumpboost.command);
        player.sendMessage(`§bAssistant §h> §aYou have been given Jump Boost 1 for 10000 seconds!`);
    } else if(message == ">jumpboost2") {
        player.runCommandAsync(config.commandData.jumpboost2.command);
        player.sendMessage(`§bAssistant §h> §aYou have been given Jump Boost 2 for 10000 seconds!`);
    } else if(message == ">sword") {
        player.runCommandAsync(config.commandData.sword.command);
        player.sendMessage(`§bAssistant §h> §aSummoned sword!`);
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

            player.sendMessage(`§bAssistant §h> §aSummoned in Kit 1!`);
        } catch (e) {
            player.sendMessage(`§bAssistant §h> §cError Summoning Kit 1: ${e.message}`);
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

            player.sendMessage(`§bAssistant §h> §aSummoned in OP Kit!`);
        } catch (e) {
            player.sendMessage(`§bAssistant §h> §cError Summoning OP Kit: ${e.message}`);
        } 
    } else if(message == ">clear") {
        player.runCommandAsync(`clear @s`);
        player.runCommandAsync(`effect @s clear`);
        player.sendMessage(`§bAssistant §h> §aCleared inventory and effects!`);
    }

    if(message == ">help") {
        //player.sendMessage(`§bAssistant §h> §aCommands: \n>spawn \n>fly \n>blocks \n>speed \n>speed2 \n>jumpboost \n>jumpboost2 \n>sword \n>kit1 \n>kit2`);

        player.sendMessage(`§h==========================================`);
        player.sendMessage("§l Commands")
        player.sendMessage(`§h------------------------------------------`);
        player.sendMessage(`>spawn - Teleports you to spawn\n>fly - Enables fly mode\n>blocks - Gives you 256 blocks\n>speed - Gives you speed 1 for 10000 seconds \n>speed2 - Gives you speed 2 for 10000 seconds \n>jumpboost - Gives you Jump Boost 1 For 10000 seconds \n>jumpboost2 - Gives you Jump Boost 2 for 10000 seconds\n>sword - Gives you a sword \n>kit1 - Summons in Kit 1 \n>kit2 - Summons in OP Kit\n>Clears inventory and effects`);
        player.sendMessage(`§h==========================================`);
    }   

});

