var userChoice = document.getElementById("userChoice").value;
console.log(userChoice);

function AiChoice () {
  var computerChoice = Math.random();
  if (computerChoice <0.34){
    document.getElementById("computerChoice").innerHTML = "Rock";
    //computerChoice = "Rock";
  } else if(computerChoice <=0.67){
    document.getElementById("computerChoice").innerHTML = "Paper";
    //computerChoice = "Paper";
  } else {
    document.getElementById("computerChoice").innerHTML = "Scissors";
    //computerChoice = "Scissors";
  }
  //return computerChoice;
}

function compare(){
  var AiMove = AiChoice();
  console.log(AiMove);

    if (AiMove == userChoice) {
        document.getElementById("result").innerHTML = "The result is a tie!";
    }
    
    while (userChoice == "Rock") {
        if (AiMove == "Scissors") {
            document.getElementById("result").innerHTML = "You win";
        }
        else {
            document.getElementById("result").innerHTML = "AI wins";
        }
    }

    while (userChoice == "Paper") {
        if (AiMove == "Scissors") {
            document.getElementById("result").innerHTML = "You win";
        }
        else {
            document.getElementById("result").innerHTML = "AI wins";
        }
    }

    while (userChoice == "Scissors") {
        if (AiMove == "Paper") {
            document.getElementById("result").innerHTML = "You win";
        }
        else {
            document.getElementById("result").innerHTML = "AI wins";
        }
    }
}
