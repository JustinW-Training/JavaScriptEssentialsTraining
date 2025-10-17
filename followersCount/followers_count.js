let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Verhoog de count met 1
  displayCount(); // Toon de count
  checkCountValue(); // Controleer de countwaarde en toon berichten
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Toon het aantal in de HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Je Instagram-post heeft 10 volgers gewonnen! Gefeliciteerd!");
  } else if (count === 20) {
    alert("Je Instagram-post heeft 20 volgers gewonnen! Ga zo door!");
  }
}

function resetCountValue() {
    count = 0
    document.getElementById('countDisplay').innerHTML=count;
    alert("Het aantal volgers is gereset.");
}