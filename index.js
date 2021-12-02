const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const millisecondEl = document.querySelector('.millisecond')

// Button 
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')


let hour = 00,
minute = 00,
second = 00,
millisecond = 00,
interval




// listenners Buttons

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clear()
  

})

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

// functions
function startTimer() {
    millisecond++ 
    if (millisecond < 9) {
        millisecondEl.innerText = '0' + millisecond
    }

    if (millisecond > 9) {
        millisecondEl.innerText = millisecond
    }

    if (millisecond > 99) {
        second++
        secondEl.innerText = '0' + second
        millisecond = 0
        millisecondEl.innerText = '0' + millisecond
    }

    if (second < 9) {
        secondEl.innerText = '0' + second
    }

    if (second > 9) {
        secondEl.innerText = second
    }

    if (second > 59) {
        minute++
        minuteEl.innerText = '0' + minute
        second = 0
        secondEl.innerText = '0' + second
    }

    if (minute < 9) {
        minuteEl.innerText = '0' + minute
    }

    if (minute > 9) {
        minuteEl.innerText = minute
    }

    if (minute > 59) {
        hour++
        hourEl.innerText = '0' + hour
        minute = 0
        minuteEl.innerText = '0' + minute
    }
} 

function clear() {
    hour = 00,
    hourEl.innerText = '0' + hour
    minute = 00,
    minuteEl.innerText = '0' + minute
    second = 00,
    secondEl.innerText = '0' + second
    millisecond = 0
    millisecondEl.innerText= '0' + millisecond
}





 