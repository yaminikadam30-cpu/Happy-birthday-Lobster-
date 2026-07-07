// ======================================
// SMOOTH SCROLL
// ======================================

const beginButton = document.getElementById("beginButton");

beginButton.addEventListener("click", () => {

    document.getElementById("favorite").scrollIntoView({
        behavior: "smooth"
    });

});

// ======================================
// MUSIC BUTTON
// ======================================

const musicButton = document.getElementById("musicButton");

let playing = false;

// We'll connect the actual music later
musicButton.addEventListener("click", () => {

    if (playing) {

        musicButton.innerHTML = "♫";
        playing = false;

    } else {

        musicButton.innerHTML = "❚❚";
        playing = true;

    }

});

// ======================================
// FADE-IN ANIMATION ON SCROLL
// ======================================

const cards = document.querySelectorAll(".story-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});