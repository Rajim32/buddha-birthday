document.addEventListener('DOMContentLoaded', () => {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeFontBtn = document.getElementById('changeFontBtn');
    const quoteDiv = document.getElementById('quote');
    const slides = document.querySelectorAll('.slide');
    const countdownDiv = document.getElementById('countdown');

    let currentSlide = 0;

    // Function to change greeting text
    changeTextBtn.addEventListener('click', () => {
        const greetings = ["Peace be with you", "Happy Buddha's Birthday!", "May you be blessed"];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        document.querySelector('.card p').textContent = randomGreeting;
    });

    // Function to change font style
    changeFontBtn.addEventListener('click', () => {
        document.body.style.fontFamily = document.body.style.fontFamily === 'Arial, sans-serif' ? 'Courier New, monospace' : 'Arial, sans-serif';
    });

    // Function to display quotes
    const quotes = [
        "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "You only lose what you cling to.",
        "The mind is everything. What you think you become."
    ];

    setInterval(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDiv.textContent = randomQuote;
    }, 5000);

    // Image slider functionality
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);

    // Countdown timer
    const eventDate = new Date('2024-05-20T00:00:00');
    setInterval(() => {
        const now = new Date();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownDiv.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});
