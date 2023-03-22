// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var click = document.getElementById("image")
var text = document.getElementById("t")
var names = ["littletimmykimmy", "t"]
var users = [{ name: "littletimmykimmy", password: "pas" }, {name:"t", password:"was"}]
var passwords = ["pas", "was"]
click.onclick = function () {
    text.innerHTML = "Something new"
}
console.log("work")
function Valid() {
    var username = document.getElementById("username")
    var err = document.getElementsByClassName("notice")
    err[0].classList.remove("suc")
    err[0].classList.remove("err")
    if (username.value.length < 1) {
        username.style.border = "1px solid red"
        err[0].innerHTML = "Username must be more than 1 character long."
        err[0].classList.add("err")
        console.log("work")
        return false
    }
    else {
        
        for (let i = 0; i < users.length; i++) {
            if (username.value == users[i].name) {
                if (password.value == users[i].password) {
                    err[0].innerHTML = "You're logged in!"
                    err[0].classList.add("suc")
                    //window.location.href = '@Url.Action("Contact","Home")'
                    $("#username").css("border", "1px solid green")
                    return false
                }
                err[0].innerHTML = "Password Inncorrect!"
                err[0].classList.add("err")
                return false 
            }
        }
        err[0].classList.add("name")
        err[0].innerHTML = "Name doesn't register!"
        return false
        
    }
    console.log(3)
}