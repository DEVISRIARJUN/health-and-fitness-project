 document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Tab functionality for workout plans
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all workout plans
            document.querySelectorAll('.workout-plan').forEach(plan => {
                plan.classList.remove('active');
            });
            
            // Show selected workout plan
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Health tips accordion
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Exercise demo modal
    const demoBtns = document.querySelectorAll('.view-demo');
    const modal = document.getElementById('demo-modal');
    const closeModal = document.querySelector('.close-modal');
    
    demoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const exercise = this.getAttribute('data-exercise');
            showDemo(exercise);
            modal.style.display = 'block';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    function showDemo(exercise) {
        const title = document.getElementById('modal-title');
        const description = document.getElementById('modal-description');
        const video = document.getElementById('modal-video');
        
        // In a real app, you would fetch this data from a database
        const exercises = {
            pushup: {
                title: 'Perfect Push-up Form',
                description: 'Start in a high plank position with hands slightly wider than shoulder-width. Keep your body straight from head to heels. Lower your body until your chest nearly touches the floor, keeping elbows at about 45 degrees. Push back up to the starting position.',
                video: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/IODxDxX7oi4" frameborder="0" allowfullscreen></iframe>'
            },
            squat: {
                title: 'Proper Squat Technique',
                description: 'Stand with feet shoulder-width apart. Keep your chest up and back straight as you push your hips back and bend your knees to lower down. Go as low as you can while keeping your heels on the ground and knees tracking over toes. Drive through your heels to return to standing.',
                video: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/aclHkVaku9U" frameborder="0" allowfullscreen></iframe>'
            },
            plank: {
                title: 'Plank Variations',
                description: 'Start in a forearm plank position with elbows under shoulders and body straight from head to heels. Hold this position for time. For variation, try side planks, plank with leg lifts, or plank to push-up transitions.',
                video: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/pSHjTRCQxIw" frameborder="0" allowfullscreen></iframe>'
            }
        };
        
        title.textContent = exercises[exercise].title;
        description.textContent = exercises[exercise].description;
        video.innerHTML = exercises[exercise].video;
    }
    
    // Random health tip generator
    const tipText = document.querySelector('.tip-text');
    const newTipBtn = document.getElementById('new-tip-btn');
    
    const healthTips = [
        "Start your day with a glass of warm water with lemon to kickstart your metabolism.",
        "Aim for at least 30 minutes of moderate exercise most days of the week.",
        "Include a variety of colorful vegetables in your meals for a range of nutrients.",
        "Practice mindful eating by chewing slowly and savoring each bite.",
        "Get sunlight exposure in the morning to regulate your circadian rhythm.",
        "Take short movement breaks every hour if you sit for long periods.",
        "Prioritize sleep as much as diet and exercise for overall health.",
        "Stay hydrated by drinking water throughout the day, not just when thirsty.",
        "Incorporate strength training 2-3 times per week to maintain muscle mass.",
        "Practice deep breathing exercises to reduce stress and improve focus."
    ];
    
    newTipBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * healthTips.length);
        tipText.textContent = `"${healthTips[randomIndex]}"`;
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
});