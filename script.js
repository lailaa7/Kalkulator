const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
// console.log(numbers)

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
       
        // updateScreen(event.target.value)
        // inputNumber(event.target.value)
    })
})

let  prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === 0 ){
        currentNumber = number
    } else{
        currentNumber += number 
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {       
        updateScreen(currentNumber)
        inputNumber(event.target.value)
    })
})

const operators = document.querySelectorAll(".operator")
// console.log(numbers)

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        // console.log('operator button is pressed')

        // inputNumber(currentNumber)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector(".equal-sign")
// console.log(numbers)

    equalSign.addEventListener("click", () => {
        calculate()
        updateScreen(currentNumber)
        // console.log('equal button is pressed')
        // inputNumber(currentNumber)
    })

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }

    currentNumber = result
    calculationOperator = ''
}
