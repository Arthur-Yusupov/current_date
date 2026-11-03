import dayjs from "dayjs"
const text = document.querySelector('h2')
const mainText = document.querySelector('h1')
setInterval(()=>{
    mainText.innerHTML = dayjs().format('DD/MM/YYYY')
    text.innerHTML = dayjs().format('HH:mm:ss')
}, 1)
