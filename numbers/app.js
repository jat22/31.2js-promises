const baseURL = "http://numbersapi.com";


function numFacts(event){
	event.preventDefault();
	nums = $("#nums").val();
	if(nums.length > 1){
		axios.get(`${baseURL}/${nums}?json`)
		.then(nums => {
			for(let num in nums.data){
				$("#num-facts-list").append(
					`<li>${nums.data[num]}</li>`
				)
			}
		})
	}
	if(nums.length === 1){
		axios.get(`${baseURL}/${nums}?json`)
		.then(fact => {
			$("#num-facts-list").append(
				`<li>${fact.data.text}</li>`
			)
		})
	}
	
};

$("#fact-search-btn").on('click', numFacts);

function getFourFacts(event){
	event.preventDefault();
	let num = $("#4-facts-num").val();
	let facts = [];
	axios.get(`${baseURL}/${num}?json`)
	.then(fact => {
		facts.push(fact.data.text)
		return axios.get(`${baseURL}/${num}?json`)
	})
	.then(fact => {
		facts.push(fact.data.text)
		return axios.get(`${baseURL}/${num}?json`)
	})
	.then(fact => {
		facts.push(fact.data.text)
		return axios.get(`${baseURL}/${num}?json`)
	})
	.then(fact => {
		facts.push(fact.data.text)
		facts.forEach(fact => {
			$("#4-facts-list").append(
				`<li>${fact}</li>`)
		})
	})
}

$("#four-facts-search-btn").on("click", getFourFacts)
