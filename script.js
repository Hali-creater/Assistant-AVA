document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const startBtn = document.getElementById('start-btn');
    const callBtn = document.getElementById('call-btn');

    const questions = [
        "May I have your full name, please?",
        "What is the best phone number and email address to reach you?",
        "What type of legal issue are you facing?",
        "Could you briefly describe what happened?",
        "What is the main outcome you are hoping for?",
        "When did this incident occur?",
        "Are there any upcoming deadlines? (e.g., a court date, a hearing, a response deadline)",
        "How time-sensitive would you say your situation is?",
        "What city and state did this occur in?",
        "Who is the other party involved?",
        "Have you already spoken to or hired another lawyer about this matter?",
        "May I have the full names of the other parties involved so I can ensure there's no conflict of interest?",
        "What is the best way to schedule a consultation: a phone call or a video meeting?"
    ];

    let currentQuestionIndex = 0;
    const userAnswers = {};

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function askQuestion() {
        if (currentQuestionIndex < questions.length) {
            addMessage(questions[currentQuestionIndex], 'bot');
        } else {
            let summary = "Thank you for your answers. Here is a summary of your responses:\n";
            for (const [question, answer] of Object.entries(userAnswers)) {
                summary += `\nQ: ${question}\nA: ${answer}\n`;
            }
            addMessage(summary, 'bot');
             feat/lawsuit-questionnaire-agent-with-notifications
            document.getElementById('submit-container').style.display = 'block';
            document.querySelector('.input-container').style.display = 'none';
        }
    }

    async function submitData() {
        // IMPORTANT FOR OWNER: Replace the URL below with your unique Formspree URL.
        const formspreeURL = "https://formspree.io/f/YOUR_UNIQUE_ID";

        try {
            const response = await fetch(formspreeURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userAnswers)
            });

            if (response.ok) {
                addMessage("Thank you, your submission has been received.", 'bot');
            } else {
                addMessage("Sorry, there was an error submitting your answers. Please try again later.", 'bot');
            }
        } catch (error) {
            addMessage("Sorry, there was a network error. Please check your connection and try again.", 'bot');
        } finally {
            document.getElementById('submit-container').style.display = 'none';

        main
        }
    }

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            userAnswers[questions[currentQuestionIndex]] = userMessage;
            currentQuestionIndex++;
            userInput.value = '';
            setTimeout(askQuestion, 500);
        }
    }

    startBtn.addEventListener('click', () => {
        addMessage("Hello! I'm Ava, your virtual legal assistant. I'm here to ask you a few questions to get started.", 'bot');
        setTimeout(askQuestion, 1000);
        startBtn.style.display = 'none';
        callBtn.style.display = 'none';
        document.querySelector('.input-container').style.display = 'flex';
    });

    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

      feat/lawsuit-questionnaire-agent-with-notifications
    document.getElementById('submit-btn').addEventListener('click', submitData);


        main
    // Hide the input container initially
    document.querySelector('.input-container').style.display = 'none';

    callBtn.addEventListener('click', () => {
        alert('Calling...');
    });
});
