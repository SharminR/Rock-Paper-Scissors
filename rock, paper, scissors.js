
function getComputerChoice() {
  var computerChoice = Math.random();
  if (computerChoice <0.34){
    document.getElementById("computerChoice").innerHTML = "Rock";
    computerChoice = "Rock";
  } else if(computerChoice <=0.67){
    document.getElementById("computerChoice").innerHTML = "Paper";
    computerChoice = "Paper";
  } else {
    document.getElementById("computerChoice").innerHTML = "Scissors";
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function decideWinner(){
  var userChoice = document.getElementById("userChoice").value;
  console.log("My choice: " + (userChoice));

  var getComputerMove = getComputerChoice();
  console.log("Computer choice: " + (getComputerMove));

    if (getComputerMove == userChoice) {
        document.getElementById("result").innerHTML = "The result is a tie!";
        return;
    }

    if (userChoice == "Rock") {
        if (getComputerMove == "Scissors") {
            document.getElementById("result").innerHTML = "You win";
            return;
        }
        else {
            document.getElementById("result").innerHTML = "AI wins";
            return;
        }
    }

    if (userChoice == "Paper") {
        if (getComputerMove == "Rock") {
            document.getElementById("result").innerHTML = "You win";
            return;
        }
        else {
            document.getElementById("result").innerHTML = "AI wins";
            return;
        }
    }

    if (userChoice == "Scissors") {
        if (getComputerMove == "Paper") {
            document.getElementById("result").innerHTML = "You win";
        }
        else {
            document.getElementById("result").innerHTML = "AI wins";
        }
    }
}

function rockPaperScissors(){
  decideWinner();
}
