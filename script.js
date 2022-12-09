/* 

 ----- THE POSSIBLE QUIZZES ----- 

 */
const sciencequiz = [
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

const doomquiz = [
    {
        category: "DOOM",
        type: "multiple",
        difficulty: "medium",
        question: "What is MF Doom's real name?",
        correct_answer: "Daniel Dumile",
        incorrect_answers: ["Dwayne Michael Carter Jr.", "Shawn Carter", "Otis Jackson Jr."],
      },
      {
        category: "DOOM",
        type: "boolean",
        difficulty: "easy",
        question: "MF Doom is still alive.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "DOOM",
        type: "multiple",
        difficulty: "medium",
        question: "When did MF Doom release his first solo studio album 'Operation Doomsday'",
        correct_answer: "1999",
        incorrect_answers: ["1997", "1998", "2000"],
      },
      {
        category: "DOOM",
        type: "multiple",
        difficulty: "easy",
        question: "With whom did MF Doom collaborate on the 2004 LP 'Madvillainy'?",
        correct_answer: "Madlib",
        incorrect_answers: ["Bishop Nehru", "Czarface", "Danny Brown"],
      },
      {
        category: "DOOM",
        type: "multiple",
        difficulty: "medium",
        question: "Which of these is NOT a pseudonym of MF Doom?",
        correct_answer: "Quasimoto",
        incorrect_answers: ["Viktor Vaughn", "Zev Love X", "King Geedorah"],
      },
      {
        category: "DOOM",
        type: "boolean",
        difficulty: "easy",
        question: "Has MF Doom ever featured on a Gorillaz album?",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "DOOM",
        type: "multiple",
        difficulty: "medium",
        question: "What was the name of the group MF Doom formed with his brother in 1988",
        correct_answer: "KMD",
        incorrect_answers: ["RZA", "CREAM", "WTF"],
      },
      {
        category: "DOOM",
        type: "multiple",
        difficulty: "hard",
        question: "What was the title of their only commercially released album?",
        correct_answer: "Mr. Hood",
        incorrect_answers: ["Young, Broke & Infamous", "Reasonabable Doubt", "Playtime is over"],
      },
      {
        category: "DOOM",
        type: "multiple",
        difficulty: "hard",
        question: "MF Doom's signature metal mask is based on a prop of which movie?",
        correct_answer: "Gladiator",
        incorrect_answers: ["300", "Troy", "Spartacus"],
      },
];

/* 

 ----- GLOBAL VARIABLES ----- 

 */
let questions;
let questionNumber = 0;
let points = 0;
let container = document.getElementById("container");

/* 

 ----- BUTTON FUNCTIONALITY ----- 

 */
function restart() {
    questionNumber = 0;
    points = 0;
    document.getElementById("buttonbar").innerHTML = "";
    renderSetup();
}

function nextQuestion() { 
    let checked = document.querySelector("input[type='radio']:checked");
    if (checked) {
        questionNumber++;
        if (questionNumber < questions.length) {
            renderQuestion();
        } else {
            renderResult();
        }
    }
}

function newQuiz() {
    let quizname = document.querySelector("select").value;
    switch(quizname) {
        case "science":
            questions = sciencequiz;
            break;
        case "doom":
            questions = doomquiz;
            break;
        default: // Idk, this won't really happen here but wanted to have something at least
            questions = sciencequiz;
    }
    renderButtons(); // This is a problem if you somehow manage to make an invalid choice
    renderQuestion();
}

/* 

 ----- RENDER FUNCTIONS ----- 
 
 */
function renderSetup() {
    container.innerHTML = "";
    let bbar = document.getElementById("buttonbar");
    bbar.innerHTML = "";
    let stp = document.createElement("div");
    stp.classList.add("setup");
    
    let h2 = document.createElement("h2");
    h2.innerText = "What do you want play?";
    stp.appendChild(h2);
    let hr = document.createElement("hr");
    stp.appendChild(hr);
    
    let select = document.createElement("div");
    select.innerHTML = `<label for="quizzes">Select a quiz:</label>
    <select id="quizzes" name="quizzes">
    <option value="science">Science Quiz</option>
    <option value="doom">MF DOOM</option>
    </select>
    <input type="button" value="Let's go!" onclick="newQuiz()">`;
    stp.appendChild(select);
    container.appendChild(stp);
}


function renderButtons() {
    let buttonbar = document.getElementById("buttonbar");
    buttonbar.innerHTML = `<input type="button" value="Restart!" onclick="restart()" />
                           <input type="button" value="Next Question!" onclick="nextQuestion()" />`;
}

function renderQuestion() {
    container.innerHTML = "";
    let question =  questions[questionNumber];
    console.log(question);
    let qn = document.createElement("div");
    qn.classList.add("question");
    
    let h2 = document.createElement("h2");
    h2.innerText = question.question;
    qn.appendChild(h2);
    let category = document.createElement("span");
    category.innerText = "Category: " + question.category;
    qn.appendChild(category);
    let difficulty = document.createElement("span");
    difficulty.classList.add("difficulty");
    difficulty.innerText = "Difficulty: " + question.difficulty;
    qn.appendChild(difficulty);
    let hr = document.createElement("hr");
    qn.appendChild(hr);
    
    // Do different things depending on question type
    if (question.type === "multiple") {
        let answers = shuffleArray([question.correct_answer].concat(question.incorrect_answers)); // TODO: find better way to do this
        renderMultipleQuestion(qn, answers);
    } else if (question.type === "boolean") {
        renderBoolQuestion(qn);
    }
    
    container.appendChild(qn);
    let radios = document.querySelectorAll("input[type='radio'");
    for (r of radios) {
        r.addEventListener("change", checkAnswer)
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
    
    let bbar = document.getElementById("buttonbar"); //TODO: Find better solution
    bbar.removeChild(bbar.lastChild);
    container.appendChild(res);
}

/* 

 ----- QUESTION RENDERING SUBROUTINES ----- 
 
 */
function renderMultipleQuestion(qn, answers) {
    for (let i = 0; i < answers.length; i++) {
        let radio = generateRadioButton(answers[i], i);
        qn.appendChild(radio);
    }
}

function renderBoolQuestion(qn) {
    qn.appendChild(generateRadioButton("True", 0));
    qn.appendChild(generateRadioButton("False", 1));
}

function generateRadioButton(text, num) {
    let radio = document.createElement("div");
    radio.innerHTML = `<input type="radio" id="${num}" value="${text}" name="q${questionNumber}">
                     <label for="${num}">${text}</label>`;
    return radio;
}

/* 

 ----- CHECKER FUNCTION ----- 
 
 */
function checkAnswer(event) { // TODO rethink this whole thing
    let radios = document.querySelectorAll("input[type='radio']:not(:checked)");
    let choice = event.target
    let answer = choice.value;
    let corrAnswer = questions[questionNumber].correct_answer;
    event.target.disabled = true;
    if (answer === corrAnswer) {
        choice.parentElement.classList.add("correct");
        points++;
    } else {
        choice.parentElement.classList.add("wrong");
    }

    for (let r of radios) {
        r.disabled = true;
        if (r.value === corrAnswer) {
            r.parentElement.classList.add("hint");
        }
    }
}

/* 

 ----- HELPER ----- 
 
 */
function shuffleArray(arr) { // i reused this from yesterday
    for (let i=0;i<arr.length-1; i++) {
        let j = Math.floor(Math.random() * (arr.length - i)) + i;
        let swp = arr[i];
        arr[i] = arr[j];
        arr[j] = swp;
    }

    return arr;
}

/* 

 ----- ON LOAD ----- 
 
 */
window.onload = function () {
    renderSetup(); //TODO let player have choice of quiz, i.e. implement renderSetup() somehow
};