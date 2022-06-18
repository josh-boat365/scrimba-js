let first_input = 0
let second_input = 0
let result = document.getElementById('result')

function getInputValues() {
    // return {
    //     first_input :parseInt(document.getElementById('num-one').value),
    //     second_input : parseInt(document.getElementById('num-two').value)
    // }
    first_input = document.getElementById('num-one').value
    second_input = document.getElementById('num-two').value

    let num1 = parseInt(first_input)
    let num2 = parseInt(second_input)

    return [num1, num2]
}

function add() {
    let values = getInputValues()
    let res = values[0] + values[1]

    result.textContent = res
}


function subtract() {
    let values = getInputValues()
    let res = values[0] - values[1]

    result.textContent = res

}

function divide() {
    let values = getInputValues()
    let res = values[0] / values[1]

    result.textContent = res
}

function multiply() {
    let values = getInputValues()
    let res = values[0] * values[1]

    result.textContent = res
}