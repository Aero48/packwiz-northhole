// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	event.shaped('3x supplementaries:rope', [
		'S',
		'S',
		'S'
	], {
		S: 'farmersdelight:straw'
	})

	event.shaped('3x supplementaries:rope', [
		'Y',
		'Y',
		'Y'
	], {
		Y: 'environmental:yak_hair'
	})

	event.shaped('minecraft:lead', [
		'RR ',
		'RR ',
		'  R'
	], {
		R: 'supplementaries:rope'
	})

	event.shaped('farmersdelight:safety_net', [
		'RR',
		'RR'
	], {
		R: 'supplementaries:rope'
	})

	event.remove({ output: 'farmersdelight:rope' })

	event.remove({ id: 'farmersdelight:safety_net' })
	event.remove({ id: 'farmersdelight:lead_from_rope' })

	//rope pulley
	event.replaceInput({id: 'create:crafting/kinetics/rope_pulley'}, '#minecraft:wool', 'supplementaries:rope')

	//egg
	event.remove({ output: 'farmersdelight:fried_egg' })

	//milk
	event.remove({ output: 'farmersdelight:milk_bottle' })

	//pancake
	event.remove({ output: 'autumnity:pancake' })

	//Honey apple
	event.remove({ output: 'buzzier_bees:honey_apple' })
})

LootJS.modifiers((event) => {
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:rope", "supplementaries:rope", true)
		.replaceLoot("farmersdelight:fried_egg", "incubation:fried_egg", true)
		.replaceLoot("autumnity:pancake", "supplementaries:pancake", true)
		.replaceLoot("buzzier_bees:honey_apple", "create:honeyed_apple", true)
		.replaceLoot("create:bar_of_chocolate", "neapolitan:chocolate_bar", true);


});

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})