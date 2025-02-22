export function title(click) {
  let titleScreen = document.getElementById("Title_screen");
  let button = document.getElementById("start");
  button.addEventListener("click", function() {
    titleScreen.style.visibility = "hidden";
      }
  );
}

title(1)