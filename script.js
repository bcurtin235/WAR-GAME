$(document).ready(function() {$(document).ready(function() {

    //what does this do?
    function convert_value_to_string(value) {
        if (value > 10) {
            switch (value) {
                case 11:
                    return 'Jack';
                    break;
                case 12:
                    return 'Queen';
                    break;
                case 13:
                    return 'King';
                    break;
            }
        }
        return value.toString();
    }

    //what does this do?
    var deck = [];
    var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    for (var i = 0; i<suits.length; i++) {
        var suit = suits[i];
        for (var j = 0; j<13; j++) {
            deck.push({number: j+1, suit: suit});
        }
    }

    //shuffle the deck
    function shuffle(array) {
        var currentIndex = array.length
            , temporaryValue
            , randomIndex
            ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    shuffle(deck);

    var cards_player_1 = [];
    var cards_player_2 = [];
    //divide out the cards into the two arrays

    for (i=0; i < 26; i++) {
        //push one card from deck to cards_player_1;
        cards_player_1.push(deck[i]);
    }

    for (i=26; i < 52; i++) {
        //push card in position 26 to cards_player_2;
        cards_player_2.push(deck[i]);
    }

    console.log(cards_player_1.length, cards_player_2.length);
    //create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
    function war(player1Card, player2Card) {



        if(player1Card.number > player2Card.number){

            return 1

        }
        else if(player2Card.number > player1Card.number){

            return 2
        }
        else{

            return 3
        }

    }
    var warCards = [];
    function play() {
		var playerOneCard= cards_player_1.shift();
        var playerTwoCard= cards_player_2.shift();

           var winner=war(playerOneCard,playerTwoCard);

            if (winner=== 1){
                warCards.push([playerOneCard,playerTwoCard]);
                _.union(cards_player_1,warCards);
            }

            else if (winner=== 2){

               warCards.push([playerOneCard,playerTwoCard]);
                _.union(cards_player_2,warCards)
            }
            else {
                  warCards.push([playerOneCard,playerTwoCard])
            }
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
})});
