const text = "Happy Valentine's Day!";
const emoji = " 💖";
const typingElement = document.getElementById("typingText");

let index = 0;
let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 60;
const pauseAfterTyping = 1500;
const pauseAfterEmoji = 1200;

function typeEffect() {

    if (!isDeleting) {

        typingElement.innerHTML = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            setTimeout(() => {
                typingElement.innerHTML += `<span class="emoji">${emoji}</span>`;
                setTimeout(() => {
                    isDeleting = true;
                }, pauseAfterEmoji);
            }, pauseAfterTyping);

            return;
        }

    } else {

        typingElement.innerHTML = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

function playSound() {
    let video = document.getElementById("bgVideo");
    video.muted = false;
    video.play();
}

function goNext() {
    window.location.href = "next.html";
}