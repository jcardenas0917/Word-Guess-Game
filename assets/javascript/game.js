// list of random words
var randomWord = ['awkward','bagpipes','banjo','bungler','croquet','crypt','dwarves','fervid','fishhook','house','gazebo','gypsy','haiku','haphazard','hyphen',
    'ivory','jazzy','jiffy','jinx','jukebox', 'kayak','kiosk','klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm','pixel',
    'polka','quad','quip','rhythmic','rogue','sphinx','squawk','swivel','toady','twelfth','unzip','waxy','wildebeest','yacht','zealous','zigzag','zippy','zombie',
    'dramatic', 'notebook','detail','graceful','carriage','plate','fold','rifle','memory','skillful','vengeful','brief','young','yarn','certain','evasive','deep',
    'shiny','lackadaisical','open','obedient','witty','shiver','observation','bird','demonic','answer','aware','comparison','tedious','zealous','greasy','acoustic',
    'cars','sincere','valuable','cave','curl','mine','plain','voiceless','defective','cable','mend','crabby','sturdy','knot','use','scissors','tow'];
    // var randomWord = ['house'];
    
    // number of guesses allowed
    var guess = 10;
    // number of wins
    var wins = 0;
    var correctCount = 0;
    // generates a random word form the randon word array
    var randomNumber = Math.floor(Math.random(randomWord)*randomWord.length);
    var hiddenWord=(randomWord[randomNumber]);  
    // Empty arrays to store guess and answer dashes
    var answerArray = [];
    var lettersUsed = []; 
    
//    Generates a new word and displays dashes,puts the curser in the guess letter box
    function startGame(){
        
        document.getElementById("letter").focus();
        
         for (var i = 0; i < hiddenWord.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("answer").innerHTML = answerArray;
           
};

    // adds a letter and checks it agains the hidden word and restarts gam
    function addLetter(){
            document.getElementById("letter").focus();
             var inputLetter = document.getElementById("letter").value;
             

                if (hiddenWord.includes(inputLetter)){
                document.getElementById("match").innerHTML = inputLetter + " "+ "found!"

                } else{
                    document.getElementById("match").innerHTML = inputLetter + " "+ "Not found!"
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
                                if (answerArray.join("")===hiddenWord.toString()){
                                    alert("you win")
                                }
                            }
        
                                document.getElementById("answer").innerHTML = answerArray;
                        }
                            document.getElementById("letter").value="";

                            lettersUsed.push(inputLetter.toUpperCase());    
                            document.getElementById("used").innerHTML= "Letters used " + lettersUsed;     
         };
    

        //  allows the user the chace to guess the full word
    function guessFullWord(){
        var inputFullWord = document.getElementById("word").value;
        if(inputFullWord===hiddenWord){
            alert(" YOU WIN!");
            var again = confirm("Do you want to play again?");
                            if(again){
                                location.reload(); 
                            }
                            else{
                                alert("Thanks for playing");
                            }
        }else {
        alert(" Sorry not correct :(");
        var again =confirm("Do you want to play again?");
                            if(again){
                                location.reload(); 
                            }
                            else{
                                alert("Thanks for playing");
                            }
        }
        
        guess=0;
        document.getElementById("numofguess").innerHTML = guess + " guesses left";
        document.getElementById("answer").innerHTML = hiddenWord;
    }

    function showAnswer(){
        document.getElementById("answer").innerHTML = hiddenWord.toLocaleUpperCase();
        guess=0;
        document.getElementById("numofguess").innerHTML = guess + " guesses left";
    };

// document.getElementById("startgame").onclick = function() {
//     startGame();
// };
document.getElementById("addletter").onclick = function(){
   addLetter();
    
};

document.getElementById("guesstheword").onclick = function(){
    guessFullWord();
    
};
document.getElementById("showanswer").onclick = function(){
    showAnswer()
}

    
    var inputLetter = document.getElementById("used");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        addLetter();
      };





    

