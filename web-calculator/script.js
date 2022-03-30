
class Calculator {

    constructor(resultTextElement) {
        this.clear()
        this.resultTextElement = resultTextElement
    }

    clear() {
        this.result = ''
        this.saved = ''
        this.operation = undefined
        this.activeResult = 1
    }
    appendNumber(number) {
        if (this.activeResult == 1) {
            this.result = this.result.toString() + number.toString()
        }
    }

    chooseOperation(operation) {
        if (this.result === '') return
        if (this.saved !== '') {
            this.calculate()
        }
        this.operation = operation;
        this.saved = this.result;
        this.result = ''
        this.activeResult = 1

    }

    calculate() {
        let calculation
        const numberS = parseFloat(this.saved)
        const numberR = parseFloat(this.result)
        if (isNaN(numberS) || isNaN(numberR)) return
        switch (this.operation) {

            case '+':
                calculation = numberS + numberR
                break

            case '-':
                calculation = numberS - numberR
                break

            case 'X':
                calculation = numberS * numberR
                break

            case '/':
                calculation = numberS / numberR
                break

            default:
                return
        }

        this.result = calculation
        this.operation = undefined
        this.saved = ''
        this.activeResult = 0
    }

    updateResult(type) {
        if (type === 'clear') {
            this.resultTextElement.innerText = '0'
        }
        else if (type === 'operation') {
            this.resultTextElement.innerText = this.saved
        }
        else {
            this.resultTextElement.innerText = this.result
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const resultTextElement = document.querySelector('[data-result]')

const calculator = new Calculator(resultTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateResult()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateResult('operation')
    })
})

equalsButton.addEventListener('click', button => {
    calculator.calculate()
    calculator.updateResult()

})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateResult('clear')
})