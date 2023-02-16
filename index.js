const loginBtn = document.getElementById("loginBtn")
const signupBtn = document.getElementById("signupBtn")
const orderedKebab = document.getElementById("orderedKebab")
const orderedPizza = document.getElementById("orderedPizza")
const orderedKhinkali = document.getElementById("orderedKhinkali")

loginBtn.addEventListener('click', () => {
    alert("User logged in!")
})
signupBtn.addEventListener('click', () => {
    const name = prompt("Enter your username: ")
    const password = prompt("Enter your password: ")
    console.log(`${name}, ${password}`)
})
orderedKebab.addEventListener('click', () => {
    console.log("The user ordered a kebab")
})
orderedPizza.addEventListener('click', () => {
    console.log("The user ordered a pizza")
})
orderedKhinkali.addEventListener('click', () => {
    console.log("The user ordered a khinkali")
})