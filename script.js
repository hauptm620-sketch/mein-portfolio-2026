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