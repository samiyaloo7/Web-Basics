function cnglinkcolor (t) {
    document.getElementById('target_'+t).src = "imgs/Arrow  (2).png";
	document.getElementById('at'+t).style.color = "orange";
}
function oldlinkcolor (t) {
    document.getElementById('target_'+t).src = "imgs/Arrow  (1).png";
	document.getElementById('at'+t).style.color = "black";
}
document.getElementById("cls_icon").onclick = function () {
    document.getElementById("mob_panel").style.right = "-100%";

}
document.getElementById("menu_icon").onclick = function () {
    document.getElementById("mob_panel").style.right = "0";
}