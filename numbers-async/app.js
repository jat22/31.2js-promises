const baseURL = "http://numbersapi.com";


async function numFacts(event){
	event.preventDefault();
	nums = $("#nums").val();
	if(nums.length > 1){
		let res = await axios.get(`${baseURL}/${nums}?json`)
		console.log(res)
		for(let num in res.data){
			$("#num-facts-list").append(
				`<li>${res.data[num]}</li>`
			)
		}
	}
	if(nums.length === 1){
		fact = await axios.get(`${baseURL}/${nums}?json`)
		$("#num-facts-list").append(
			`<li>${fact.data.text}</li>`
			)
	}
	
};

$("#fact-search-btn").on('click', numFacts);

async function getFourFacts(event){
	event.preventDefault();
	let num = $("#4-facts-num").val();

	let fact1Promise = axios.get(`${baseURL}/${num}?json`);
	let fact2Promise = axios.get(`${baseURL}/${num}?json`);
	let fact3Promise = axios.get(`${baseURL}/${num}?json`);
	let fact4Promise = axios.get(`${baseURL}/${num}?json`);
	
	let facts = [await fact1Promise,  await fact2Promise, await fact3Promise, await fact4Promise]
	console.log(facts)
	for(let fact of facts){
		$("#4-facts-list").append(
			`<li>${fact.data.text}</li>`)
	}
}

$("#four-facts-search-btn").on("click", getFourFacts)
