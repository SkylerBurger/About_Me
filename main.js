'use strict';
        
        var correctAnswers = 0;
        
        //=================
        // Collect username
        //=================
        var userName = prompt('Welcome to my site, what\'s your name?');
        console.log('Your name is: ' + userName);
        alert('That\'s a lovely name you\'ve got, ' + userName + '. If you have a moment I\'ve got a few questions for you but they\'re really all about me!');

        //========================
        // First question - romCom
        //========================
        var romCom = prompt("Does Skyler enjoy romantic comedy films?");
        romCom = romCom.toLowerCase();
        console.log('Your answer to the rom-com question is: ' + romCom);

        if(romCom === 'no' || romCom === 'n') {
            alert('You\'re correct! Romantic comedies are kinda meh.');
            correctAnswers++;
        } else if (romCom === 'yes' || romCom === 'y'){
            alert('Sorry, he\'s just not that into you... I mean them.');
        } else {
            alert('Please answer with y/n or yes/no, ' + userName + ' :D');
        }
        console.log(correctAnswers + ' out of 7 questions correct');

        //=============================
        // Second Question - hellraiser
        //=============================
        var hellraiser = prompt('Would Skyler be happy to discuss the first 8 out of 10 Hellraiser films with you?');
        hellraiser = hellraiser.toLowerCase();
        console.log('Your answer to the Hellraiser question is: ' + hellraiser);
        
        if(hellraiser === 'yes' || hellraiser ==='y') {
            alert('YES! YES! A hundred times YES! They\'re great, though things really start to go downhill quickly after Hellraiser III: Hell on Earth.');
            correctAnswers++;
        } else if(hellraiser === 'no' || hellraiser === 'n') {
            alert('Oh we have such sights to show you! Sorry, that was the wrong answer. Get thee to a DVD player and watch them now!');
        } else {
            alert('Please answer with y/n or yes/no, ' + userName + '. It\'s more fun that way, I swear!');
        }
        console.log(correctAnswers + ' out of 7 questions correct');

        //==========================
        // Third Question - modPodge
        //==========================
        var modPodge = prompt('Is Mod Podge Skyler\'s favorite craft supply?');
        modPodge = modPodge.toLowerCase();
        console.log('Your answer to the Mod Podge question is: ' + modPodge);

        if(modPodge === "yes" || modPodge === "y") {
            alert('You are correct! It\'s the crafting supply of the Gods!');
            correctAnswers++;
        } else if(modPodge === 'no' || modPodge === 'n') {
            alert('You must be using an inferior adhesive/sealing material. It\'s simply the best!');
        } else {
            alert('Please answer with y/n or yes/no, ' + userName + '. It\'s not that hard, I promise.');
        }
        console.log(correctAnswers + ' out of 7 questions correct');

        //==========================
        // Fourth Question - trumpet
        //==========================
        var trumpet = prompt('Does Skyler know how to play the trumpet?');
        trumpet = trumpet.toLowerCase();
        console.log('Your answer to the trumpet question is: ' + trumpet);

        if(trumpet === 'no' || trumpet === 'n') {
            alert('Correct, he doesn\'t know how to play the trumpet but he did play the trombone and bassoon for a number of years.');
            correctAnswers++;
        } else if(trumpet === 'yes' || trumpet === 'y') {
            alert('Unfortunately playing the trumpet didn\'t seem that appealing. He chose the bassoon instead.');
        } else {
            alert('Please answer with y/n or yes/no, ' + userName + '! Do we really need to keep discussing this?');
        }
        console.log(correctAnswers + ' out of 7 questions correct');

        //=========================
        // Fifth Question - montana
        //=========================
        var montana = prompt('Do you think Skyler has ever visited Montana?');
        montana = montana.toLowerCase();
        console.log('Your answer to the Montana question is: ' + montana);

        if (montana === 'no' || montana === 'n') {
            alert('Ding ding ding, you\'re correct! It seems like a beautiful place to visit. Maybe someday...');
            correctAnswers++;
        } else if (montana === 'yes' || montana === 'y') {
            alert('Unfortunately he\'s yet to make it over there. Maybe someday...');
        } else {
            alert('Well ' + userName + ', there are no more questions left so is there any reason to remind you how to answer these questions?');
        }
        console.log(correctAnswers + ' out of 7 questions correct');

        //============================
        // Sixth Question - favNumGuess
        //============================
        var favNumber = 42;
        var gameOver = false;
        var tries = 0;

        var favNumGuess = prompt('Take a stab at guessing Skyler\'s favorite number. Please respond with an integer. You\'ll have 4 chances to guess the right number before I get bored of this.');
        favNumGuess = Number(favNumGuess);
        console.log('Guess is ' + favNumGuess);

        while(!gameOver) {
            // Checks if guess is correct, alerts if too high or too low
            tries++;
            var remainingChances = 4 - tries;
            console.log('Entering logic flow');

            if(favNumGuess === 42) {
                alert('You\'re incredible! Of an infinite collection of numbers to select from, you got it! I\'m impressed and spooked.');
                gameOver = true;
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
            if(!gameOver && tries === 4){
                alert('Sorry you have used all of your chances, better luck next time.');
                gameOver = true;
            } else if (!gameOver){
                favNumGuess = prompt('Take another guess, what\'s my favorite number?');
                favNumGuess = Number(favNumGuess);
            }
        }


        //===========================================
        // Seventh Question - *TBA* Multiple Choice Q
        //===========================================

        //==============
        // Grand Finale ***Skybur needs to update this to account for added questions
        //==============
        // if(correctAnswers === 5) {
        //     alert('Congratulations ' + userName + ", you got all of the questions correct! Are you sure you\'re not secretly Skyler?");
        // } else if(correctAnswers > 2) {
        //     alert('Not bad, ' + userName + '. You got ' + correctAnswers + ' out of 5 correct. I\'d tell you to try better next time but this quiz doesn\'t really matter. You be you!');
        // } else {
        //     alert(correctAnswers + ' out of 5 isn\'t great, but who really needs to know these things about a stranger, really? Have a great day, ' + userName + '!');
        // }