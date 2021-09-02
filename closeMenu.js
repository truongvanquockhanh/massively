document.getElementById("close").onclick = closeMenu;
function closeMenu () {
    document.getElementById("menudown").style.width = "0";
    document.getElementById("close").style.display = "none";
    document.getElementById("over").style.opacity = "1";
}
document.getElementById("over").onclick =closeMenu;
var h = window.innerHeight + "px";
document.getElementById("menudown").style.height = h;