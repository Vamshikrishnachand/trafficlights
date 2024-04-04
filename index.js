let stopbutton = document.getElementById("stop_button")
let readybutton = document.getElementById("ready_button")
let gobutton = document.getElementById("go_button")
let stoplight = document.getElementById("stoplight")
let readylight = document.getElementById("readylight")
let golight = document.getElementById("golight")

function turnOnRed(){
    stopbutton.style.backgroundColor = "#cf1124"
    readybutton.style.backgroundColor = "#4b5069"
    gobutton.style.backgroundColor = "#4b5069"
    stoplight.style.backgroundColor = "#cf1124"
    readylight.style.backgroundColor = "#4b5069"
    golight.style.backgroundColor = "#4b5069"
}

function turnOnYellow(){
    stopbutton.style.backgroundColor = "#4b5069"
    readybutton.style.backgroundColor = "#f7c948"
    gobutton.style.backgroundColor = "#4b5069"
    stoplight.style.backgroundColor = "#4b5069"
    readylight.style.backgroundColor = "#f7c948"
    golight.style.backgroundColor = "#4b5069"
}

function turnOnGreen(){
    stopbutton.style.backgroundColor = "#4b5069"
    readybutton.style.backgroundColor = "#4b5069"
    gobutton.style.backgroundColor = "#199473"
    stoplight.style.backgroundColor = "#4b5069"
    readylight.style.backgroundColor = "#4b5069"
    golight.style.backgroundColor = "#199473"
}

