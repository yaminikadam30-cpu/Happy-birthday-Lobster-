// ======================================
// LET'S BEGIN BUTTON
// ======================================

const beginButton = document.getElementById("beginButton");
const favoriteSection = document.getElementById("favorite");

// Create the fade screen
const fadeScreen = document.createElement("div");
fadeScreen.className = "fade-screen";
document.body.appendChild(fadeScreen);

beginButton.addEventListener("click", () => {

    // Disable multiple clicks
    beginButton.disabled = true;

    // Fade to black
    fadeScreen.classList.add("active");

    setTimeout(() => {

        // Reveal the next section
        favoriteSection.classList.add("show");

        // Scroll to it
        favoriteSection.scrollIntoView({
            behavior: "smooth"
        });

        // Fade back
        setTimeout(() => {

            fadeScreen.classList.remove("active");

        }, 600);

    }, 450);

});

// ======================================
// SCROLL ANIMATION
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