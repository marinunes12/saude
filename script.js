
const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Jorge Amado", "Machado de Assis", "Clarice Lispector", "José de Alencar"],
        answer: "Machado de Assis"
    }
    // Adicione mais perguntas aqui
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.createElement('div');
const optionsElement = document.createElement('div');
const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    resultElement.classList.add('hidden');
    loadQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', restartQuiz);

// Inicie o quiz
loadQuestion();