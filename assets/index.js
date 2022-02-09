
// Features required for the project

// - Implementation of : counter and  buttons + and - 

let containerFeatures = document.getElementById("container-features");

let pCounter = document.createElement("p");
pCounter.setAttribute("id","counter");
pCounter.setAttribute("class","counter");

let containerButtons = document.createElement("div");
containerButtons.setAttribute("class","basic__buttons__counter");

containerFeatures.appendChild(pCounter);
containerFeatures.appendChild(containerButtons);

let btnAdd = document.createElement("button");
btnAdd.innerHTML= "+"
btnAdd.setAttribute("id","incrase-one");
btnAdd.setAttribute("class","button__counter button");

let btnSub = document.createElement("button");
btnSub.innerHTML= "-"
btnSub.setAttribute("id","subtract-one");
btnSub.setAttribute("class","button__counter button");

containerButtons.appendChild(btnAdd);
containerButtons.appendChild(btnSub);

let counter = document.getElementById("counter");

let btnIncraseOne = document.getElementById("incrase-one");

let btnSubtractOne = document.getElementById("subtract-one");

let count = 0;

counter.innerHTML = count;

btnIncraseOne.addEventListener("click",incraseOne);
btnSubtractOne.addEventListener("click",subtractOne);

function incraseOne (){
    count++;
    counter.innerHTML = count 
};

function subtractOne (){
    count--;
    counter.innerHTML = count 
};


// Additional features at will

// Show additional content

let btnAdditionalContent = document.getElementById("show-additional-content");

let divAdditionalContent = document.getElementById("container-additional-content");

btnAdditionalContent.addEventListener("click",toggleAdditionalContent);

function toggleAdditionalContent(){
    divAdditionalContent.classList.toggle("show")
};


// Reset counter

let btnResetCounter = document.getElementById("reset");

btnResetCounter.addEventListener("click", resetCounter);

function resetCounter(){
    count = 0
    counter.innerHTML = count
}

// Input numeric value

let numberInput = document.getElementById("number-input")

// Addition 

let btnAdvAddition = document.getElementById("addition")

btnAdvAddition.addEventListener("click", advAddition)

function advAddition (){
    let result = count + Number(numberInput.value)
    counter.innerHTML = result 
    return count = result
}

// Subtraction

let btnAdvSubtraction = document.getElementById("subtraction")

btnAdvSubtraction.addEventListener("click", advSubtraction)

function advSubtraction (){
    let result = count - Number(numberInput.value)
    counter.innerHTML = result 
    return count = result
}

// Multiplication

let btnAdvMultiplication = document.getElementById("multiplication")

btnAdvMultiplication.addEventListener("click", advMultiplication)

function advMultiplication (){
    let result = count * Number(numberInput.value)
    counter.innerHTML = result 
    return count = result
}

// Division

let btnAdvDivision = document.getElementById("division")

btnAdvDivision.addEventListener("click", advDivision)

function advDivision (){
    let result = count / Number(numberInput.value)
    counter.innerHTML = result 
    return count = result
}

// Power

let btnAdvPower = document.getElementById("power")

btnAdvPower.addEventListener("click", advPower)

function advPower (){
    let result = count ** Number(numberInput.value)
    counter.innerHTML = result 
    return count = result
}