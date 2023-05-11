const url = "https://pokeapi.co/api/v2/pokemon"



async function threeRandomPokemon(){
	const pokemonResponse = await axios.get(`${url}/?limit=100`);
	const randomIndexes = threeRandomIndex(pokemonResponse.data.results.length);
	const randomPokemon = [];
	for(index of randomIndexes){
		randomPokemon.push(pokemonResponse.data.results[index])
	};
	pokemon1Promise = axios.get(randomPokemon[0].url)
	pokemon2Promise = axios.get(randomPokemon[1].url)
	pokemon3Promise = axios.get(randomPokemon[2].url)

	pokemon1 = {name : (await pokemon1Promise).data.name, speciesUrl : (await pokemon1Promise).data.species.url};
	pokemon2 = {name : (await pokemon2Promise).data.name, speciesUrl : (await pokemon2Promise).data.species.url};
	pokemon3 = {name : (await pokemon3Promise).data.name, speciesUrl : (await pokemon3Promise).data.species.url};

	pokemon1.speciesText = ((await axios.get(pokemon1.speciesUrl))
		.data.flavor_text_entries)
		.find((text) => {
			return text.language.name == "en"
		})
		.flavor_text
	pokemon2.speciesText = ((await axios.get(pokemon2.speciesUrl))
	.data.flavor_text_entries)
	.find((text) => {
		return text.language.name == "en"
	})
	.flavor_text
	pokemon3.speciesText = ((await axios.get(pokemon3.speciesUrl))
		.data.flavor_text_entries)
		.find((text) => {
			return text.language.name == "en"
		})
		.flavor_text
	console.log(`${pokemon1.name}: ${pokemon1.speciesText}`)
	console.log(`${pokemon2.name}: ${pokemon2.speciesText}`)
	console.log(`${pokemon3.name}: ${pokemon3.speciesText}`)
}

async function pokemonSpeciesInfo(name){
	const speciesResponse = await axios.get(`${url}-species/${name}/`)
	console.log(speciesResponse)
}

function showThreePokemon(){
	threeRandomPokemon();
}

function threeRandomIndex(max){
	let nums = [];

	while(nums.length < 3) {
		const randomNum = Math.floor(Math.random() * max);
		if(!nums.includes(randomNum)){
			nums.push(randomNum);
		}
	}
	return nums
}