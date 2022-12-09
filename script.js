const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

let questionNumber = 0;
let points = 0;
let container = document.getElementById("container");


function renderQuestion() {
    container.innerHTML = "";
    let question =  questions[questionNumber];
    let qn = document.createElement("div");
    qn.classList.add("question");
    
    let h2 = document.createElement("h2");
    h2.innerText = question.question;
    qn.appendChild(h2);
    let category = document.createElement("span");
    category.innerText = "Category: " + question.category;
    qn.appendChild(category);
    let difficulty = document.createElement("span");
    difficulty.innerText = "Difficulty: " + question.difficulty;
    qn.appendChild(difficulty);

    let answers = [question.correct_answer].concat(question.incorrect_answers); //shuffle here / differentiate between question types
    for (let i = 0; i<answers.length;i++) {
        let radio = generateRadioButton(answers[i], i);
        qn.appendChild(radio);
    }

    container.appendChild(qn);
}

function generateRadioButton(text, num) {
    let radio = document.createElement("div");
    radio.innerHTML = `<input type="radio" id="${num}" value="${text}" name="q${questionNumber}">
                     <label for="${num}">${text}</label>`;
    return radio;
}

function checkAnswer() {
    let checked = document.querySelector("input[type='radio']:checked");
    if (checked) {
        let answer = checked.value;
        if (answer === questions[questionNumber].correct_answer) {
            checked.parentElement.classList.add("correct");
            points++;
        } else {
            checked.parentElement.classList.add("wrong");
        }
    }
}

function chooseAnswer() { //is this needed?

}

function shuffleAnswers() { //ignore for now

}

function restart() {
    questionNumber = 0;
    points = 0;
    renderQuestion();
}

function nextQuestion() { //will do same thing as renderQuestion maybe?
    checkAnswer();
    questionNumber++;
    if (questionNumber < questions.length) {
        renderQuestion();
    } else {
        renderResult();
    }
}

function renderResult() {
    container.innerHTML = "";
    let res = document.createElement("div");
    res.classList.add("question");

    let h2 = document.createElement("h2");
    h2.innerText = "Thank you for playing!";
    res.appendChild(h2);

    let evaluation = document.createElement("div")
    evaluation.innerHTML = `<p>You did great! You scored ${points} out of a total of ${questions.length} points!</p>`
    res.appendChild(evaluation);

    container.appendChild(res);
}

window.onload = function () {
    renderQuestion();
    // HINTS
    // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
    // For each question, create a container for wrapping it; then create a radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // with, as options, both the correct answer and the incorrect ones
    // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
    //
    // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
    // Display the first question with the text and the radio buttons
    // when the user selects an answer, pick the next question from the array and replace the old one with it
    // saving the user's choice in a variable
  };

  // How to calculate the result? You can do it in 2 ways:
  // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
  // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer