const quizForm = document.getElementById('quiz-form');
const feedbackElement = document.getElementById('feedback');

const correctAnswers = {
    q1: 'Paris',
    q2: 'Jupiter',
    q3: 'Leonardo da Vinci'
};

quizForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let correctCount = 0;

    for (const question in correctAnswers) {
        const selectedAnswer = quizForm[question].value;
        if (selectedAnswer === correctAnswers[question]) {
            correctCount++;
        }
    }

    if (correctCount === 3) {
        feedbackElement.textContent = 'Great job! You got all the questions correct!';
        feedbackElement.style.color = '#85ad85';
    } else {
        feedbackElement.textContent = `You got ${correctCount} out of 3 correct. Try again!`;
        feedbackElement.style.color = '#5c192a';
    }

    quizForm.reset();
});
