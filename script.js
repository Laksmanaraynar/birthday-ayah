const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const birthdayPage = document.getElementById("birthdayPage");
const fatherSection = document.getElementById("fatherSection");


/* =========================
   BACKGROUND MUSIC
========================= */

const backgroundMusic = new Audio(
    "assets/music/birthday-song.MP3"
);

backgroundMusic.loop = true;
backgroundMusic.volume = 0.7;

const musicButton = document.getElementById("musicButton");
const musicStatus = document.getElementById("musicStatus");

let isPlaying = false;


/* =========================
   OPEN BIRTHDAY PAGE
========================= */

openButton.addEventListener("click", function () {

    // Hide opening
    opening.classList.add("hide");


    // Start music
    backgroundMusic.play()
        .then(function () {

            isPlaying = true;

            if (musicButton) {
                musicButton.textContent = "Ⅱ";
            }

            if (musicStatus) {
                musicStatus.textContent = "NOW PLAYING";
            }

        })
        .catch(function (error) {

            console.log("Music could not start:", error);

        });


    // Show birthday page
    setTimeout(function () {

        birthdayPage.classList.add("show");

        birthdayPage.scrollIntoView({
            behavior: "smooth"
        });

    }, 700);

});


/* =========================
   MUSIC BUTTON
========================= */

if (musicButton) {

    musicButton.addEventListener("click", function () {

        if (!isPlaying) {

            backgroundMusic.play()
                .then(function () {

                    musicButton.textContent = "Ⅱ";

                    if (musicStatus) {
                        musicStatus.textContent = "NOW PLAYING";
                    }

                    isPlaying = true;

                })
                .catch(function (error) {

                    console.log("Music could not start:", error);

                });

        } else {

            backgroundMusic.pause();

            musicButton.textContent = "▶";

            if (musicStatus) {
                musicStatus.textContent = "PLAY MUSIC";
            }

            isPlaying = false;

        }

    });

}


/* =========================
   FATHER SECTION ANIMATION
========================= */

const fatherObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                fatherSection.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


fatherObserver.observe(fatherSection);


/* =========================
   FAMILY MEMORY ANIMATION
========================= */

const memories = document.querySelectorAll(".memory");


const memoryObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


memories.forEach(function (memory) {

    memoryObserver.observe(memory);

});


/* =========================
   LETTER ANIMATION
========================= */

const letterSection = document.getElementById("letterSection");


const letterObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                letterSection.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


letterObserver.observe(letterSection);