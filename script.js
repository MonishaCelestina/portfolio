let achievementIndex = 0;

function showAchievementSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');

    const maxIndex = slides.length - 3; // Adjust for 3 achievements per view
    if (index > maxIndex) achievementIndex = maxIndex;
    if (index < 0) achievementIndex = 0;

    const offset = -achievementIndex * (100 / 3);
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (achievementIndex < document.querySelectorAll('.slide').length - 3) {
        achievementIndex++;
        showAchievementSlide(achievementIndex);
    }
}

function prevSlide() {
    if (achievementIndex > 0) {
        achievementIndex--;
        showAchievementSlide(achievementIndex);
    }
}



let projectIndex = 0;

function showProjectSlide(index) {
    const slides = document.querySelectorAll('.project-slide');
    const slider = document.querySelector('.project-slider');

    if (index >= slides.length - 2) projectIndex = 0; // Reset to the start if at the end
    if (index < 0) projectIndex = slides.length - 3; // Prevent scrolling beyond the start

    const offset = -projectIndex * (100 / 3);
    slider.style.transform = `translateX(${offset}%)`;
}

function nextProjectSlide() {
    projectIndex++;
    showProjectSlide(projectIndex);
}

function prevProjectSlide() {
    projectIndex--;
    showProjectSlide(projectIndex);
}

// Auto-slide every 4 seconds
setInterval(nextProjectSlide, 4000);
