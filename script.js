
window.addEventListener("mousemove", function(e) {
    if( currentIdx !== null ) {
        const item_flex = document.querySelectorAll(".item-flex");
        item_flex[currentIdx].style.position = "fixed";
        item_flex[currentIdx].style.left = e.clientX + "px";
        item_flex[currentIdx].style.top = e.clientY + "px";
    }
});

let currentIdx = null;
const item_flex = document.querySelectorAll(".item-flex");
for( let i = 0; i < item_flex.length; i += 1 ) {
    item_flex[i].addEventListener("mousedown", function() {
        currentIdx = i;
    });
}

window.addEventListener("mouseup", function() {
    currentIdx = null;
})