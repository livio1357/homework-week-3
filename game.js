var targetScore = Math.floor(Math.random() * (200-40)) + 40;

parseInt($('#targetNum').html(targetScore));

var blueScore = Math.floor(Math.random() * (35-5)) + 5;
var greenScore = Math.floor(Math.random() * (35-5)) + 5;
var goldScore = Math.floor(Math.random() * (35-5)) + 5;
var lightblueScore = Math.floor(Math.random() * (35-5)) + 5;


parseInt($('#ScoreNum').html(0));

var score = parseInt($('#ScoreNum').html());

var win = 0;
var losses = 0;

$('#numWins').html(win);
$('#numLosses').html(losses);

$('#blue').on('click' , function(){

score += blueScore;
$('#ScoreNum').html(score);

// use three = to mean super =  if the score is the targetscore then hide the buttons / imgs and then add a plus ++ to the win or the loose

if (score === targetScore) {
	win++;
$('#numWins').html(win);
$('img').hide();

// this add a +1
} else if (score > targetScore) {
	losses++;
	$('#numLosses').html(losses);
	$('img').hide();
}

});



$('button').on('click' , function(){

targetScore = Math.floor(Math.random() * (200-40)) + 40;

parseInt($('#targetNum').html(targetScore));

blueScore = Math.floor(Math.random() * (35-5)) + 5;
greenScore = Math.floor(Math.random() * (35-5)) + 5;
 goldScore = Math.floor(Math.random() * (35-5)) + 5;
lightblueScore = Math.floor(Math.random() * (35-5)) + 5;

parseInt($('#ScoreNum').html(0));

score = parseInt($('#ScoreNum').html());


$('img').show();



});



// Green button 

$('#green').on('click' , function(){

score += greenScore;
$('#ScoreNum').html(score);

// use three = to mean super =  if the score is the targetscore then hide the buttons / imgs and then add a plus ++ to the win or the loose

if (score === targetScore) {
	win++;
$('#numWins').html(win);
$('img').hide();

// this add a +1
} else if (score > targetScore) {
	losses++;
	$('#numLosses').html(losses);
	$('img').hide();
}

});


$('button').on('click' , function(){

targetScore = Math.floor(Math.random() * (200-40)) + 40;

parseInt($('#targetNum').html(targetScore));

blueScore = Math.floor(Math.random() * (35-5)) + 5;
greenScore = Math.floor(Math.random() * (35-5)) + 5;
 goldScore = Math.floor(Math.random() * (35-5)) + 5;
lightblueScore = Math.floor(Math.random() * (35-5)) + 5;

parseInt($('#ScoreNum').html(0));

score = parseInt($('#ScoreNum').html());


$('img').show();


});


// gold button

$('#gold').on('click' , function(){

score += greenScore;
$('#ScoreNum').html(score);

// use three = to mean super =  if the score is the targetscore then hide the buttons / imgs and then add a plus ++ to the win or the loose

if (score === targetScore) {
	win++;
$('#numWins').html(win);
$('img').hide();

// this add a +1
} else if (score > targetScore) {
	losses++;
	$('#numLosses').html(losses);
	$('img').hide();
}

});


$('button').on('click' , function(){

targetScore = Math.floor(Math.random() * (200-40)) + 40;

parseInt($('#targetNum').html(targetScore));

blueScore = Math.floor(Math.random() * (35-5)) + 5;
greenScore = Math.floor(Math.random() * (35-5)) + 5;
 goldScore = Math.floor(Math.random() * (35-5)) + 5;
lightblueScore = Math.floor(Math.random() * (35-5)) + 5;

parseInt($('#ScoreNum').html(0));

score = parseInt($('#ScoreNum').html());


$('img').show();


});


// lightblue button

$('#lightblue').on('click' , function(){

score += greenScore;
$('#ScoreNum').html(score);

// use three = to mean super =  if the score is the targetscore then hide the buttons / imgs and then add a plus ++ to the win or the loose

if (score === targetScore) {
	win++;
$('#numWins').html(win);
$('img').hide();

// this add a +1
} else if (score > targetScore) {
	losses++;
	$('#numLosses').html(losses);
	$('img').hide();
}

});


$('button').on('click' , function(){

targetScore = Math.floor(Math.random() * (200-40)) + 40;

parseInt($('#targetNum').html(targetScore));

blueScore = Math.floor(Math.random() * (35-5)) + 5;
greenScore = Math.floor(Math.random() * (35-5)) + 5;
 goldScore = Math.floor(Math.random() * (35-5)) + 5;
lightblueScore = Math.floor(Math.random() * (35-5)) + 5;

parseInt($('#ScoreNum').html(0));

score = parseInt($('#ScoreNum').html());


$('img').show();


});




