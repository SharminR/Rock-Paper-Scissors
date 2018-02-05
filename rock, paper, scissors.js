var userChoice = document.getElementById("userChoice").value;
var computerChoice = Math.random();

function AiChoice () {
if (computerChoice <0.34){
    document.getElementById("computerChoice").innerHTML = "rock";
    computerChoice = "rock";
} else if(computerChoice <=0.67){
    document.getElementById("computerChoice").innerHTML = "paper";
    computerChoice = "paper";
} else {
    document.getElementById("computerChoice").innerHTML = "scissors";
    computerChoice = "scissors";
}
return computerChoice;
}

function compare(choice1,choice2){
    if(choice1 == choice2){
        return "The result is a tie!";
    }
    if(choice1 == "rock"){
        if(choice2 == "scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1 == "paper"){
        if(choice2 == "rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1 == "scissors"){
        if(choice2 == "rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
}
console.log(compare(userChoice,computerChoice));

document.getElementById('result').innerHTML = userChoice, computerChoice;
