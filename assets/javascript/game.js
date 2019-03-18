var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessChoices = [];
    document.onkeyup = function(event) {

        var UserGuess = event.key;
        var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]; 
        console.log(computerGuess)

        if (UserGuess===computerGuess) {
            wins++;
            guessesLeft = 9;
            guessChoices = [];
       } else if (UserGuess!=computerGuess) { 
            guessesLeft--;
            guessChoices.push(UserGuess)
       } 
       if (guessesLeft==0) {
        losses++;
        guessesLeft = 9;
       }
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("guesses-left").textContent = guessesLeft;
        document.getElementById("guesses").textContent = guessChoices;
    }
    

