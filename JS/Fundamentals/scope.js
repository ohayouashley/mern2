var starterPokemon = ["charmander", "squirtle", "bulbasaur"];
function printNames(names) {
	function actuallyPrintingNames() {
		for (var index = 0; index < names.length; index++) {
			var name = names[index];

			console.log(name + " was found at index " + index);
		}

		console.log("name and index after loop is " + name + ":" + index);
	}
	actuallyPrintingNames();
}

printNames(starterPokemon);
