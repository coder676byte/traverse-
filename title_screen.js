function title(click) {
  console.log("test");
  const titleScreen = document.getElementById("Title_screen");
  const button = document.getElementById("start");
  
  button.addEventListener("click", function start() {
    titleScreen.style.visibility = "hidden";
  });
}
