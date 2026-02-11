let counter = 0;

function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    let oddNums = "";
    for (let j = 0; j <= counter; j++) {
        if (j % 2 == 1) {
            oddNums += j + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = oddNums.trim();
}

function addMultiplesToArray() { 
    let arr = []; 
    let index = 0;

    for (let i = counter; i >= 5; i--) {
        if (i % 5 == 0) {
            arr[index] = i;
            index++;
        }
    }
    console.log(arr);
}

function printCarObject() { 
    let car = { 
        cType: document.getElementById("carType").value, 
        cMPG: document.getElementById("carMPG").value, 
        cColor: document.getElementById("carColor").value 
    }; 
    console.log(car); 
}

function loadCar(number) {
    let car;

    if (number == 1) {
        car = carObject1;
    } else if (number == 2) {
        car = carObject2;
    } else if (number == 3) {
        car = carObject3;

    }
    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(num) {
    let p = document.getElementById("styleParagraph");

    if (num == 1) {
        p.style.color = "red";
    } else if (num == 2) {
        p.style.color = "green";
    } else if (num == 3) {
        p.style.color = "blue";
    }
}