$(function() {

	var secs = 10;
	var youScore = 0;
	var computerScore = 0;

	$("#start-button").click(function(){

		$("#timer").show();
		$(".question").show();
		$("#start-button").hide();
		startTimer();
		$(".form3").show();
	});

	function startTimer(){

		var answer = 100/2;

		secs = secs - 1;

		if (secs >= 0) {
			window.setTimeout(function(){
				$("#timer span").text(secs); 
				startTimer();
			}, 1000);

		} else {
			$("#answer").text("Out of Time! the correct answer was " + answer + ".").addClass("incorrect");
			$("#first-next").css("display", "block");
			$("#computer-score").text(computerScore + 1);

		}
	}
	

	$("#button").click(function(){

		
		var amountString = $("#amount").val();

		var amount = parseInt(amountString);

		var answer = 100/2;
		

		if ( amount == 50 ) {
			$("#problem1").hide();
		  	$("#problem2").show();
		  	$("#answer").text("Correct!").addClass("correct");
		  	$("#you-score").text(youScore + 1);
		  	$("#first-next").css("display", "block");


		} else {
			$("#answer").text("Incorrect, the correct answer was " + answer + ".").addClass("incorrect");
			$("#problem1").hide();
			$("#computer-score").text(computerScore + 1);
		  	$("#first-next").css("display", "block");

		}
	});

	$("#first-next").click(function(){

		$(".question2").show();
		$(".question").hide();
	});

});


// when a user comes to this page...
// hit start button
// start button when clicked starts a 10 second timer
// and reveals the first question + a box of a submit button
// someone puts number in box or timer reaches 10 seconds
// if someone puts number in box, get value from box, then check to see if correct
// if answer is correct, add one point to youscore and display "correct", if answer is incorrect, add one point to computer score and display "incorrect", and display "next button"
// if timer reaches 10 seconds, display "out of time" and add point to computer score and display "next" button
