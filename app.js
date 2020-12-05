// import functions and grab DOM elements
const input1 = document.getElementById('input-1')
const input2 = document.getElementById('input-2')
const addButton = document.getElementById('add-button')
const subButton = document.getElementById('sub-button')
const multButton = document.getElementById('mult-button')
const divButton = document.getElementById('div-button')
const result = document.getElementById('result')

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const add = Number(input1.value) + Number(input2.value)
    result.textContent = add
})
subButton.addEventListener('click', () => {
    const sub = Number(input1.value) - Number(input2.value)
    result.textContent = sub
})
multButton.addEventListener('click', () => {
    const mult = Number(input1.value) * Number(input2.value)
    result.textContent = mult
})
divButton.addEventListener('click', () => {
    const div = Number(input1.value) / Number(input2.value)
    result.textContent = div
})
