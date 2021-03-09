const step = 5;
function init(){
    let car = document.getElementById('car');
    car.style.width = "200px";
    car.style.height = "100px";
    car.style.position = "relative";
    car.style.top = "0px";
    car.style.left = "0px";

    window.addEventListener("keydown", controllCar);
}
function controllCar(evt){
    switch(evt.keyCode){
        //move to left
        case 37:{
            let car = document.getElementById('car');
            car.src ="images/left.png";
            car.style.width = "200px";
            car.style.height = "100px";
            let posCar = parseInt(car.style.left);
            let widthCar = parseInt(car.style.width);
            if(posCar + widthCar + step <= window.innerWidth){
                car.style.left = `${posCar - step}px`;
            }
        }
            break;

        //move to right
        case 39:{
            let car = document.getElementById('car');
            car.src ="images/right.png";
            car.style.width = "200px";
            car.style.height = "100px";
            let posCar = parseInt(car.style.left);
            let widthCar = parseInt(car.style.width);
            if(posCar + widthCar + step <= window.innerWidth){
                car.style.left = `${posCar + step}px`;
            }
        }
            break;
        //move up
        case 38:{
            let car = document.getElementById('car');
            car.src ="images/up.png";
            car.style.width = "100px";
            car.style.height = "200px";
            let posCar = parseInt(car.style.top);
            let heightCar = parseInt(car.style.height);
            if(posCar + heightCar + step <= window.innerHeight){
                car.style.top = `${posCar - step}px`;
            }
        }
            break;
        //move down
        case 40:{
            let car = document.getElementById('car');
            car.src ="images/down.png";
            car.style.width = "100px";
            car.style.height = "200px";
            let posCar = parseInt(car.style.top);
            let heightCar = parseInt(car.style.height);
            if(posCar + heightCar + step <= window.innerHeight){
                car.style.top = `${posCar + step}px`;
            }
        }
            break;
        default:{
            alert("please using one in four keys left, right, up and down");
        }
    }
}