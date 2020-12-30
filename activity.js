const dd = document.getElementById("dropdown");
const ddCont = document.getElementById("dropdown-content");

function ddMenu() {
    ddCont.style="display:block"
}

function ddClose() {
    ddCont.style="display: none"
}

dd.onclick = ddMenu;
// dd.onmouseout = ddClose;

// document.body.onclick = ddClose;