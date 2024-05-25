let attempts = 0;
const maxAttempts = 3;
let timer;
let timeLeft = 60;

document.getElementById('start-quiz-btn').addEventListener('click', function() {
    if (attempts < maxAttempts) {
        document.getElementById('start-quiz-btn').style.display = 'none';
        document.getElementById('quiz-popup').style.display = 'block';

        let countdown = 3;
        const countdownInterval = setInterval(function() {
            document.getElementById('countdown').innerText = countdown;
            if (countdown === 0) {
                clearInterval(countdownInterval);
                startQuiz();
            }
            countdown--;
        }, 1000);
    } else {
        alert('Vous avez atteint le nombre maximum de tentatives.');
    }
});

function startQuiz() {
    document.getElementById('quiz-popup').style.display = 'none';
    document.getElementById('quiz-wrapper').style.display = 'block';
    document.getElementById('quiz-timer').style.display = 'block';

    timeLeft = 60;
    document.getElementById('time-left').innerText = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('time-left').innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    submitQuiz();
});

function submitQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-wrapper').style.display = 'none';
    document.getElementById('quiz-timer').style.display = 'none';
    attempts++;

    const answers = {
        question1: '10 mai 1992',
        question2: 'Batterie faible',
        question3: '2015',
        question4: ['Macarena', 'Signaler'],
        question5: 'Identité',
        question6: 5
    };

    let score = 0;

    // Récupérer les réponses du formulaire
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    if (formData.get('question1') === answers.question1) {
        score++;
    }

    if (formData.get('question2') === answers.question2) {
        score++;
    }

    if (formData.get('question3') === answers.question3) {
        score++;
    }

    const question4Answers = formData.getAll('question4');
    if (JSON.stringify(question4Answers.sort()) === JSON.stringify(answers.question4.sort())) {
        score++;
    }

    if (formData.get('question5') === answers.question5) {
        score++;
    }

    if (parseInt(formData.get('question6')) === answers.question6) {
        score++;
    }

    document.getElementById('quiz-result').innerText = `Votre score est de ${score}/6.`;

    if (attempts < maxAttempts) {
        document.getElementById('start-quiz-btn').style.display = 'block';
    } else {
        document.getElementById('quiz-result').innerText += ' Vous avez atteint le nombre maximum de tentatives.';
    }
}
