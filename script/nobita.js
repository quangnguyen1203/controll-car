function upArrowPressed() {
    let element = document.getElementById("nobita");
    if(element.style.top !== '0px'){
        element.style.top = parseInt(element.style.top) - 5 + 'px';
    }
    
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    // let x = window.innerHeight;
    // let y = window.innerWidth;
    // document.write('height : ' +x);
    // document.write('width : ' +y);
    console.log(element.style.top);
    if(element.style.top  !== '735px'){
        element.style.top = parseInt(element.style.top) + 5 + 'px';
    }
   
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    if(element.style.left !== '0px'){
        element.style.left = parseInt(element.style.left) - 5 + 'px';
    }
    
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    if(element.style.left !== '1615px'){
        element.style.left = parseInt(element.style.left) + 5 + 'px';
    }
    

}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}