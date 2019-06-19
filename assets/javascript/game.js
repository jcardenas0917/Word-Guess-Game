
var randomWord = ['awkward','bagpipes','banjo','bungler','croquet','crypt','dwarves','fervid','fishhook','house','gazebo','gypsy','haiku','haphazard','hyphen',
    'ivory','jazzy','jiffy','jinx','jukebox', 'kayak','kiosk','klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm','pixel',
    'polka','quad','quip','rhythmic','rogue','sphinx','squawk','swivel','toady','twelfth','unzip','waxy','wildebeest','yacht','zealous','zigzag','zippy','zombie',
    'dramatic', 'notebook','detail','graceful','carriage','plate','fold','rifle','memory','skillful','vengeful','brief','young','yarn','certain','evasive','deep',
    'shiny','lackadaisical','open','obedient','witty','shiver','observation','bird','demonic','answer','aware','comparison','tedious','zealous','greasy','acoustic',
    'cars','sincere','valuable','cave','curl','mine','plain','voiceless','defective','cable','mend','crabby','sturdy','knot','use','scissors','tow'];
    var guess=10;
    var randomNumber = Math.floor(Math.random(randomWord)*randomWord.length);
    var hiddenWord=(randomWord[randomNumber]);  
    var answerArray = [];
    var lettersUsed = []; 
    
    document.getElementById("letter").focus();
   
    function startGame(){
        document.getElementById("letter").focus();
        
         for (var i = 0; i < hiddenWord.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("answer").innerHTML = answerArray;
           
};


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
                        }
                    }
             var remainingLetters = hiddenWord.length ;
                     for (var j = 0; j < remainingLetters; j++) {
                         if (hiddenWord[j] === inputLetter) {
                                answerArray[j] = inputLetter;
                                remainingLetters--;
                                }
                                document.getElementById("answer").innerHTML = answerArray;
                             }
                            document.getElementById("letter").value="";

                            lettersUsed.push(inputLetter);    
                            document.getElementById("used").innerHTML= "Letters used " + lettersUsed;        
         };
    


    function guessFullWord(){
        var inputFullWord = document.getElementById("word").value;
        if(inputFullWord===hiddenWord){
            alert(" YOU WIN!");
        }else {
        alert(" Sorry not correct :(");
        }
        guess=0;
        document.getElementById("numofguess").innerHTML = guess + " guesses left";
        document.getElementById("answer").innerHTML = hiddenWord;
    }

    function showAnswer(){
        document.getElementById("answer").innerHTML = hiddenWord;
        guess=0;
        document.getElementById("numofguess").innerHTML = guess + " guesses left";
    };


   

document.getElementById("startgame").onclick = function() {
    startGame();
};
document.getElementById("addletter").onclick = function(){
   addLetter();
    
};

document.getElementById("guesstheword").onclick = function(){
    guessFullWord();
    
};
document.getElementById("showanswer").onclick = function(){
    showAnswer()
}





    

