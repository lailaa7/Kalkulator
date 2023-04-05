const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number, operator) => {
    calculatorScreen.value = number, operator
}

const numbers = document.querySelectorAll(".number")
// console.log(numbers)

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

let  prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0' ){
        currentNumber = number
    } else{
        currentNumber += number 
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {       
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")
// console.log(numbers)

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // inputOperator(event.target.value)
        // updateScreen(currentNumber)
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
        // console.log(event.target.value)
    })
})

const equalSign = document.querySelector(".equal-sign")
// console.log(numbers)

    equalSign.addEventListener("click", () => {
        calculate()
        updateScreen(currentNumber)
        // console.log('equal button is pressed')
    })

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }

    currentNumber = result
    calculationOperator = ''
}

const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', (event) => {
    if(prevNumber != "") {
        result = prevNumber / 100
        prevNumber = result
    }
    if(prevNumber != "" && currentNumber != "" && operators != "") {
        result = result / 100
    }
    console.log(event.target.value)
    updateScreen(result)
})

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}