let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const Reset = document.querySelector("#Reset");
const msg_para = document.getElementById("msg-para");
const comp_score = document.getElementById("comp-score");
const user_score = document.getElementById("user-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
};

const playGame = (userChoice) => {
   
    const CompChoice = genCompChoice();
    console.log("Computer Choice=", CompChoice);

    if (userChoice === CompChoice) {
        
        msg_para.style.backgroundColor = "orange";
        msg_para.textContent = "Game Draws";
    } else {
        if (
            (userChoice === "Rock" && CompChoice === "Scissors") ||
            (userChoice === "Scissors" && CompChoice === "Paper") ||
            (userChoice === "Paper" && CompChoice === "Rock")
        ) {
            console.log("User Wins");
            userScore++;
            msg_para.style.backgroundColor = "green";
            msg_para.textContent = `You win! ${userChoice} beats ${CompChoice}`;
        } else {
            
            CompScore++;
            msg_para.style.backgroundColor = "red";
            msg_para.textContent = `Computer Wins! ${CompChoice} beats ${userChoice}`;
        }
    }

    comp_score.textContent = CompScore;
    user_score.textContent = userScore;

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


Reset.addEventListener("click", () => {
    userScore = 0;
    CompScore = 0;
    comp_score.textContent = 0;
    user_score.textContent = 0;
    msg_para.style.backgroundColor = "#081b31";
    msg_para.textContent = "Game Reset! Make Your Move.";
    
});
