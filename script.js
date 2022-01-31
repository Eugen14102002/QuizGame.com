const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer=> {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button )
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
     const selectedButton = e.target
     const correct = selectedButton.dataset.correct
     setStatusClass(document.body, correct)
     Array.from(answerButtonsElement.children).forEach(button=>{
         setStatusClass(button, button.dataset.correct)
     })
     if (shuffleQuestions.length > currentQuestionIndex + 1) {
         nextButton.classList.remove('hide')
     } else {
         startButton.innerText = 'Restart'
         startButton.classList.remove('hide')
     }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
         element.classList.add('correct')
    }else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question : 'What is the most common programming language?',
        answers : [
            { text : 'Java', correct : false},
            { text : 'Python', correct : false},
            { text : 'Java Script', correct : true},
            { text : 'SQL', correct : false}
        ]
    },
    {
        question : 'What is the most wanted in 2022?',
        answers : [
            { text : 'Web Development', correct : true},
            { text : 'Backend Development', correct : true},
            { text : 'FullStack Development', correct : true},
            { text : 'Software Development', correct : true}
        ]
    },
    {
        question : 'Do you need a university to become a programmer?',
        answers : [
            { text : 'Yes', correct : false},
            { text : 'No', correct : true}
        ]
    },
    {
        question : 'How you can become best programmer?',
        answers : [
            { text : 'Watching Tutorials', correct : false},
            { text : 'Practicing as much possible', correct : true},
        ]
    },
    {
        question : 'Not everyone can become a programmer.',
        answers : [
            { text : 'True', correct : true},
            { text : 'False', correct : false}
        ]
    },
    {
        question : 'Is it important to take breaks while learning?',
        answers : [
            { text : 'Yes', correct : true},
            { text : 'No', correct : false},
        ]
    },
    {
        question : 'How many hours a night do you have to sleep if you learn something every day?',
        answers : [
            { text : "It doesn't matter", correct : false},
            { text : '7-8 hours', correct : true},
            { text : '4 hours minimum', correct : false},
            { text : '6 hours is the best', correct : false}
        ]
    },
    {
        question : 'How much does it matter to have an organized program?',
        answers : [
            { text : 'Very much', correct : true},
            { text : 'Almost nothing', correct : false},
        ]
    },
    {
        question : 'What is the most important skill you should have as a programmer?',
        answers : [
            { text : 'To be a good team member', correct : true},
            { text : 'Patience', correct : true},
            { text : 'To be cooperative', correct : true},
            { text : 'Communication', correct : true}
        ]
    }
]
