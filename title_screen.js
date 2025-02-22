export function title(click) {
    const titleScreen = document.getElementById("Title_screen");
    const button = document.getElementById("start");
    button.addEventListener("click", function() {
      if (click === 1) {
        titleScreen.style.visibility = "hidden";
        // Dispatch a custom event signalling completion
        document.dispatchEvent(new Event('titleFinished'));
      }
    });
  }
  