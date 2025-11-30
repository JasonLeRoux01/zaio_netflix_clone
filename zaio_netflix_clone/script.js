// Minimal JavaScript just for FAQ toggles
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.questions');
    
    questions.forEach(question => {
        const toggleBtn = question.querySelector('.toggle-btn');
        const answer = question.querySelector('.answer');
        
        toggleBtn.addEventListener('click', () => {
            // Toggle current answer
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            toggleBtn.textContent = isOpen ? '+' : '×';
        });
    });

    // Video Playback Optimization
    const videos = document.querySelectorAll('video');
    
    // Intersection Observer for video playback
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(error => {
                    console.log("Video autoplay failed:", error);
                });
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        videoObserver.observe(video);
        
        // Handle video loading errors
        video.addEventListener('error', function(e) {
            console.error('Video loading error:', e);
            const errorMessage = document.createElement('p');
            errorMessage.className = 'video-error';
            errorMessage.textContent = 'Video playback unavailable';
            this.parentNode.insertBefore(errorMessage, this.nextSibling);
        });
    });
});