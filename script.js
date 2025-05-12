document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    const container = document.querySelector('.floating-hearts');
    const colors = ['#ff758c', '#ff7eb3', '#ff8e9e', '#ffb3c1', '#ffccd5'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Set styles
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.background = color;
        heart.style.left = `${left}%`;
        heart.style.opacity = opacity;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        // Add to container
        container.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
    
    // Create new hearts periodically
    setInterval(createHeart, 500);
    
    // Add styles for floating hearts
    const style = document.createElement('style');
    style.textContent = `
        .floating-heart {
            position: absolute;
            bottom: -100px;
            transform: rotate(45deg);
            border-radius: 50% 50% 0 0;
            animation: float linear infinite;
            pointer-events: none;
        }
        
        .floating-heart:before, .floating-heart:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: inherit;
            border-radius: 50%;
        }
        
        .floating-heart:before {
            top: -50%;
            left: 0;
        }
        
        .floating-heart:after {
            top: 0;
            left: -50%;
        }
        
        @keyframes float {
            0% {
                transform: rotate(45deg) translateY(0) translateX(0);
                opacity: 1;
            }
            100% {
                transform: rotate(45deg) translateY(-100vh) translateX(20px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Click to flip card
    const card = document.querySelector('.card');
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
        if (this.classList.contains('flipped')) {
            this.style.transform = 'rotateY(180deg)';
        } else {
            this.style.transform = 'rotateY(0deg)';
        }
    });
});
