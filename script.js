// 1. Die Konfiguration: Was soll getippt werden?
const text = "Junior Web Developer";
const targetElement = document.getElementById("typewriter");
let index = 0; // Wir starten beim ersten Buchstaben (Position 0)
const speed = 150; // Geschwindigkeit in Millisekunden (höher = langsamer)

const typewriter = document.getElementById("typewriter");
const phrases = ["Junior Web Developer", "Problemlöser", "da Miche"];
let phraseIndex = 0; // Welches Wort aus dem Array?
let charIndex = 0; // Welcher Buchstabe vom Wort?
let isDeleting = false; // Schreib- oder Löschmodus?

function type() {
  const currentFullText = phrases[phraseIndex];

  if (isDeleting) {
    // --- LÜCKE 1: LÖSCHEN ---
    // Nutze den "Baustein B" (.slice), um den Text um einen Buchstaben zu kürzen
    typewriter.textContent = currentFullText.slice(0, charIndex - 1);
    charIndex--;
  } else {
    // --- LÜCKE 2: SCHREIBEN ---
    // Nimm den Text bis zum aktuellen charIndex + 1
    typewriter.textContent = currentFullText.slice(0, charIndex + 1);
    charIndex++;
  }

  // --- LOGIK-ZENTRALE: WANN MODUS WECHSELN? ---

  // 1. Wort ist fertig geschrieben
  if (!isDeleting && charIndex === currentFullText.length) {
    isDeleting = true;
    setTimeout(type, 2000); // Pause am Ende des Wortes (2 Sek.)
    return; // Funktion hier kurz stoppen
  }

  // 2. Wort ist komplett gelöscht
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Gehe zum nächsten Wort (Modulo-Trick)
  }

  // Bestimme die Geschwindigkeit (Löschen geht meist schneller als Schreiben)
  const timer = isDeleting ? 100 : 200;
  setTimeout(type, timer);
}

// Startschuss
type();


const sidebar = document.querySelector(".sidebar")
// lässt die Sidebar anzeigen
function showSidebar() {
  sidebar.classList.add("active");
}

// lässt die Sidebar wieder verschwinden
function hideSidebar() {
   sidebar.classList.remove("active");
}

// 1. Alle Links in der Sidebar finden
const sidebarLinks = document.querySelectorAll('.sidebar-btn');

// 2. Für jeden Link sagen: "Wenn du geklickt wirst, führe hideSidebar aus"
sidebarLinks.forEach((link) => {
  link.addEventListener('click', hideSidebar);
});




const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Wir sagen der Variable: "Pass auf. klickt jemand auf dich?"
backToTopBtn.addEventListener("click", () => {
  // Die Aktion: Scrolle zum Punkt 0 (ganz oben)
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Sorgt für das sanfte Gleiten statt eines harten Sprungs
  });
});

const name = "da Miche";
let experienceInWeeks = 8;
const isLearningJs = true;
const skills = ["HTML", "CSS", "JavaScript", "Logik"];

document.getElementById("dev-name").innerText = "Entwickler: " + name;
document.getElementById("dev-age").innerText =
  "Erfahrung: " + experienceInWeeks + " Wochen";
document.getElementById("dev-status").innerText =
  "Lerne ich gerade? " + (isLearningJs ? "Ja, voll dabei" : "Pause");
document.getElementById("dev-skills").innerText =
  "Skills: " + skills.join(", ");

let myLevel = 1;
const levelButton = document.getElementById("level-up-btn");
const levelDisplay = document.getElementById("level-display");

levelButton.addEventListener("click", () => {
  myLevel++;
  levelDisplay.innerText = myLevel;
  if (myLevel >= 20) {
    levelDisplay.style.color = "#b90707";
    levelButton.innerText = "EXPERT LEVEL! 🔥";
  } else if (myLevel >= 10) {
    levelDisplay.style.color = "#dac407";
    levelButton.innerText = "PRO LEVEL! 🔥";
  }
  console.log("Neues Level erreicht " + myLevel);
});


