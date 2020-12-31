const dd = document.getElementById("dropdown");
const ddCont = document.getElementById("dropdown-content");
const main = document.getElementById("main")

function ddMenu() {
    ddCont.style="display:block"
}

function ddClose() {
    ddCont.style="display: none"
}

// dd.onclick = ddMenu;
dd.onmouseover = ddMenu;
main.onclick = ddClose;
