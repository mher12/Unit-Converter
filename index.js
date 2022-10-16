/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const meter = 3.2808
const liter = 0.2642
const kilogram = 2.2046

const inputTextBox = document.getElementById("input-el")
const convertButton = document.getElementById("convert-btn")

const lengthEl= document.getElementById("length-el")
const volumeEl= document.getElementById("volume-el")
const massEl= document.getElementById("mass-el")


convertButton.addEventListener("click", function(){
    let baseValue = inputTextBox.value     
     
    lengthEl.textContent = 
    `${baseValue} meters = ${(baseValue * meter).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meter).toFixed(3)} meters
    `
    volumeEl.textContent =
    `${baseValue} liters = ${(baseValue * liter).toFixed(3)} gallons | 
    ${baseValue} gallons = ${(baseValue / liter).toFixed(3)} liters
    `  
    massEl.textContent = 
    `${baseValue} kilos = ${(baseValue * kilogram).toFixed(3)} pounds | 
    ${baseValue} pounds = ${(baseValue / kilogram).toFixed(3)} kilos
    `
}
)




