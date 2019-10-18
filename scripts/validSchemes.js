var logoSchemes = [],
		backgroundSchemes = [];

class validColorSheme {
	constructor(logoColor) {
		this.logoColor = logoColor;
		this.backgroundColorSchemes = ["Amethyst", "Aquamarine", "BloodSky", "BronzeSunset", "BurningHorizon", "Camo", "Chlorophyte", "ChocolateDiamond", "Cobalt", "Copper", "CorrodedSepia", "Corruption", "Hematite", "Jade", "Jasper", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "RoseQuartz", "Ruby", "SailorsDelight", "Sandstorm", "Sapphire", "Tangerine", "Topaz", "Twilight", "Twitch", "Void"];
	}
	allow(backgroundColorSchemes) {
		this.backgroundColorSchemes = backgroundColorSchemes;
		return this;
	}
	remove(backgroundColorSchemes) {
		for (var i = 0; i < backgroundColorSchemes.length; i++) {
			//Filters are confusing and I understand nothing here
			this.backgroundColorSchemes = this.backgroundColorSchemes.filter(value => value !== backgroundColorSchemes[i]);
		}
		return this;
	}
	reset() {
		this.backgroundColorSchemes = ["Amethyst", "Aquamarine", "BloodSky", "BronzeSunset", "BurningHorizon", "Camo", "Chlorophyte", "ChocolateDiamond", "Cobalt", "Copper", "CorrodedSepia", "Corruption", "Hematite", "Jade", "Jasper", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "RoseQuartz", "Ruby", "SailorsDelight", "Sandstorm", "Sapphire", "Tangerine", "Topaz", "Twilight", "Twitch", "Void"];
		return this;
	}
}

class validBackgroundColorSheme {
	constructor(backgroundColor) {
		this.backgroundColor = backgroundColor;
		this.logoColorSchemes = ["Amethyst", "Aquamarine", "Black", "ChocolateDiamond", "Hematite", "Jasper", "Moonstone", "Obsidian", "Pearl", "Peridot", "RoseQuartz", "Ruby", "Sapphire", "Topaz", "White"];
	}
	allow(backgroundColorSchemes) {
		this.backgroundColorSchemes = backgroundColorSchemes;
		return this;
	}
	search() {
		this.logoColorSchemes = [];
		for (var i = 0; i < logoSchemes.length; i++) {
			var schemes = logoSchemes[i].backgroundColorSchemes;
			for (var j = 0; j < schemes.length; j++) {
				if (schemes[j] === this.backgroundColor) {
					this.logoColorSchemes[this.logoColorSchemes.length] = logoSchemes[i].logoColor;
				}
			}
		}
	}
	reset() {
		this.backgroundColorSchemes = ["Amethyst", "Aquamarine", "Black", "ChocolateDiamond", "Hematite", "Jasper", "Moonstone", "Obsidian", "Pearl", "Peridot", "RoseQuartz", "Ruby", "Sapphire", "Topaz", "White"];
		return this;
	}
}

function intLogoSchemes() {
	var white = new validColorSheme("White");
	white.remove(["Kiwi", "Moonstone", "Pearl", "Topaz"]);

	var moonstone = new validColorSheme("Moonstone");
	moonstone.remove(["DiscoOrange", "DiscoGreen", "Kiwi", "Moonstone", "Peach", "Pearl", "Topaz"]);

	var pearl = new validColorSheme("Pearl");
	pearl.remove(["DiscoCyan", "DiscoPink", "Hematite", "Kiwi", "Moonstone", "Peach", "Pearl", "DiscoOrange"]);

	var hematite = new validColorSheme("Hematite");
	hematite.remove(["Camo", "ChocolateDiamond", "DiscoPink", "Hematite", "Mourning", "Obsidian", "Pearl", "Sandstorm", "Twitch"]);

	var obsidian = new validColorSheme("Obsidian");
	obsidian.remove(["ChocolateDiamond", "Cobalt", "Corruption", "DiscoBlue", "DiscoPink", "Hematite", "Midnight", "Mourning", "Obsidian", "Sandstorm", "Sapphire", "Twilight", "Twitch", "Void"]);

	var black = new validColorSheme("Black");
	black.remove(["ChocolateDiamond", "Midnight", "Mourning", "Obsidian", "Sandstorm", "Twilight", "Void"]);


	var ruby = new validColorSheme("Ruby");
	ruby.allow(["Corruption", "Midnight", "Moonstone", "Obsidian", "Peach", "Pearl", "Topaz", "Void"]);

	var jasper = new validColorSheme("Jasper");
	jasper.allow(["Amethyst", "Aquamarine", "Camo", "ChocolateDiamond", "Cobalt", "Corruption", "DiscoGreen", "DiscoBlue", "Hematite", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Pearl", "Sapphire", "Void"]);

	var topaz = new validColorSheme("Topaz");
	topaz.allow(["Amethyst", "Aquamarine", "Camo", "ChocolateDiamond", "Cobalt", "DiscoCyan", "DiscoBlue", "Hematite", "Midnight", "Moonstone", "Mourning", "Obsidian", "Pearl", "PerfectDay", "Peridot", "RoseQuartz", "Ruby", "Sapphire", "Twilight", "Twitch", "Void"]);

	var peridot = new validColorSheme("Peridot");
	peridot.allow(["Amethyst", "Camo", "ChocolateDiamond", "Cobalt", "Hematite", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Pearl", "Sandstorm", "Sapphire", "Tangerine", "Twilight", "Void"]);

	var aquamarine = new validColorSheme("Aquamarine");
	aquamarine.allow(["ChocolateDiamond", "DiscoGreen", "Hematite", "Jasper", "Kiwi", "Midnight", "Moonstone", "Obsidian", "Peach", "Topaz", "Twilight", "Twitch", "Void"]);

	var sapphire = new validColorSheme("Sapphire");
	sapphire.allow(["Chlorophyte", "ChocolateDiamond", "Copper", "DiscoGreen", "DiscoCyan", "Jade", "Jasper", "Kiwi", "Moonstone", "Peach", "Pearl", "PerfectDay", "Peridot", "RoseQuartz", "Ruby", "SailorsDelight", "Tangerine", "Void", "DiscoOrange"]);

	var amethyst = new validColorSheme("Amethyst");
	amethyst.allow(["Aquamarine", "Chlorophyte", "DiscoOrange", "DiscoGreen", "Hematite", "Jade", "Jasper", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "SailorsDelight", "Tangerine", "Topaz", "Void"]);

	var roseQuartz = new validColorSheme("RoseQuartz");
	roseQuartz.allow(["Corruption", "Chlorophyte", "DiscoGreen", "DiscoBlue", "Hematite", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "Sapphire", "Topaz", "Void"]);

	var chocolateDiamond = new validColorSheme("ChocolateDiamond");
	chocolateDiamond.allow(["Chlorophyte", "DiscoGreen", "DiscoCyan", "Jade", "Jasper", "Kiwi", "Moonstone", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "RoseQuartz", "SailorsDelight", "Tangerine", "DiscoOrange"]);


	logoSchemes = [white, moonstone, pearl, hematite, obsidian, black, ruby, jasper, topaz, peridot, aquamarine, sapphire, amethyst, roseQuartz, chocolateDiamond];
}

function intBackgroundSchemes() {
	var amethyst = new validBackgroundColorSheme("Amethyst"); amethyst.search();
	var aquamarine = new validBackgroundColorSheme("Aquamarine"); aquamarine.search();
	var bloodSky = new validBackgroundColorSheme("BloodSky"); bloodSky.search();
	var bronzeSunset = new validBackgroundColorSheme("BronzeSunset"); bronzeSunset.search();
	var burningHorizon = new validBackgroundColorSheme("BurningHorizon"); burningHorizon.search();
	var camo = new validBackgroundColorSheme("Camo"); camo.search();
	var chlorophyte = new validBackgroundColorSheme("Chlorophyte"); chlorophyte.search();
	var chocolateDiamond = new validBackgroundColorSheme("ChocolateDiamond"); chocolateDiamond.search();
	var cobalt = new validBackgroundColorSheme("Cobalt"); cobalt.search();
	var copper = new validBackgroundColorSheme("Copper"); copper.search();
	var corrodedSepia = new validBackgroundColorSheme("CorrodedSepia"); corrodedSepia.search();
	var corruption = new validBackgroundColorSheme("Corruption"); corruption.search();
	var discoBlue = new validBackgroundColorSheme("DiscoBlue"); discoBlue.search();
	var discoCyan = new validBackgroundColorSheme("DiscoCyan"); discoCyan.search();
	var discoGreen = new validBackgroundColorSheme("DiscoGreen"); discoGreen.search();
	var discoOrange = new validBackgroundColorSheme("DiscoOrange"); discoOrange.search();
	var discoPink = new validBackgroundColorSheme("DiscoPink"); discoPink.search();
	var hematite = new validBackgroundColorSheme("Hematite"); hematite.search();
	var jade = new validBackgroundColorSheme("Jade"); jade.search();
	var jasper = new validBackgroundColorSheme("Jasper"); jasper.search();
	var kiwi = new validBackgroundColorSheme("Kiwi"); kiwi.search();
	var midnight = new validBackgroundColorSheme("Midnight"); midnight.search();
	var moonstone = new validBackgroundColorSheme("Moonstone"); moonstone.search();
	var mourning = new validBackgroundColorSheme("Mourning"); mourning.search();
	var obsidian = new validBackgroundColorSheme("Obsidian"); obsidian.search();
	var peach = new validBackgroundColorSheme("Peach"); peach.search();
	var pearl = new validBackgroundColorSheme("Pearl"); pearl.search();
	var perfectDay = new validBackgroundColorSheme("PerfectDay"); perfectDay.search();
	var peridot = new validBackgroundColorSheme("Peridot"); peridot.search();
	var roseQuartz = new validBackgroundColorSheme("RoseQuartz"); roseQuartz.search();
	var ruby = new validBackgroundColorSheme("Ruby"); ruby.search();
	var sailorsDelight = new validBackgroundColorSheme("SailorsDelight"); sailorsDelight.search();
	var sandstorm = new validBackgroundColorSheme("Sandstorm"); sandstorm.search();
	var sapphire = new validBackgroundColorSheme("Sapphire"); sapphire.search();
	var tangerine = new validBackgroundColorSheme("Tangerine"); tangerine.search();
	var topaz = new validBackgroundColorSheme("Topaz"); topaz.search();
	var twilight = new validBackgroundColorSheme("Twilight"); twilight.search();
	var twitch = new validBackgroundColorSheme("Twitch"); twitch.search();
	var voidColor = new validBackgroundColorSheme("Void"); voidColor.search();

	backgroundSchemes = [amethyst, aquamarine, bloodSky, bronzeSunset, burningHorizon, camo, chlorophyte, chocolateDiamond, cobalt, copper, corrodedSepia, discoBlue, discoCyan, discoGreen, discoOrange, discoPink, hematite, jade, jasper, kiwi, midnight, moonstone, mourning, obsidian, peach, pearl, perfectDay, peridot, roseQuartz, ruby, sailorsDelight, sandstorm, sapphire, tangerine, topaz, twilight, twitch, voidColor];
}
