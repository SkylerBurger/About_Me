'use strict';
        
var correctAnswers = 0;

//=================
// Collect username
//=================

var userName;

do{
    userName = prompt('Welcome to my site, what\'s your name?');
} while(!userName);

console.log('Username: ' + userName);
alert('That\'s a lovely name you\'ve got, ' + userName + '. If you have a moment I\'ve got a few questions for you but they\'re really all about me!');

//========================
// First question - romCom
//========================
var romCom;

do {
    var romCom = prompt('Does Skyler enjoy romantic comedy films? *Please answer \'yes\' or \'no\'.'); 
} while (romCom !== 'no' && romCom !== 'yes');

romCom = romCom.toLowerCase();
console.log('Answer 1: ' + romCom);

if(romCom === 'no') {
    alert('You\'re correct! Romantic comedies are kinda meh.');
    correctAnswers++;
} else {
    alert('Sorry, he\'s just not that into you... I mean them.');
}
console.log(correctAnswers + ' out of 7 questions correct');

//=============================
// Second Question - hellraiser
//=============================
var hellraiser; 

do {
    hellraiser = prompt('Would Skyler be happy to discuss the first 8 out of 10 Hellraiser films with you? *Please answer \'yes\' or \'no\'.');
} while(hellraiser !== 'no' && hellraiser !== 'yes');

hellraiser = hellraiser.toLowerCase();
console.log('Answer 2: ' + hellraiser);

if(hellraiser === 'yes') {
    alert('YES! They\'re great, though things really start to go downhill quickly after Hellraiser III: Hell on Earth.');
    correctAnswers++;
} else {
    alert('Oh we have such sights to show you! Sorry, that was the wrong answer. Get thee to a DVD player and watch them now!');
}
console.log(correctAnswers + ' out of 7 questions correct');

//==========================
// Third Question - modPodge
//==========================
var modPodge;

do {
    modPodge = prompt('Is Mod Podge Skyler\'s favorite craft supply? *Please answer \'yes\' or \'no\'.');
} while(modPodge !== 'no' && modPodge !== 'yes');

modPodge = modPodge.toLowerCase();
console.log('Answer 3: ' + modPodge);

if(modPodge === "yes") {
    alert('You are correct! It\'s the crafting supply of the Gods!');
    correctAnswers++;
} else {
    alert('You must be using an inferior adhesive/sealing material. It\'s simply the best!');
}
console.log(correctAnswers + ' out of 7 questions correct');

//==========================
// Fourth Question - trumpet
//==========================
var trumpet;

do {
    trumpet = prompt('Does Skyler know how to play the trumpet? *Please answer \'yes\' or \'no\'.');
} while(trumpet !== 'no' && trumpet !== 'yes');

trumpet = trumpet.toLowerCase();
console.log('Your answer to the trumpet question is: ' + trumpet);

if(trumpet === 'no') {
    alert('Correct, he doesn\'t know how to play the trumpet but he did play the trombone and bassoon for a number of years.');
    correctAnswers++;
} else {
    alert('Unfortunately playing the trumpet didn\'t seem that appealing. He chose the bassoon instead.');
}
console.log(correctAnswers + ' out of 7 questions correct');

//=========================
// Fifth Question - montana
//=========================
var montana;

do {
    montana = prompt('Do you think Skyler has ever visited Montana?');
} while(montana !== 'no' && montana !== 'yes');

montana = montana.toLowerCase();
console.log('Your answer to the Montana question is: ' + montana);

if (montana === 'no') {
    alert('Ding ding ding, you\'re correct! It seems like a beautiful place to visit. Maybe someday...');
    correctAnswers++;
} else {
    alert('Unfortunately he\'s yet to make it over there. Maybe someday...');
}
console.log(correctAnswers + ' out of 7 questions correct');

//===========================
// Sixth Question - favNumber
//===========================
var favNumber = 42;
var question6Over = false;
var tries = 0;

var favNumGuess = prompt('Take a stab at guessing Skyler\'s favorite number. Please respond with an integer. You\'ll have 4 chances to guess the right number before I get bored of this.');
favNumGuess = Number(favNumGuess);
console.log('Guess is ' + favNumGuess);

while(!question6Over) {
    // Checks if guess is correct, alerts if too high or too low
    tries++;
    var remainingChances = 4 - tries;
    console.log('Entering logic flow');

    if(favNumGuess === 42) {
        alert('You\'re incredible! Of an infinite collection of numbers to select from, you got it! I\'m impressed and spooked.');
        correctAnswers++;
        question6Over = true;
    } else if (favNumGuess > 42) {
        console.log('Remaining chances: ' + remainingChances);
        alert('Your guess was a little high. You have ' + remainingChances + ' out of 4 chances left.');
    } else if (favNumGuess < 42) {
        console.log('Remaining chances: ' + remainingChances);
        alert('Your guess is a little low. You have ' + remainingChances + ' out of 4 chances left.');
    } else {
        console.log('Remaining chances: ' + remainingChances);
        alert('Did you enter a number? That still counts as a guess unfortunately. You have ' + remainingChances + ' out of 4 chances left.');
    }

    // If game is still going and all chances are used, too bad
    // If game is still going and chances remain, prompt again
    if(!question6Over && tries === 4){
        alert('Sorry you have used all of your chances, better luck next time.');
        question6Over = true;
    } else if (!question6Over){
        favNumGuess = prompt('Take another guess, what\'s my favorite number?');
        favNumGuess = Number(favNumGuess);
    }
}

//===========================================
// Seventh Question - petNames
//===========================================
var petNames = ['bubba', 'sebastian', 'KC', 'Duke', 'Midnight', 'Bandit', 'Clark'];
var question7Over = false;
tries = 0;

var petNameGuess = prompt("Can you guess the name of one of my previous pets? I'll give you a generous 6 chances to guess one correctly.");
petNameGuess = petNameGuess.toLowerCase();
console.log('Guess is ' + petNameGuess);

// THE LOGIC FLOW FOR THIS IS GOING TO BE DIFFERENT THAN QUESTION 6
// FIND A WAY TO TRAVERSE AN ARRAY AND CHECK IF STATEMENTS AT THE SAME TIME


//==============
// Grand Finale
//==============
// if(correctAnswers === 7) {
//     alert('Congratulations ' + userName + ", you got all of the questions correct! Are you sure you\'re not secretly Skyler?");
// } else if(correctAnswers > 3) {
//     alert('Not bad, ' + userName + '. You got ' + correctAnswers + ' out of 7 correct. I\'d tell you to try better next time but this quiz doesn\'t really matter. You be you!');
// } else {
//     alert(correctAnswers + ' out of 7 isn\'t great, but who really needs to know these things about a stranger, really? Have a great day, ' + userName + '!');
// }