const form = document.querySelector('form')
const btn = document.querySelector('button')
form.onsubmit = calculate

function calculate(event) {
  event.preventDefault()
  const num1 = form.querySelector('#num1');
  const operator = form.querySelector('#operator');
  const num2 = form.querySelector('#num2');
  const out = form.querySelector('output');
  if (operator.value == '+') {
    out.innerHTML = +num1.value + +num2.value
  } else if (operator.value == '-') {
    out.innerHTML = +num1.value - +num2.value
  } else if (operator.value == '*') {
    out.innerHTML = +num1.value * +num2.value
  } else if (operator.value == '/') {
    out.innerHTML = +num1.value / +num2.value
  }
}