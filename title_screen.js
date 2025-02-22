export function title(click) {
  let titleScreen = document.getElementById("Title_screen");
  let button = document.getElementById("start");
  titleScreen.style.visibility = "hidden"
  button.addEventListener("click", function() {
    titleScreen.style.visibility = "hidden";
      }
  );
}

