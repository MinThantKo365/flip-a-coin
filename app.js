const coin = document.querySelector("#coin");
const flipBtn = document.querySelector("#flip-btn");
const resetBtn = document.querySelector("#reset-btn");

const headsCount = document.querySelector("#heads-count");
const tailsCount = document.querySelector("#tails-count");

let heads = 0;
let tails = 0;
let isFlipping = false;

flipBtn.addEventListener("click", () => {

    if (isFlipping) return;

    isFlipping = true;
    flipBtn.disabled = true;

    // Random result
    const result = Math.floor(Math.random() * 2);

    // Reset coin before starting a new animation
    coin.style.transition = "none";
    coin.style.transform = "rotateY(0deg)";

    // Force browser reflow
    coin.offsetHeight;

    // Start animation
    coin.style.transition =
        "transform 3s cubic-bezier(0.15, 0.8, 0.25, 1)";

    if (result === 0) {

        // HEADS
        coin.style.transform = "rotateY(1800deg)";

    } else {

        // TAILS
        coin.style.transform = "rotateY(1980deg)";
    }

    // Wait until animation finishes
    setTimeout(() => {

        if (result === 0) {

            heads++;
            headsCount.textContent = heads;

        } else {

            tails++;
            tailsCount.textContent = tails;
        }

        isFlipping = false;
        flipBtn.disabled = false;

    }, 3000);
});


resetBtn.addEventListener("click", () => {

    if (isFlipping) return;

    heads = 0;
    tails = 0;

    headsCount.textContent = "0";
    tailsCount.textContent = "0";

    coin.style.transition = "transform 0.5s ease";
    coin.style.transform = "rotateY(0deg)";
});