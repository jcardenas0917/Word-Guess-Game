// list of random words
// var randomWord = ['awkward','bagpipes','banjo','bungler','croquet','crypt','dwarves','fervid','fishhook','house','gazebo','gypsy','haiku','haphazard','hyphen',
//     'ivory','jazzy','jiffy','jinx','jukebox', 'kayak','kiosk','klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm','pixel',
//     'polka','quad','quip','rhythmic','rogue','sphinx','squawk','swivel','toady','twelfth','unzip','waxy','wildebeest','yacht','zealous','zigzag','zippy','zombie',
//     'dramatic', 'notebook','detail','graceful','carriage','plate','fold','rifle','memory','skillful','vengeful','brief','young','yarn','certain','evasive','deep',
//     'shiny','lackadaisical','open','obedient','witty','shiver','observation','bird','demonic','answer','aware','comparison','tedious','zealous','greasy','acoustic',
//     'cars','sincere','valuable','cave','curl','mine','plain','voiceless','defective','cable','mend','crabby','sturdy','knot','use','scissors','tow'];
    var randomWord = ['house'];
    
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
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","x","z"];
//    Generates a new word and displays dashes,puts the curser in the guess letter box
    function startGame(){
        
        // document.getElementById("letter").focus();
        
         for (var i = 0; i < hiddenWord.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("answer").innerHTML = answerArray;
        guess=10;
        lettersUsed=[];  
};

    document.onkeyup = function(event){
             var inputLetter = event.key;
             
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
             var remainingLetters = hiddenWord.length ;
                     for (var j = 0; j < remainingLetters; j++) {
                         if (hiddenWord[j] === inputLetter) {
                                answerArray[j] = inputLetter.toUpperCase();
                                remainingLetters--;
                            }
        
                                document.getElementById("answer").innerHTML = answerArray;
                        }

                            lettersUsed.push(inputLetter.toUpperCase());   
                            document.getElementById("used").innerHTML= "Letters used " + lettersUsed;
                            if (answerArray.join("")===hiddenWord.toLocaleUpperCase()){
                                startGame();
                                wins++;
                                document.getElementById("numofwins").innerHTML = "Wins " + wins;
                                document.getElementById("winner").innerHTML = "YOU WIN!!!";
                                document.getElementById("used").innerHTML= "Letters used ";     
                            }
                            for (var k = 0; k < lettersUsed.length; k++){
                                console.log(lettersUsed)
                                console.log(inputLetter)
                                if (inputLetter === lettersUsed){
                                    
                                    alert("letter was used");
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

    

