let car = null;
function init() {
    car = document.getElementById('cars');
    car.style.position = 'relative';
    car.style.left = '0px';
    car.style.top = '0px' ;
}
function moveRight() {
    imgObj.style.left = parseInt(car.style.left) + 10 + 'px';
}