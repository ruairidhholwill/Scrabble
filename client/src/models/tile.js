const PubSub = require('../helpers/pub_sub.js')

const Tile = function(element){
    this.element = element

}

Tile.prototype.bindEvents = function(){

document.addEventListener("drag", function(event) {
    event.target.style.visibility = "hidden";
  }, 1);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
}, false);

document.addEventListener("dragend", function(event) {
    event.target.style.visibility = "";
  }, 1);
  
document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
   
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


if (event.target.className == "triple") {
    event.target.innerHTML = ''

    event.target.appendChild( dragged );
  } else if (event.target.className == "double") {
    event.target.innerHTML = ''

    event.target.appendChild( dragged );
  } else if (event.target.className == "triple_letter") {
    event.target.innerHTML = ''

    event.target.appendChild( dragged );
  } else if (event.target.className == "double_letter") {
    event.target.innerHTML = ''
  
    event.target.appendChild( dragged );
  } else if (event.target.className == "tile") {
    event.target.appendChild( dragged );
}

if (dragged.parentElement.previousElementSibling.innerText.length === 1) {
  const previousLettersArray = []
  previousLettersArray.push(dragged.parentElement.previousElementSibling.innerText)
  console.log(previousLettersArray)
}

PubSub.publish('Tile:letter-placed', dragged.innerHTML)
PubSub.publish('Tile:letter-row-index', dragged.offsetParent.parentNode.rowIndex)
PubSub.publish('Tile:letter-cell-index', dragged.offsetParent.cellIndex)
})

}

module.exports = Tile