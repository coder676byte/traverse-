export function title(click) {
  let titleScreen = document.getElementById("Title_screen");
  let button = document.getElementById("start");
  button.addEventListener("click", function() {
      if (click == 1) {
          titleScreen.style.visibility = "hidden";
      }
  });
}