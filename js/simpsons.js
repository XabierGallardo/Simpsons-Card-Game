window.onload = shuffleCards();

//Parallel arrays to associate id and card
var cards = [
	'url(img/apu.jpg)',
   	'url(img/bart.jpg)',
   	'url(img/homer.jpg)',
    	'url(img/lisa.jpg)',
    	'url(img/maggie.jpg)',
    	'url(img/marge.png)',
    	'url(img/apu.jpg)',
    	'url(img/bart.jpg)',
    	'url(img/homer.jpg)',
    	'url(img/lisa.jpg)',
    	'url(img/maggie.jpg)',
    	'url(img/marge.png)'
];

var ids = [
	'card1','card2','card3','card4','card5','card6','card7','card8','card9','card10','card11','card12'
];

//For game management
var previousCard;
var currentCard;
var counter;
var score;
var pairCards;
var interval;
var time;
var reverse = 'url(img/reverse.png)';

function shuffleCards(){
	pairCards = 0;
	score = 50;
	counter = 0;
	previousCard = null;
	currentCard = null;
	interval = null;

	//Shuffle array of cards
	card.sort(function () {
		return Math.random() - 0.5;
	});

	//Get back div of cards
	var elements = $(".card");

	//Assignment initial values and events
	for (var i=0; i<elements.length; i++) {
		elements[i].style.transition = "none";
		elements[i].style.backgroundImage = reverse;
		elements[i].addEventListe3ner("click", clickCard, true);
		elements[i].style.visibility = "visible";
		console.log("Event asociated to " + elements[i].id);
	}

	//Enable delay's trainsition effect to avoid show the cards
	setTimeout(enableTransition, 500);

	//Show the initial score
	showScore();
	$("#clock").innerHTML = "1:00.0";
}

//Enable transition efect on cards
function enableTransition() {
	//Get back card's div 
	var elements = $(".card");

	//Assign transition effect to each one
	for (var i=0; i<elements.length; i++) {
		elements[i].style.transition = "background 0.3s ease-in-out";
	}
}

//Show score on label
function showScore() {
	$("#score").innerHTML = "SCORE " + score;

	//Check if score is 0
	if (score === 0) {
		showEnd();
	}
}

//Set timing on game
function setTime() {
time = new Date();
time.setTime(time.getTime() + 60000);
interval = set setInterval(cronos, 10);
}




