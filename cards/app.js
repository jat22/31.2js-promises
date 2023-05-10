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
axios.get(`${baseURL}/new/shuffle`)
.then( deck =>
	deckId = deck.data.deck_id)

function drawCard(event){
	event.preventDefault()
	axios.get(`${baseURL}/${deckId}/draw/?count=1`)
	.then(draw =>
		draw.data.cards.forEach(card =>
			$("#card-display").append(
				`<img src="${card.image}">`
			)
		)
		
	)
}

$("#draw-card").on("click", drawCard)