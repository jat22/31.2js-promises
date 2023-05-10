const baseURL = "http://deckofcardsapi.com/api/deck";


// let deckId
// let cardArray = []
// axios.get(`${baseURL}/new/draw/?count=1`)
// .then(draw =>{
// 	draw.data.cards.forEach(card =>
// 		cardArray.push(`${card.value} of ${card.suit}`));
// 	deckId = draw.data.deck_id;
// 	console.log(deckId)
// 	return axios.get(`${baseURL}/${deckId}/draw/?count=1`)
// })
// .then(draw =>{
// 	draw.data.cards.forEach(card =>
// 		cardArray.push(`${card.value} of ${card.suit}`));
// 	cardArray.forEach(card =>
// 		console.log(card))
// })

let deckId


async function drawCard(event){
	event.preventDefault()
	if(deckId === undefined){
		deck = await axios.get(`${baseURL}/new/shuffle`)
		deckId = deck.data.deck_id}
	
	draw = await axios.get(`${baseURL}/${deckId}/draw/?count=1`)
	for(let card of draw.data.cards){
		$("#card-display").append(
			`<img src="${card.image}">`
		)
	}
	console.log(deckId)
}

$("#draw-card").on("click", drawCard)