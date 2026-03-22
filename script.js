// 1. Die Konfiguration: Was soll getippt werden?
const text = "Junior Web Developer";
const targetElement = document.getElementById("typewriter");
let index = 0; // Wir starten beim ersten Buchstaben (Position 0)
const speed = 200; // Geschwindigkeit in Millisekunden (höher = langsamer)

// 2. Die Funktion: Die "Maschine", die tippt
function typeEffect() {
  // Solange der aktuelle Index kleiner ist als die Länge des Textes...
  if (index < text.length) {
    // ...füge den aktuellen Buchstaben zum Element hinzu
    targetElement.textContent += text.charAt(index);
    
    // Erhöhe den Index um 1, damit der nächste Buchstabe dran ist
    index++;
    
    // Warte kurz (speed) und rufe DIESE Funktion dann wieder auf (Rekursion)
    setTimeout(typeEffect, speed);
  }
}

// 3. Der Startschuss: Führe die Funktion aus, wenn die Seite geladen ist
typeEffect();



const typewriter = document.getElementById("typewriter");
const phrases = ["Junior Web Developer", "Problemlöser", "da Miche"];
let phraseIndex = 0; // Welches Wort aus dem Array?
let charIndex = 0;   // Welcher Buchstabe vom Wort?
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
