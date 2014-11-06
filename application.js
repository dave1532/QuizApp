$(document).ready(function () {
    //Global variables
   playtheme();

function playtheme () {
  $('#playtheme')[0].volume = 0.9;
  $('#playtheme')[0].load();
  $('#playtheme')[0].play();
  } 
    var questions = [{
        question: "Which of these terms means to cook food in its own juices with a small amount of fat over low heat, just until softened?",
        choices: ["Simmering", "Sweating", "Stewing", "Fry"],
        questNum: 1,
        correct: 1
    },

    {
        question: "Which type of wood should you NOT use for smoking foods on an outdoor grill?",
        choices: ["Softwoods", "Hardwoods", "Fruitwoods", "Pine tree"],
        questNum: 2,
        correct: 0
    },

    {
        question: "What is Panko?",
        choices: ["A thin, mild-tasting white fish", "A broad, flat noodle", "A Japanese bread crumb", "A nonstick pan coating"],
        questNum: 3,
        correct: 2
    },

    {
        question: "What salad dressing gets its name from a region that's popular among outdoors enthusiasts?",
        choices: ["Thousand Island", "Ranch", "Green Goddess", "Balsamic vinegar"],
        questNum: 4,
        correct: 0
    },

    {
        question: "Which of the following ingredients can be used as en emulsifier in sald dressing?",
        choices: ["Water", "Giner", "Egg yolks", "Belgium ale"],
        questNum: 5,
        correct: 2
    }];

    var numCorrect = 0;
    var number = 0;

    //event handlers
    //when user clicks submit the answer given is checked to see if correct
    //and the next question is shown
    $("#submit").on("click", function () {
    	checkAnswer();
        nextQuestion();
    });

    // when the retry button is clicked the program restarts 
    //1st question is shown
    $("#retry").on("click", function () {
    	restart();
    	nextQuestion();
    });

    //Checks if the answer is correct. If so, increments numCorrect.
    function checkAnswer() {
        var answer = $('input[type="radio"]:checked').val();
        console.log(answer);
        if(answer == questions[number].correct)
        {
        	numCorrect++;
        	console.log(numCorrect);
        }
    }

    //if at the end of the quiz (questions array)
    //shows review screen with correct answers
    //else removes current question and shows next question
    function nextQuestion() {
    	if(number >= questions.length-1)
    	{
            $('div p').remove();
        	$('div input:radio').remove();
        	$('#submit').hide();
        	$('div span').remove();
	        $('div br').remove();
	        $('div').append('<h1>Review</h1>');
	        review();		
    	}
        else{
            $('div p').remove();
        	$('div input:radio').remove();
        	$('div span').remove();
	        $('div br').remove();
	        $('h1').remove();
	        number++;
    	    console.log(number);
    	    console.log(questions.length-1);
        	var newQuestion = '<h1 class="title">Cook Quiz</h1><p class="question"> ' + questions[number].questNum + '. ' + questions[number].question + '<b>(Question ' + questions[number].questNum + ' of 5)</b></p><input type = "radio" name = "0" value = "0"><span>' + questions[number].choices[0] + '</span><br><input type = "radio" name = "0" value = "1"><span>' + questions[number].choices[1] + '</span><br><input type = "radio" name = "0" value = "2"><span>' + questions[number].choices[2] + '</span><br><input type = "radio" name = "0" value = "3"><span>' + questions[number].choices[3] + '</span><br>';
        	$('div').prepend(newQuestion);
        	
    	}	
    }

    //removes questions and shows review screen with correct answers
    //as well as shows retry button
    function review() {
    	$('div').append('<h2>You got '+numCorrect+' answers right!</h2>')
    	for(var j in questions){
	       	$('div').append('<p class="question"> ' + questions[j].questNum + '. ' + questions[j].question + '</p><span class="review">The correct answer is <b>' +questions[j].choices[questions[j].correct]+ '</b></span>');
	    } 
	    $('#retry').show();
    }

    //clears whats in the div and starts from the first question
    function restart(){
        $('div p').remove();
        $('div input:radio').remove();
       	$('div span').remove();
	    $('div br').remove();
        $('h1, h2').remove();
        $('#submit').show();
        $('#retry').hide();
    	number = -1;
    	numCorrect = 0;
    }
});