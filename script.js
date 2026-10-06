/* =====================================================
   BIRTHDAY WEBSITE — STEP 1 TO STEP 4
   ===================================================== */


/* =====================================================
   ELEMENTS
   ===================================================== */

// STEP 1
const openingScreen =
    document.getElementById("openingScreen");

const startButton =
    document.getElementById("startButton");


// STEP 2
const birthdayScreen =
    document.getElementById("birthdayScreen");

const birthdayStartButton =
    document.getElementById("birthdayStartButton");


// STEP 3
const storyScreen =
    document.getElementById("storyScreen");

const storyNextButton =
    document.getElementById("storyNextButton");


// STEP 4
const reasonsScreen =
    document.getElementById("reasonsScreen");

const reasonCards =
    document.querySelectorAll(".reason-card");

const reasonsComplete =
    document.getElementById("reasonsComplete");

const reasonsNextButton =
    document.getElementById("reasonsNextButton");


// STEP 7 (Letter / Shayari screen)
const letterScreen =
    document.getElementById("letterScreen");


/* =====================================================
   CLICK SOUND
   ===================================================== */

function playClickSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        const audioContext =
            new AudioContext();

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type = "sine";


        oscillator.frequency.setValueAtTime(
            520,
            audioContext.currentTime
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            760,
            audioContext.currentTime + 0.08
        );


        gain.gain.setValueAtTime(
            0.0001,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.08,
            audioContext.currentTime + 0.02
        );


        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + 0.12
        );


        oscillator.connect(gain);
        gain.connect(audioContext.destination);


        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.12
        );

    } catch (error) {

        console.log("Sound unavailable.");

    }

}


/* =====================================================
   BUTTON CLICK EFFECT
   ===================================================== */

function createRipple(button) {

    if (!button) return;

    button.classList.remove(
        "button-ripple"
    );

    void button.offsetWidth;

    button.classList.add(
        "button-ripple"
    );

}


/* =====================================================
   STEP 1 → STEP 2
   OPENING → BIRTHDAY
   ===================================================== */

if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

            playClickSound();

            createRipple(
                startButton
            );

            startButton.classList.add(
                "clicked"
            );


            setTimeout(() => {

                openingScreen.classList.add(
                    "leaving"
                );

            }, 150);


            setTimeout(() => {

                openingScreen.style.display =
                    "none";

                birthdayScreen.classList.add(
                    "active"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 850);

        }
    );

}


/* =====================================================
   STEP 2 → STEP 3
   BIRTHDAY → STORY
   ===================================================== */

if (birthdayStartButton) {

    birthdayStartButton.addEventListener(
        "click",
        () => {

            playClickSound();

            createRipple(
                birthdayStartButton
            );

            birthdayStartButton.classList.add(
                "clicked"
            );


            setTimeout(() => {

                birthdayScreen.classList.remove(
                    "active"
                );

                birthdayScreen.classList.add(
                    "leaving"
                );

            }, 150);


            setTimeout(() => {

                birthdayScreen.style.display =
                    "none";

                storyScreen.classList.add(
                    "active"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 850);

        }
    );

}


/* =====================================================
   STEP 3 → STEP 4
   STORY → 12 THINGS
   ===================================================== */

if (storyNextButton) {

    storyNextButton.addEventListener(
        "click",
        () => {

            playClickSound();

            createRipple(
                storyNextButton
            );

            storyNextButton.classList.add(
                "clicked"
            );


            setTimeout(() => {

                storyScreen.classList.remove(
                    "active"
                );

                storyScreen.classList.add(
                    "leaving"
                );

            }, 150);


            setTimeout(() => {

                storyScreen.style.display =
                    "none";

                reasonsScreen.classList.add(
                    "active"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 850);

        }
    );

}


/* =====================================================
   STEP 4
   12 THINGS I LIKE ABOUT YOU
   ===================================================== */


/*
 * Unique cards that have been opened
 */

const openedReasons = new Set();


/* =====================================================
   CARD FLIP
   ===================================================== */

reasonCards.forEach((card) => {

    card.addEventListener(
        "click",
        () => {

            playClickSound();


            /*
             * Small click animation
             */

            card.classList.remove(
                "clicked"
            );

            void card.offsetWidth;

            card.classList.add(
                "clicked"
            );


            /*
             * Card number
             */

            const reasonNumber =
                card.dataset.reason;


            /*
             * Open card only once.
             *
             * Once opened, it stays open.
             */

            if (
                !card.classList.contains(
                    "open"
                )
            ) {

                card.classList.add(
                    "open"
                );

                openedReasons.add(
                    reasonNumber
                );

            }


            /*
             * Check whether all 12
             * cards have been opened.
             */

            if (
                openedReasons.size ===
                reasonCards.length
            ) {

                showReasonsComplete();

            }

        }
    );

});


/* =====================================================
   ALL 12 COMPLETED
   ===================================================== */

function showReasonsComplete() {

    if (!reasonsComplete) {
        return;
    }


    /*
     * Let the 12th card finish
     * its flip animation first.
     */

    setTimeout(() => {

        reasonsComplete.classList.add(
            "visible"
        );


        /*
         * Smoothly move to completion
         * message.
         */

        setTimeout(() => {

            reasonsComplete.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 250);

    }, 650);

}


/* =====================================================
   STEP 4 LAST BUTTON
   ===================================================== */

/* =====================================================
   STEP 4 → STEP 7
   12 THINGS → ENVELOPE
   ===================================================== */

if (reasonsNextButton && letterScreen) {

    reasonsNextButton.addEventListener("click", () => {

        playClickSound();
        createRipple(reasonsNextButton);

        reasonsNextButton.classList.add("clicked");

        // Step 4 ko fade out karo
        reasonsScreen.classList.remove("active");
        reasonsScreen.classList.add("leaving");

        setTimeout(() => {

            reasonsScreen.classList.remove("active");
            reasonsScreen.style.display = "none";

            // Step 7 ko reset karke show karo
            letterScreen.style.display = "flex";

            void letterScreen.offsetWidth;

            letterScreen.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 750);
    });
}


/* =====================================================
   END — STEP 4
   ===================================================== */
   /* =====================================================
   STEP 7 — ENVELOPE + SHAYARI JAVASCRIPT
   ===================================================== */

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const envelope =
    document.getElementById("envelope");

const envelopeHint =
    document.getElementById("envelopeHint");

const shayariWrapper =
    document.getElementById("shayariWrapper");

const shayariCards =
    document.querySelectorAll(".shayari-card");

const shayariNextButton =
    document.getElementById("shayariNextButton");

const shayariButtonText =
    document.getElementById("shayariButtonText");

const shayariFinal =
    document.getElementById("shayariFinal");

const shayariContinueButton =
    document.getElementById("shayariContinueButton");


/* =====================================================
   ENVELOPE OPEN
   ===================================================== */

if (envelope) {

    envelope.addEventListener("click", () => {

        /* Don't allow repeated clicks */
        if (envelope.classList.contains("open")) {
            return;
        }

        playClickSound();

        envelope.classList.add("open");

        if (envelopeHint) {
            envelopeHint.style.opacity = "0";
        }

        /*
         * Give the envelope animation time to play.
         * Then move it away and reveal the paper.
         */
        setTimeout(() => {

            if (envelopeWrapper) {
                envelopeWrapper.classList.add("opened");
            }

        }, 950);


        /*
         * Reveal shayari after envelope
         * has opened and moved away.
         */
        setTimeout(() => {

            if (shayariWrapper) {
                shayariWrapper.classList.add("visible");
            }

        }, 1250);

    });

}


/* =====================================================
   SHAYARI — ONE BY ONE
   ===================================================== */

let currentShayari = 1;

const totalShayari =
    shayariCards.length;


function showShayari(number) {

    shayariCards.forEach((card) => {

        card.classList.remove("active");

    });


    const nextCard =
        document.querySelector(
            `.shayari-card[data-shayari="${number}"]`
        );


    if (nextCard) {

        /*
         * Force animation to restart
         * every time a new shayari appears.
         */
        void nextCard.offsetWidth;

        nextCard.classList.add("active");

    }

}


/* =====================================================
   NEXT SHAYARI BUTTON
   ===================================================== */

if (shayariNextButton) {

    shayariNextButton.addEventListener("click", () => {

        playClickSound();
        createRipple(shayariNextButton);

        /*
         * If more shayari are left
         */
        if (currentShayari < totalShayari) {

            currentShayari++;

            showShayari(currentShayari);


            /*
             * Change button text on final shayari.
             */
            if (
                currentShayari === totalShayari &&
                shayariButtonText
            ) {

                shayariButtonText.textContent =
                    "One last thing... ♡";

            }

            return;
        }


        /*
         * All five shayaris are complete.
         */
        shayariNextButton.style.display =
            "none";


        setTimeout(() => {

            if (shayariFinal) {

                shayariFinal.classList.add(
                    "visible"
                );

            }

        }, 300);

    });

}


/* =====================================================
   CONTINUE BUTTON
   ===================================================== */

/* =====================================================
   STEP 8 — GRAND FINALE
   STEP 7 → FINAL SCREEN
   ===================================================== */

const finalScreen = document.getElementById("finalScreen");
const finalIntro = document.getElementById("finalIntro");
const pandaStage = document.getElementById("pandaStage");
const birthdayReveal = document.getElementById("birthdayReveal");
const finalWishes = document.getElementById("finalWishes");


/* =====================================================
   STEP 7 → STEP 8
   ===================================================== */

if (shayariContinueButton && finalScreen) {

    shayariContinueButton.addEventListener("click", () => {

        playClickSound();
        createRipple(shayariContinueButton);

        shayariContinueButton.classList.add("clicked");

        /* Step 7 fade out */
        letterScreen.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        letterScreen.style.opacity = "0";
        letterScreen.style.transform =
            "translateY(-30px)";

        setTimeout(() => {

            /* Hide Step 7 */
            letterScreen.classList.remove("active");
            letterScreen.style.display = "none";

            /* Reset final screen */
            finalScreen.style.display = "flex";
            finalScreen.classList.remove("active");

            finalIntro.style.opacity = "";
            pandaStage.style.opacity = "";
            birthdayReveal.style.opacity = "";
            finalWishes.style.opacity = "";

            /* Force browser to restart animation */
            void finalScreen.offsetWidth;

            /* Show final screen */
            finalScreen.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 850);
    });
}


/* =====================================================
   FINAL PANDA REVEAL
   ===================================================== */

if (finalScreen && pandaStage) {

    /*
     * Panda ko initially hidden rakhenge.
     * Screen open hone ke baad animation naturally start hogi.
     */

    pandaStage.addEventListener("animationend", () => {

        /* Panda animation complete */
        pandaStage.classList.add("panda-arrived");

    });

}


/* =====================================================
   FINAL HAPPY BIRTHDAY EFFECT
   ===================================================== */

if (birthdayReveal) {

    birthdayReveal.addEventListener("animationstart", () => {

        /*
         * Birthday reveal ke moment par
         * little celebration sound.
         */
        setTimeout(() => {

            playClickSound();

        }, 500);

    });

}


/* =====================================================
   FINAL SCREEN — LITTLE CONFETTI
   ===================================================== */

function createFinalConfetti() {

    if (!finalScreen) return;

    const symbols = ["✨", "♡", "🎀", "✦", "💗"];

    for (let i = 0; i < 28; i++) {

        const piece = document.createElement("span");

        piece.className = "final-confetti";
        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        /* Random horizontal spread: -280px to +280px */
        const spreadX = (Math.random() - 0.5) * 560;

        /* Random fall distance: 180px to 480px */
        const spreadY = 180 + Math.random() * 300;

        piece.style.setProperty("--confetti-x", spreadX + "px");
        piece.style.setProperty("--confetti-y", spreadY + "px");

        piece.style.animationDelay =
            Math.random() * 0.6 + "s";

        piece.style.animationDuration =
            (2.2 + Math.random() * 1.2) + "s";

        finalScreen.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4000);
    }
}


/* =====================================================
   START CONFETTI AFTER BIRTHDAY REVEAL
   ===================================================== */

if (birthdayReveal) {

    setTimeout(() => {

        if (
            finalScreen &&
            finalScreen.classList.contains("active")
        ) {
            createFinalConfetti();
        }

    }, 2800);
}