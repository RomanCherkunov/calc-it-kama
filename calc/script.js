const arrOfButtons = Array.from(document.getElementsByClassName('button'))

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

const out = document.getElementById('out')

arrOfButtons.map(el => el.addEventListener('click', makeOperationButtonClick))

function makeOperationButtonClick(event) {
    const operation = event.target.innerText
    let res

 if(operation === '+') {
        res = +num1.value + +num2.value
    } else if(operation === '-') {
        res = +num1.value - +num2.value
    } else if(operation === '/') {
        res = +num1.value / +num2.value
    } else if(operation === '*') {
        res = +num1.value * +num2.value
    } 

    out.innerHTML = res

    if(num1.value === '') {
        out.innerHTML = 'enter numbers plz'
    }

    num1.value = ''
    num2.value = ''
}

