// scrolling bar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-bar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});