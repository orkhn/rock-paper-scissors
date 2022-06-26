// Variables
// Selectors
// Functions

//  Function to play main button audio on click
function playSound() {
  const btnPress = document.getElementById("click-sound");
  btnPress.play();
}

starterBtn = document
  .getElementById("starter-button")
  .addEventListener("click", playSound);
