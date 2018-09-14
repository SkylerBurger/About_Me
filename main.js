'use strict';
        
        var correctAnswers = 0;
        
        // Collect username
        var userName = prompt('Welcome to my site, what\'s your name?');
        console.log('Your name is: ' + userName);
        alert('That\'s a lovely name you\'ve got, ' + userName + '. If you have a moment I\'ve got a few questions for you but they\'re really all about me!');

        // First question - romCom
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
        console.log(correctAnswers + ' out of 5 questions correct');

        // Second Question - hellraiser
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
        console.log(correctAnswers + ' out of 5 questions correct');

        // Third Question - modPodge
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
        console.log(correctAnswers + ' out of 5 questions correct');

        // Fourth Question - trumpet
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
        console.log(correctAnswers + ' out of 5 questions correct');

        // Fifth Question - montana
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
        console.log(correctAnswers + ' out of 5 questions correct');

        // Grand Finale
        if(correctAnswers === 5) {
            alert('Congratulations ' + userName + ", you got all of the questions correct! Are you sure you\'re not secretly Skyler?");
        } else if(correctAnswers > 2) {
            alert('Not bad, ' + userName + '. You got ' + correctAnswers + ' out of 5 correct. I\'d tell you to try better next time but this quiz doesn\'t really matter. You be you!');
        } else {
            alert(correctAnswers + ' out of 5 isn\'t great, but who really needs to know these things about a stranger, really? Have a great day, ' + userName + '!');
        }