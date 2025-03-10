document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav-home')?.addEventListener('click', () => showSlide('home-slide'));
    document.getElementById('nav-about')?.addEventListener('click', () => showSlide('about-slide'));
    document.getElementById('nav-projects')?.addEventListener('click', () => showSlide('projects-slide'));
    document.getElementById('nav-wip')?.addEventListener('click', () => showSlide('wip-slide'));

    function showSlide(slideId) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => slide.style.display = 'none');
        document.getElementById(slideId).style.display = 'block';
    }


});
