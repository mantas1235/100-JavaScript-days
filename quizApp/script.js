"use strict"

//quiz Class

class Quiz {
    constructor(questions)  {
        this.score = 0
        this.questions = questions
        this.questionIndex = 0
    }

getQuestonIndex() {
    return this.questions[this.questionIndex]
}

guess(answer) {
    if (this.getQuestonIndex().isCorrectAnswer(answer)) {
        this.score++
    }

    this.questionIndex++
}


isEnded() {
    return this.questionIndex === this.questions.length
}

}



//CREATE A QUESTION CLASS

class Question {
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }

isCorrectAnswer(choice) {
    return this.answer=== choice
    }
}

//DISPLAY QUESTION

function displayQuestion() {
    if (quiz.isEnded()) {
        showScores()
    }

else {
    //show next question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestonIndex().text;

    //show options

let choices = quiz.getQuestonIndex().choices
for (let i = 0; i < choices.length; i++) {
    const choiceElement = document.getElementById("choice" + i);
    choiceElement.innerHTML = choices[i];
    guess("btn" + i, choices[i]);
}

showProgress()

}

};


//GUESS FUNCTION 

function guess(id, guess) {
    let button = document.getElementById(id)
    button.onclick = function () {
        quiz.guess(guess)
        displayQuestion()
    }
}


//SHOW QUIZ PROGRESS

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1
    let progressElement = document.getElementById("progress")
    progressElement.innerHTML = `
    question ${currentQuestionNumber} of ${quiz.questions.length}`
}



//SHOW SCORE

function showScores() {
    let quizEndHTML = 
    `
    <h1> QUIZ Completed</h1>
    <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
<div class= "quiz-repeat">
<a href ="index.html">Take Quiz Again</a>
</div>
    `
let quizElement = document.getElementById("quiz")
quizElement.innerHTML = quizEndHTML;

}

//CREATE QUIZ QUESTION

let questions = [
    new Question(
        "FIRST QUESTION YOUR NAME?", ["Mantas", "Tomas", "HAris", "NoOne"], "Mantas"   
    ),
    new Question(
        "FIRST QUESTION YOUR NAME?", ["Mantas", "Tomas", "HAris", "NoOne"], "Mantas" 
    ),
    new Question(
        "FIRST QUESTION YOUR NAME?", ["Mantas", "Tomas", "HAris", "NoOne"], "Mantas"  
    ), 
    new Question(
        "FIRST QUESTION YOUR NAME?", ["Mantas", "Tomas", "HAris", "NoOne"], "Mantas"  
    ),
    new Question(
        "FIRST QUESTION YOUR NAME?", ["Mantas", "Tomas", "HAris", "NoOne"], "Mantas"  
    )
];

let quiz = new Quiz(questions)

//DISPLAY QUESTION

displayQuestion()


// ADD TIMEOUT 


let time = 1;
let quizTimeInMinutes = time*60 *60;
let quizTime = quizTimeInMinutes / 60


let counting = document.getElementById("countdown")

function startCoundown() {
    let quizTimer = setInterval(function() {
        if (quizTime<=0) {
            clearInterval(quizTimer)
            showScores()
        } else {
            quizTime--
            let sec = Math.floor(quizTime % 60)
            let min = Math.floor(quizTime / 60) % 60
            counting.innerHTML = `Time ${min} : ${sec}`;
        }
    }, 1000)
}


startCoundown()