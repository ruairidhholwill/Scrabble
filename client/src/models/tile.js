const Tile = function(element){
    this.element = element
}

Tile.prototype.bindEvents = function(){

document.addEventListener("drag", function(event) {
    event.target.style.visibility = "hidden";
  }, 1);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  console.log(event.target)
}, false);

document.addEventListener("dragend", function(event) {
    event.target.style.visibility = "";
  }, 1);
  
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    
    console.log(event.target)
    if (event.target.className == 'triple'){
        event.target.style.opacity = 0.5;
    } else if (event.target.className == 'double') {
        event.target.style.opacity = 0.5;
    } else if (event.target.className == 'double_letter') {
        event.target.style.opacity = 0.5;
    } else if (event.target.className == 'triple_letter') {
        event.target.style.opacity = 0.5;
    } else if (event.target.className == 'tile') {
        event.target.style.opacity = 0.5;
    }

}, false);

document.addEventListener("dragleave", function(event) {
    event.target.style.opacity = ''
})


document.addEventListener("drop", function(event) {

  event.preventDefault();
  event.target.style.opacity = ''
//COULD MAKE EVENT (CELL) USED MULTIPLIER FALSE

if (event.target.className == "triple") {
    event.target.innerHTML = ''
    // dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  } else if (event.target.className == "double") {
    event.target.innerHTML = ''
    // dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  } else if (event.target.className == "triple_letter") {
    event.target.innerHTML = ''
    // dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  } else if (event.target.className == "double_letter") {
    event.target.innerHTML = ''
    // dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  } else if (event.target.className == "tile") {
    event.target.appendChild( dragged );
}
})

}

module.exports = Tile