document.getElementById("year").textContent = new Date().getFullYear();

// Code baru untuk smooth scroll
document.querySelector('.scroll-down-btn').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight * 1.0, // Scroll down about 70% of the viewport height
        behavior: 'smooth' // Ini yang bikin scroll-nya halus
    });
});