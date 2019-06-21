// list of random words
// var randomWord = ['awkward','bagpipes','banjo','bungler','croquet','crypt','dwarves','fervid','fishhook','house','gazebo','gypsy','haiku','haphazard','hyphen',
//     'ivory','jazzy','jiffy','jinx','jukebox', 'kayak','kiosk','klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm','pixel',
//     'polka','quad','quip','rhythmic','rogue','sphinx','squawk','swivel','toady','twelfth','unzip','waxy','wildebeest','yacht','zealous','zigzag','zippy','zombie',
//     'dramatic', 'notebook','detail','graceful','carriage','plate','fold','rifle','memory','skillful','vengeful','brief','young','yarn','certain','evasive','deep',
//     'shiny','lackadaisical','open','obedient','witty','shiver','observation','bird','demonic','answer','aware','comparison','tedious','zealous','greasy','acoustic',
//     'cars','sincere','valuable','cave','curl','mine','plain','voiceless','defective','cable','mend','crabby','sturdy','knot','use','scissors','tow'];
  var randomWord = ["scissors"];
    
    // number of guesses allowed
    var guess = 10;
    // number of wins
    var wins = 0;
   
    // generates a random word form the randon word array
    var randomNumber = Math.floor(Math.random(randomWord)*randomWord.length);
    var hiddenWord=(randomWord[randomNumber]);  
    // Empty arrays to store guess and answer dashes
    var answerArray = [];
    var lettersUsed = []; 
    
//    Generates a new word and displays dashes,puts the curser in the guess letter box
    function startGame(){
        
        // document.getElementById("letter").focus();
        
         for (var i = 0; i < hiddenWord.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("answer").innerHTML = answerArray;
        guess=10;
        document.getElementById("numofguess").innerHTML = guess + " guesses left";
        lettersUsed=[]; 
        
    };

    function lettersAllowed(allowed){
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        // Iterate through alphabet
        for (var i = 0; i < alphabet.length; i++){
            console.log(alphabet[i]);
            // Checks if input letter is not contained in alphabet
            if(alphabet[i]===allowed)
            {   
                console.log(allowed);
                
                return false;
                
            }

        }
        
        return true;
    }

    function checkDuplicates(letter, letterArray){
        

        // Iterate through lettersUsed
        for (var i = 0; i < letterArray.length; i++){


            // Checks if letter is contained in lettersUsed
            if(letterArray[i].toLocaleUpperCase()===letter.toLocaleUpperCase())
            {
            
                return true;
                
            }

        }
        
        return false;
    }

    document.onkeyup = function(event){
             var inputLetter = event.key;
             console.log("about to check")

            //check if pressed key is valid letter character
            if (lettersAllowed(inputLetter)){
                alert("not a valid key");
            }else{
             //Check if inputLetter is in lettersUsed
             if (checkDuplicates(inputLetter, lettersUsed)){

                alert("you already used "+ inputLetter);
                 
             } else {
                
                if (hiddenWord.includes(inputLetter)){
                document.getElementById("match").innerHTML = inputLetter.toUpperCase() + " "+ "found!"

                } else{
                    document.getElementById("match").innerHTML = inputLetter.toUpperCase() + " "+ "Not found!"
                    guess--;
                    document.getElementById("numofguess").innerHTML = guess + " guesses left";
                        if (guess===0){
                        alert("GAME OVER")
                        var again =confirm("Do you want to play again?");
                            if(again){
                                location.reload(); 
                            }
                            else{
                                alert("Thanks for playing");
                            }
                        }
                    }
            
                     for (var j = 0; j < hiddenWord.length; j++) {
                         if (hiddenWord[j] === inputLetter) {
                                answerArray[j] = inputLetter.toUpperCase();
                            }
        
                                document.getElementById("answer").innerHTML = answerArray;
                        }

                            lettersUsed.push(inputLetter.toUpperCase());   
                            console.log(lettersUsed)   
                            document.getElementById("used").innerHTML= "Letters used " + lettersUsed;

                            if (answerArray.join("")===hiddenWord.toLocaleUpperCase()){
                                wins++;
                                document.getElementById("numofwins").innerHTML = "Wins " + wins;
                                document.getElementById("used").innerHTML= "Letters used "; 

                                document.getElementById("answer").innerHTML = answerArray;
                                guess=10;
                                document.getElementById("numofguess").innerHTML = guess + " guesses left";

                                alert("the word is " + hiddenWord + " You win");

                                lettersUsed=[]; 

                                startGame();   
                            }
                        }
                    }                 
         };
         
    function showAnswer(){
        document.getElementById("answer").innerHTML = hiddenWord.toLocaleUpperCase();
        guess=0;
        wins=0;
        document.getElementById("numofguess").innerHTML = guess + " guesses left";
        document.getElementById("numofwins").innerHTML = "Wins " + wins;
    };

document.getElementById("showanswer").onclick = function(){
    showAnswer()
}

    

