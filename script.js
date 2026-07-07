// ---------- LANDING BUTTON ----------

const beginButton = document.getElementById("beginButton");

beginButton.addEventListener("click", () => {

    document.getElementById("meet").scrollIntoView({
        behavior: "smooth"
    });

});

// ---------- MUSIC BUTTON ----------

const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", () => {

    if (!playing) {

        musicButton.innerHTML = "❚❚";
        playing = true;

        // Music will be added in Version 3.2

    } else {

        musicButton.innerHTML = "♫";
        playing = false;

    }

});