
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

/*const name = "da Miche";
let experienceInWeeks = 8;
const isLearningJs = true;
const skills = ["HTML", "CSS", "JavaScript", "Logik"];*/
const developer = {
  name: "da Miche",
  experienceInWeeks: 8,
  isLearningJs: true,
  skills: ["HTML", "CSS", "JavaScript", "Logik"]
};

document.getElementById("dev-name").innerText = "Entwickler: " + developer.name;
document.getElementById("dev-age").innerText =
  "Erfahrung: " + developer.experienceInWeeks + " Wochen";
document.getElementById("dev-status").innerText =
  "Lerne ich gerade? " + (developer.isLearningJs ? "Ja, voll dabei" : "Pause");
document.getElementById("dev-skills").innerText =
  "Skills: " + developer.skills.join(", ");

let gespeichertesLevel = localStorage.getItem("userLevel");
let myLevel = parseInt(gespeichertesLevel) || 0;
const maximalLevel = 20;
const levelButton = document.getElementById("level-up-btn");
const resetButton = document.getElementById("reset-level-btn");
const levelDisplay = document.getElementById("level-display");
const progressBar = document.getElementById("progress-bar");

levelButton.addEventListener("click", () => {

   if (myLevel < 20) {
    myLevel++;
    localStorage.setItem("userLevel", myLevel);
   }
   updateUi();
});

resetButton.addEventListener("click", () => {
  myLevel = 0;
  localStorage.setItem("userLevel", myLevel);
  updateUi();
});


function updateUi() {

   let prozent = (myLevel / maximalLevel) * 100;
   progressBar.style.width = prozent + "%";
   levelDisplay.innerText = myLevel;

   if (myLevel >= 20) {
    levelDisplay.style.color = "#b90707";
    levelButton.innerText = "EXPERT LEVEL! 🔥";
    levelButton.style.backgroundColor = "#b90707";
    progressBar.style.backgroundColor = "#b90707";
    levelButton.disabled = true;

  } else if (myLevel >= 10) {
    levelDisplay.style.color = "#dac407";/*#dac407*/
    levelButton.innerText = "PRO LEVEL! 🔥";
    levelButton.style.backgroundColor = "#dac407";
    levelButton.style.color = "#070707";
    progressBar.style.backgroundColor = "#dac407";
  } 
  else {
    levelButton.style.color = "";
    levelDisplay.style.color = "";
    levelButton.innerText = "Level Up! 🚀";
    levelButton.style.backgroundColor = "";
    progressBar.style.backgroundColor = "";
    levelButton.disabled = false;
  }
  console.log("Neues Level erreicht " + myLevel);
};

updateUi();

const lightMode = document.getElementById("theme-toggle");
const lightModeMobile = document.getElementById("theme-toggle-mobile");

function toggleTheme() {
  document.body.classList.toggle("light-mode");
if (document.body.classList.contains("light-mode")) {
    lightMode.innerText = "Helles Design ☀️";
    lightModeMobile.innerText = "Helles Design ☀️";
} else {
    lightMode.innerText = "Dunkles Design 🌙";
    lightModeMobile.innerText = "Dunkles Design 🌙";
}
};

  lightMode.addEventListener('click', toggleTheme);
  lightModeMobile.addEventListener('click', toggleTheme);


/* ==========================================================================
   Kontaktformular | Zeile 186-204
   ========================================================================== */

  const kontaktForm = document.getElementById("kontakt-form");

kontaktForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stoppt das Neuladen der Seite
  const nameWert = document.getElementById("form-name").value;
  const emailWert = document.getElementById("form-email").value;
  const nachrichtWert = document.getElementById("form-nachricht").value;
  console.log("Formular abgeschickt von: " + nameWert + " (" + emailWert + ")");
console.log("Nachricht: " + nachrichtWert);

// 1. Hole das leere Feedback-Element und schreibe Text hinein
const feedbackElement = document.getElementById("form-feedback");
feedbackElement.innerText = "Danke " + nameWert + ", deine Nachricht wurde erfolgreich (simuliert) gesendet! 🚀";

// 2. Das Formular wieder komplett leeren
// 💡 Tipp: Die bequemste Art, ein ganzes Formular zurückzusetzen, ist der Befehl .reset() auf dem Formular-Element!
kontaktForm.reset();

});

/* ==========================================================================
   Meine Projekte | Zeile 210-
   ========================================================================== */

   const meineProjekte = [
    {
    titel: "Mein Portfolio",
    beschreibung: "Mein erstes größeres Projekt. Komplett responsive und mit automatischem Lightmode.",
    tags: ["HTML", "CSS", "Grid", "Flexbox"]
    },
    {
    titel: "Das Kontaktformular",
    beschreibung: "Ein interaktives Formular mit Live-Feedback für den Nutzer und Absperr-Schutz.",
    tags: ["HTML", "CSS", "JavaScript", "Validierung"]
  }
   ];

   // 1. Hol dir das leere Grid aus dem HTML
const projektGrid = document.getElementById("projekt-grid");

// 2. Wir gehen jedes Projekt in der Liste nacheinander durch
meineProjekte.forEach((projekt) => {

  // 💡 TRICK: Wir bauen die Tags (HTML-Spans) dynamisch aus dem Tags-Array des Projekts!
  // .map erstellt für jeden Tag ein <span> und .join("") klebt sie zu einem Text zusammen.
  const tagSpans = projekt.tags.map(tag => `<span>${tag}</span>`).join("");

  // 3. Wir erschaffen das HTML-Skelett für die Card als Text (mit Backticks `` ` ``)
  const cardHtml = `
    <article class="project-card">
      <h3>${projekt.titel}</h3>
      <p>${projekt.beschreibung}</p>
      <div class="tag-container">
        ${tagSpans}
      </div>
    </article>
  `;

  // 4. Jetzt schieben wir diese fertige Card ganz vorne in das Grid hinein
  // 'afterbegin' sorgt dafür, dass sie vor deiner bestehenden Level-Card eingefügt wird!
  projektGrid.insertAdjacentHTML("afterbegin", cardHtml);
});

