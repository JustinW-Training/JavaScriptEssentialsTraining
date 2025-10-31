let testText = "De snelle bruine vos springt over de luie hond.";
let startTime, endTime;

function startTest() {
// Stel de testtekst in
document.getElementById("inputText").value = testText;

// Reset gebruikersinvoer en output
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Start timer
startTime = new Date().getTime();
}

 function endTest() {
            endTime = new Date().getTime();

            // Schakel gebruikersinvoer uit
            document.getElementById("userInput").readOnly = true;

            // Bereken verstreken tijd en woorden per minuut (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // in seconden
            var userTypedText = document.getElementById("userInput").value;

            // Split de tekst met regex om woorden correct te tellen
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;
            var totalLength = userTypedText.length;

            var wpm = 0; // Standaardwaarde

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Toon de resultaten
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Resultaten van de Typetest:</h2>" +
            "<p>Totale Lengte: " + totalLength + "</p>" +    
            "<p>Getypte Woorden: " + typedWords + "</p>" +
                "<p>Verstreken Tijd: " + timeElapsed.toFixed(2) + " seconden</p>" +
                "<p>Woorden Per Minuut (WPM): " + wpm + "</p>";
            }