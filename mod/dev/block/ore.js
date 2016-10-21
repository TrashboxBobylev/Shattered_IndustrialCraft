var BLOCK_TYPE_ORE = Block.createSpecialType({
	base: 1,
	opaque: true
});

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
	{name: "Tin Copper (block)", texture: [["ore_copper", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone");
Block.registerDropFunction("oreCopper", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.oreCrushedCopper, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
	{name: "Tin Ore (block)", texture: [["ore_tin", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone");
Block.registerDropFunction("oreTin", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.oreCrushedTin, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
	{name: "Lead Ore (block)", texture: [["ore_lead", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.oreLead, "stone");
Block.registerDropFunction("oreLead", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.oreCrushedLead, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium", [
	{name: "Uranium Ore (block)", texture: [["ore_uranium", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.oreUranium, "stone");
Block.registerDropFunction("oreUranium", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[ItemID.uraniumChunk, 1, 0]]
	}
	return [];
}, 3);