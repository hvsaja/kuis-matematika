let score = 0;       
let timeLeft = 60;  
let timer;          
let correctAnswer;  
function generateQuestion() {   
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operatorIndex = Math.floor(Math.random() * 3);
    switch (operatorIndex) {
     case 0:
    correctAnswer = num1 + num2;
     break;
     case 1:
    correctAnswer = num1 - num2;
     break;
     case 2:
    correctAnswer = num1 * num2;
      break;
    }
const operator = ['+', '-', '*'][operatorIndex];
const expression = `${num1} ${operator} ${num2}`;
document.getElementById("question").textContent = expression;
}
function startTimer() {
    timer = setInterval(function () {
       timeLeft--;
       document.getElementById("time").textContent = timeLeft;
       if (timeLeft === 0) {
            clearInterval(timer);   
            document.getElementById("result").textContent = `Waktunya habis! skor akhir adalah ${score}`;
            document.getElementById("input").disabled = true; 
            document.getElementById("submit-button").disabled = true;
            var audio = document.getElementById('background-music');
            audio.pause();       
    }

    }, 1000); 
}
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("input").value);
    if (userAnswer === correctAnswer) {
        score++; 
        document.getElementById("score").textContent = score; 
        document.getElementById("result").style.color = "Green";
        document.getElementById("result").textContent = "Benar!";
    } else {
        document.getElementById("result").style.color = "Red";
        document.getElementById("result").textContent = `Salah. Jawaban yang benar adalah ${correctAnswer}. Coba lagi!`;
    }
    document.getElementById("input").value = "";
    generateQuestion();
}
function startGame() {
    score = 0;
    timeLeft = 60;
    document.getElementById("input").disabled = false;
    document.getElementById("input").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    var audio = document.getElementById('background-music');
      audio.play();
       var thirtySeconds = 30; 
      display = document.getElementById('time');
      startTimer(thirtySeconds, display); 
    generateQuestion();
}


startGame();