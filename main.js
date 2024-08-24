const rollDice1 = document.querySelector(".rollDice1");
const rollDice2 = document.querySelector("#rollDice2");
const hold = document.querySelector(".hold");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const newGame = document.querySelector(".newGame")

newGame.addEventListener("click",()=>{
    location.reload();
})

const img1 = document.querySelector(".one");
const img2 = document.querySelector(".two");
const img3 = document.querySelector(".three");
const img4 = document.querySelector(".four");
const img5 = document.querySelector(".five");
const img6 = document.querySelector(".six");

const leftTotalScore = document.querySelector(".tScore");
const leftCurrentScore = document.querySelector(".cScore");
const welcomeLeft = document.querySelector(".welcomeLeft");

const rightTotalScore = document.querySelector("#tScore");
const rightCurrentScore = document.querySelector("#cScore");
const welcomeright = document.querySelector(".welcomeRight");

let currentPlayer = "first";

function firstPlayer() {
    rollDice1.addEventListener("click", handleFirstPlayer);
    rollDice2.removeEventListener("click", handleSecondPlayer); 
}

function secondPlayer() {
    rollDice2.addEventListener("click", handleSecondPlayer);
    rollDice1.removeEventListener("click", handleFirstPlayer); 
}

function handleFirstPlayer() {
    
    hideAllImages();


    left.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    right.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    
    const randomNumber = Math.floor(Math.random() * 6) + 1;


    if (randomNumber == 1) {
        img1.style.display = "block";
        leftCurrentScore.innerHTML = 0;
        switchPlayer();
    } else {
        leftCurrentScore.innerHTML = parseInt(leftCurrentScore.innerHTML) + randomNumber;
        displayImage(randomNumber);
    }
}

function handleSecondPlayer() {

    hideAllImages();


    right.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";


    const randomNumber = Math.floor(Math.random() * 6) + 1;


    if (randomNumber == 1) {
        img1.style.display = "block";
        rightCurrentScore.innerHTML = 0;
        switchPlayer();
    } else {
        rightCurrentScore.innerHTML = parseInt(rightCurrentScore.innerHTML) + randomNumber;
        displayImage(randomNumber);
    }
}

hold.addEventListener("click", () => {
    if (currentPlayer === "first") {
        leftTotalScore.innerHTML = parseInt(leftTotalScore.innerHTML) + parseInt(leftCurrentScore.innerHTML);
        leftCurrentScore.innerHTML = 0;
        if (parseInt(leftTotalScore.innerHTML) >= 100) {
            left.style.background="linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)";
            welcomeLeft.style.display = "block";
            alert("First player wins!");
            resetGame();
        } else {
            switchPlayer();
        }
    } else {
        rightTotalScore.innerHTML = parseInt(rightTotalScore.innerHTML) + parseInt(rightCurrentScore.innerHTML);
        rightCurrentScore.innerHTML = 0;
        if (parseInt(rightTotalScore.innerHTML) >= 100) {
            right.style.background="linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)";
            welcomeright.style.display = "block";
            alert("Second player wins!");
            resetGame();
        } else {
            switchPlayer();
        }
    }
});

function switchPlayer() {
    if (currentPlayer === "first") {
        currentPlayer = "second";
        secondPlayer();
    } else {
        currentPlayer = "first";
        firstPlayer();
    }
}

function displayImage(randomNumber) {
    hideAllImages();
    switch (randomNumber) {
        case 1:
            img1.style.display = "block";
            break;
        case 2:
            img2.style.display = "block";
            break;
        case 3:
            img3.style.display = "block";
            break;
        case 4:
            img4.style.display = "block";
            break;
        case 5:
            img5.style.display = "block";
            break;
        case 6:
            img6.style.display = "block";
            break;
    }
}

function hideAllImages() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
}

function resetGame() {
    leftTotalScore.innerHTML = 0;
    rightTotalScore.innerHTML = 0;
    leftCurrentScore.innerHTML = 0;
    rightCurrentScore.innerHTML = 0;
    hideAllImages();
    currentPlayer = "first";
    firstPlayer();
}

firstPlayer(); 
