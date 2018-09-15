'use strict';
        
var correctAnswers = 0;
var tries = 0;

//=================
// Collect username
//=================
var gatherUsername = function() {
    var name;

    do{
        name = prompt('Welcome to my site, what\'s your name?');
    } while(!name);

    console.log('name: ' + name);
    alert('That\'s a lovely name you\'ve got, ' + name + '. If you have a moment I\'ve got a few questions for you but they\'re really all about me!');

    return name;
}

//========================
// First question - romCom
//========================

var question_1 = function() {
    var romCom;

    do {
        var romCom = prompt('Does Skyler enjoy romantic comedy films? *Please answer \'yes\' or \'no\'.'); 
    } while (romCom !== 'no' && romCom !== 'yes' && romCom !== 'n' && romCom !== 'y');

    romCom = romCom.toLowerCase();
    console.log('Answer 1: ' + romCom);

    if(romCom === 'no' || romCom === 'n') {
        alert('You\'re correct! Romantic comedies are kinda meh.');
        correctAnswers++;
    } else {
        alert('Sorry, he\'s just not that into you... I mean them.');
    }
    console.log(correctAnswers + ' out of 7 questions correct');
}

//=============================
// Second Question - hellraiser
//=============================

var question_2 = function() {
    var hellraiser;

    do {
        hellraiser = prompt('Would Skyler be happy to discuss the first 8 out of 10 Hellraiser films with you? *Please answer \'yes\' or \'no\'.');
    } while(hellraiser !== 'no' && hellraiser !== 'yes' && hellraiser !== 'n' && hellraiser !== 'y');
    hellraiser = hellraiser.toLowerCase();
    console.log('Answer 2: ' + hellraiser);
    
    if(hellraiser === 'yes' || hellraiser === 'y') {
        alert('YES! They\'re great, though things really start to go downhill quickly after Hellraiser III: Hell on Earth.');
        correctAnswers++;
    } else {
        alert('Oh we have such sights to show you! Sorry, that was the wrong answer. Get thee to a DVD player and watch them now!');
    }
    console.log(correctAnswers + ' out of 7 questions correct');
}

//==========================
// Third Question - modPodge
//==========================

var question_3 = function() {
    var modPodge;

    do {
        modPodge = prompt('Is Mod Podge Skyler\'s favorite craft supply? *Please answer \'yes\' or \'no\'.');
    } while(modPodge !== 'no' && modPodge !== 'yes' && modPodge !== 'n' && modPodge !== 'y');
    
    modPodge = modPodge.toLowerCase();
    console.log('Answer 3: ' + modPodge);
    
    if(modPodge === "yes" || modPodge === 'y') {
        alert('You are correct! It\'s the crafting supply of the Gods!');
        correctAnswers++;
    } else {
        alert('You must be using an inferior adhesive/sealing material. It\'s simply the best!');
    }
    console.log(correctAnswers + ' out of 7 questions correct');
}

//==========================
// Fourth Question - trumpet
//==========================

var question_4 = function() {
    var trumpet;

    do {
        trumpet = prompt('Does Skyler know how to play the trumpet? *Please answer \'yes\' or \'no\'.');
    } while(trumpet !== 'no' && trumpet !== 'yes' && trumpet !== 'n' && trumpet !== 'y');
    
    trumpet = trumpet.toLowerCase();
    console.log('Your answer to the trumpet question is: ' + trumpet);
    
    if(trumpet === 'no' || trumpet === 'n') {
        alert('Correct, he doesn\'t know how to play the trumpet but he did play the trombone and bassoon for a number of years.');
        correctAnswers++;
    } else {
        alert('Unfortunately playing the trumpet didn\'t seem that appealing. He chose the bassoon instead.');
    }
    console.log(correctAnswers + ' out of 7 questions correct');
}

//=========================
// Fifth Question - montana
//=========================

var question_5 = function() {
    var montana;

    do {
        montana = prompt('Do you think Skyler has ever visited Montana?');
    } while(montana !== 'no' && montana !== 'yes' && montana !== 'n' && montana !== 'y');
    
    montana = montana.toLowerCase();
    console.log('Your answer to the Montana question is: ' + montana);
    
    if (montana === 'no' || montana === 'n') {
        alert('Ding ding ding, you\'re correct! It seems like a beautiful place to visit. Maybe someday...');
        correctAnswers++;
    } else {
        alert('Unfortunately he\'s yet to make it over there. Maybe someday...');
    }
    console.log(correctAnswers + ' out of 7 questions correct');
}

//===========================
// Sixth Question - favNumber
//===========================

var question_6 = function() {
    var favNumber = 42;
    var question6Over = false;
    
    
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
        // If game is still going, prompt again
        if(!question6Over && tries === 4){
            alert('Sorry you have used all of your chances, better luck next time.');
            question6Over = true;
        } else if (!question6Over){
            favNumGuess = prompt('Take another guess, what\'s my favorite number?');
            favNumGuess = Number(favNumGuess);
        }
    }
}

//===========================================
// Seventh Question - petNames
//===========================================

var question_7 = function() {
    var petNames = ['bubba', 'sebastian', 'kc', 'duke', 'midnight', 'bandit', 'clark'];
    var question7Over = false;
    tries = 6;
    var answerCorrect = false;
    
    
    do {
        var petNameGuess = prompt('Can you guess the name of one of my previous pets? You have ' + tries + ' remaining');
            petNameGuess = petNameGuess.toLowerCase();
            console.log('Guess is ' + petNameGuess);
    
        for (var i=0; i < petNames.length; i++) {
            console.log('pet names ' + petNames[i]);
            if(petNameGuess === petNames[i]) {
                answerCorrect = true;
            }
        }
            
        
        if(answerCorrect) {
            console.log(answerCorrect);
            alert('You got it right');
            correctAnswers++;
            break;
        } else if (petNameGuess) {
            console.log(answerCorrect);
            alert('Sorry wrong answer');
            tries--;
            alert('You have ' + tries + ' left');
            //break;
            console.log(petNameGuess + ' is not ' + petNames[i]);
        }
    
    } while (!answerCorrect && tries > 0);
    
    alert ('Here is the full list of my past pets\' names: Bubba, Sebastian, KC, Duke, Midnight, Bandit, and Clark.');
}

//===============
// Question Calls
//===============
var userName = gatherUsername();
question_1();
question_2();
question_3();
question_4();
question_5();
question_6();
question_7();

//==============
// Grand Finale
//==============
if(correctAnswers === 7) {
    alert('Congratulations ' + userName + ', you got all of the questions correct! Are you sure you\'re not secretly Skyler?');
} else if(correctAnswers > 3) {
    alert('Not bad, ' + userName + '. You got ' + correctAnswers + ' out of 7 correct. I\'d tell you to try better next time but this quiz doesn\'t really matter. You be you!');
} else {
    alert(correctAnswers + ' out of 7 isn\'t great, but who really needs to know these things about a stranger, really? Have a great day, ' + userName + '!');
}