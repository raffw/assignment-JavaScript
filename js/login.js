let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let loginButton = document.getElementById('loginButton')
let regButton = document.getElementById('regButton')
let logoutButton = document.getElementById('logoutButton')
let form = document.getElementById('form')

let admin = document.getElementById('admin')
let basic = document.getElementById('basic')

admin.style.display = "none"
basic.style.display = "none"
logoutButton.style.display = "none"

function onLogin (){
    localStorage.setItem("username", usernameInput )
    logoutButton.style.display = "block"
    if (usernameInput.value == "admin" && passwordInput.value == "admin123"){
        localStorage.setItem("role", "admin")
        form.style.display = "none"
    } else {
        localStorage.setItem ("role", "basic")
    }
}

if(localStorage.getItem('username')) {
    logoutButton.style.display = "block"
    form.style.display = "none"
    if(localStorage.getItem('role') == "admin"){
        admin.style.display = "block"
        basic.style.display = "none"
    } else {
        admin.style.display = "none"
        basic.style.display = "block"
    }
}



function onLogout (){
    localStorage.clear()
    location.reload()
}