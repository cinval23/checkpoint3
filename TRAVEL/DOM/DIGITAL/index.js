const clockHour = document.getElementById('hour')
const clockMinutes = document.getElementById('minutes')
const clockSeconds = document.getElementById('seconds')
const clockAmpm= document.getElementById('ampm')
const clockDate = document.getElementById('date')

function updateClock(){
    let hour = new Date().getHours()
    let mins = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm = 'AM'
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()

   // IF you want to update to 24 hours clock
   if(hour > 12){
    hour = hour - 12;
    ampm = 'PM'
   }

   hour = hour < 10 ? '0' + hour : hour
   mins = mins < 10 ? '0' + mins : mins
   sec = sec < 10? '0' + sec : sec

   clockHour.innerText = hour;
   clockMinutes.innerText = mins;
   clockSeconds.innerText = sec;
   clockAmpm.innerText = ampm;
   clockDate.innerText = `${day}/${month}/${year}`

   setTimeout(() =>{
    updateClock()
   },1000 )

  
}
updateClock()