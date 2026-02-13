const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const text = document.getElementById("text");
const heartsContainer = document.getElementById("hearts");
const music = document.getElementById("music");

let message = "You are my happiness and my forever love 💖";
let i = 0;
let opened = false;

/* Envelope Click */
envelope.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {
        envelope.classList.add("hide");
    }, 600);

    setTimeout(() => {
        card.classList.add("show");
        typeWriter();
        startHearts();
    }, 900);
});

function typeWriter() {
    if (i < message.length) {
        text.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const emojis = ["❤️", "💖", "💕", "💘", "💞"];
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => { heart.remove(); }, 4000);
    }, 300);
}

function toggleMusic(btn) {
    if (music.paused) {
        music.play();
        btn.innerText = "Pause Music ⏸";
    } else {
        music.pause();
        btn.innerText = "Play Music 🎵";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}