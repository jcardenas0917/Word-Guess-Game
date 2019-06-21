// list of random words
var randomWord = [
  "awkward",
  "bagpipes",
  "banjo",
  "bungler",
  "croquet",
  "school",
  "pigeon",
  "winter",
  "shirt",
  "computer",
  "house",
  "wallet",
  "crypt",
  "dwarves",
  "fervid",
  "fishhook",
  "house",
  "gazebo",
  "gypsy",
  "haiku",
  "haphazard",
  "ivory",
  "jazzy",
  "jiffy",
  "jinx",
  "jukebox",
  "kayak",
  "kiosk",
  "klutz",
  "memento",
  "mystify",
  "numbskull",
  "ostracize",
  "oxygen",
  "pajama",
  "phlegm",
  "pixel",
  "polka",
  "quad",
  "quip",
  "rhythmic",
  "rogue",
  "sphinx",
  "squawk",
  "swivel",
  "today",
  "twelfth",
  "unzip",
  "waxy",
  "yacht",
  "zealous",
  "zigzag",
  "zippy",
  "zombie",
  "dramatic",
  "notebook",
  "detail",
  "graceful",
  "carriage",
  "plate",
  "fold",
  "rifle",
  "memory",
  "skillful",
  "vengeful",
  "brief",
  "young",
  "yarn",
  "certain",
  "evasive",
  "deep",
  "shiny",
  "open",
  "obedient",
  "witty",
  "shiver",
  "observation",
  "bird",
  "demonic",
  "answer",
  "aware",
  "comparison",
  "tedious",
  "zealous",
  "greasy",
  "acoustic",
  "cars",
  "sincere",
  "valuable",
  "cave",
  "curl",
  "mine",
  "plain",
  "voiceless",
  "defective",
  "cable",
  "mend",
  "crabby",
  "sturdy",
  "knot",
  "use",
  "scissors",
  "tow"
];
var randomNumber;
var hiddenWord;
// number of guesses allowed
var guess = 10;
// number of wins set to 0
var wins = 0;
// Empty arrays to store guess and answer dashes
var answerArray = [];
// Empty array will store users guesses
var lettersUsed = [];
//array of allowed keys to press
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wSound = document.getElementById("win");

//  Start game, generates a new word and displays dashes
function startGame() {
  // generates a random word form the randon word array
  document.getElementById("message").innerHTML = " ";
  randomNumber = Math.floor(Math.random(randomWord) * randomWord.length);
  hiddenWord = randomWord[randomNumber];
  answerArray = [""]
  for (var i = 0; i < hiddenWord.length; i++) {
    answerArray[i] = "_" ;
  }
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  guess = 10;
  document.getElementById("numofguess").innerHTML = guess + " guesses left";
  lettersUsed = [];
}
//Checks for invalid key characters pressed
function lettersAllowed(allowed) {
  // Iterate through alphabet
  for (var i = 0; i < alphabet.length; i++) {
    // Checks if input letter is contained in alphabet
    if (alphabet[i] === allowed) {
      console.log(allowed);
      return false;
    }
  }

  return true;
}

//Checks for duplicate guesses and keeps guesses the same
function checkDuplicates(letter, letterArray) {
  // Iterate through lettersUsed
  for (var i = 0; i < letterArray.length; i++) {
    // Checks if letter is contained in lettersUsed
    if (letterArray[i].toLocaleUpperCase() === letter.toLocaleUpperCase()) {
      return true;
    }
  }

  return false;
}

//event function starts checking for matching letters
document.onkeyup = function(event) {
  var inputLetter = event.key;
  //clears you win
  document.getElementById("winner").innerHTML = " ";
  //clear errors
  document.getElementById("message").innerHTML = " ";
  

  //iterate through hidden word to find matches and add them to the answer replacing the dashes.
  for (var j = 0; j < hiddenWord.length; j++) {
    if (hiddenWord[j] === inputLetter) {
      answerArray[j] = inputLetter.toUpperCase();
    }

    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }

  //check if pressed key is valid letter character by calling lettersAllowed function
  if (lettersAllowed(inputLetter)) {
    document.getElementById("message").innerHTML = "Invalid key pressed";
  } else {
    //Check if inputLetter is in lettersUsed by calling the checkDuplicates and displays error
    if (checkDuplicates(inputLetter, lettersUsed)) {
        document.getElementById("message").innerHTML =
        inputLetter.toUpperCase() + " already used";
    } else {
      //if guess matches the hidden word letter found message
      if (hiddenWord.includes(inputLetter)) {
        document.getElementById("match").innerHTML =
          inputLetter.toUpperCase() + " " + "found!";
      } else {
        //if guess does not match the hidden word letter not found message and guess down by 1
        document.getElementById("match").innerHTML =
          inputLetter.toUpperCase() + " " + "Not found!";
        guess--;
        document.getElementById("numofguess").innerHTML =
          guess + " guesses left";

        //If guesses reaches 0 then the game is over and prompts for a new game
        if (guess === 0) {
          alert("GAME OVER the word was " + hiddenWord.toLocaleUpperCase());
          var again = confirm("Do you want to play again?");
          if (again) {
            location.reload();
          } else {
            alert("Thanks for playing");
            document.getElementById(
              "answer"
            ).innerHTML = hiddenWord.toLocaleUpperCase();
          }
        }
      }
      //Creates an array of letters used and displays them.
      lettersUsed.push(inputLetter.toUpperCase());
      document.getElementById("used").innerHTML = "Letters used " + lettersUsed;


      //End of Game if the answer matches the hidden user wins the game
      if (answerArray.join("") === hiddenWord.toLocaleUpperCase()) {
        wins++;
        document.getElementById("numofwins").innerHTML = "Win Streak " + wins;
        document.getElementById("winner").innerHTML = "YOU WIN";
        document.getElementById("used").innerHTML = " ";
        document.getElementById("match").innerHTML = " ";
        lettersUsed = [];
        winSound();
        time();
      }
    }
  }
};

//If the user gives up this is the option to quit the game
function showAnswer() {
  var quit = confirm("Are you sure you want to quit?");
  if (quit) {
    document.getElementById(
      "answer"
    ).innerHTML = hiddenWord.toLocaleUpperCase();
    guess = 0;
    wins = 0;
    document.getElementById("numofguess").innerHTML = guess + " guesses left";
    document.getElementById("numofwins").innerHTML = "Wins " + wins;
  }
}
//starts a new game after pressing new game
function newGame() {
    var game = confirm("Are you sure you want to start a new game?  You will lose your current score");
    if (game) {
        location.reload();
    }
  }

//sets a timer for a new game to start
  function time(){
     document.getElementById("message").innerHTML = "New Game starting soon...";
      setTimeout(function(){
          startGame()
      },3000)
  }

  //play winning sound
  function winSound(){
       wSound.play();    
  }
  
  //call function showAnswer
document.getElementById("showanswer").onclick = function() {
  showAnswer();
};
    //call function newGame
document.getElementById("reload").onclick = function() {
    newGame();
  };
  