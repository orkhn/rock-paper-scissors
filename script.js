// Variables
// Selectors
// Functions

//  Function to play main button audio on click
function playSound() {
  const btnPress = document.getElementById("click-sound");
  btnPress.play();
}

gameButtons = document.querySelectorAll(".click-soundy").forEach((item) => {
  item.addEventListener("click", playSound);
});
