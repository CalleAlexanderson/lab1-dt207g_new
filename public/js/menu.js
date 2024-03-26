// Globala konstanter och variabler
let menuOpen = false;
let menuDiv;
// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    menuDiv = document.getElementById('mobile_menu');
    menuDiv.style.visibility = "hidden";
    document.getElementById('mobile_btn').addEventListener('click', menu);
    document.getElementById('mobile_btn_close').addEventListener('click', menu);

    window.addEventListener('resize', () => {
        if (screen.width > 901 && menuOpen == true) {
            menuDiv.style.visibility = "hidden";
            menuOpen = false;
        }
    })
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

function menu() {
    if (menuOpen == true) {
        menuDiv.style.visibility = "hidden";
        menuOpen = false;
    } else {
        menuDiv.style.visibility = "visible";
        menuOpen = true;
    }
}