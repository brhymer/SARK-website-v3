const dd = document.getElementById("dropdown");
const ddCont = document.getElementById("dropdown-content");
const main = document.getElementById("main")

function ddMenu() {
    ddCont.style="display:block"
}

function ddClose() {
    ddCont.style="display: none"
}

dd.onclick = ddMenu;
main.onclick = ddClose;
