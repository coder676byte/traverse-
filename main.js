const c = document.querySelector("canvas");
const wn = c.getContext("2d");
c.style.visibility = "hidden";

// Option 2: To be extra sure, use this:
document.addEventListener("DOMContentLoaded", function() {
    // Call the title function after the DOM is ready
    title(1);
    var b = document.getElementById("start");
    b.addEventListener("click",function begin() {
        b = null;
        game()
    })
    
  });
  
function game() {
    set_canv()
}



function set_canv() {
    c.style.visibility = "visible";
    c.width = 1600;
    c.height = 898;}
