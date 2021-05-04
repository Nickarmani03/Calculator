import { addTheNumbers } from "./add.js";
import { subtractTheNumbers } from "./subtract.js";
import { multiplyTheNumbers } from "./multiply.js";
import { divideTheNumbers } from "./divide.js";

//reference to the first article from main.js
const buttonContainer = document.querySelector("#buttons");
const answerContainer = document.querySelector("#answer");

buttonContainer.innerHTML = `
<button id="add">Add</button>
<button id="subtract">Subtract</button>
<button id="multiple">Multiply</button>
<button id="divide">Divide</button>
`
const addButton = document.querySelector("#add")
addButton.addEventListener("click", (clickEvent) => {
    const sum = addTheNumbers(1500, 8500)
    answerContainer.innerHTML = sum
})

const subtractButton = document.querySelector("#subtract")
subtractButton.addEventListener("click", (clickEvent) => {
    const subtract = subtractTheNumbers(1000, 500)
    answerContainer.innerHTML = subtract
})

const multiplyButton = document.querySelector("#multiple")
multiplyButton.addEventListener("click", (clickEvent) => {
    const multiply= multiplyTheNumbers(20, 30)
    answerContainer.innerHTML = multiply
})

const divideButton = document.querySelector("#divide")
divideButton.addEventListener("click", (clickEvent) => {
    const divide = divideTheNumbers(1200, 600)
    answerContainer.innerHTML = divide
})
