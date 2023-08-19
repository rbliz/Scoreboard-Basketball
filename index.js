let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let addOne = 1
let addTwo = 2
let addThree = 3
let totalHome = 0
let totalGuest = 0
var minutes = 00
var seconds = 00
var milliseconds = 00
var appendMinutes = document.getElementById("minutes")
var appendSeconds = document.getElementById("seconds")
var appendMilliseconds = document.getElementById("milliseconds")
var interval


function add1Home() {
totalHome += addOne
scoreHome.textContent = totalHome
}

function add2Home() {
totalHome += addTwo
scoreHome.textContent = totalHome
}

function add3Home() {
     totalHome += addThree
scoreHome.textContent = totalHome
}


function add1Guest() {
totalGuest += addOne
scoreGuest.textContent = totalGuest
}

function add2Guest() {
totalGuest += addTwo
scoreGuest.textContent = totalGuest
}

function add3Guest() {
     totalGuest += addThree
scoreGuest.textContent = totalGuest
}


function startTimer(){
    milliseconds++
    if(milliseconds <= 9){
        appendMilliseconds.innerHTML = "0" + milliseconds
    }
    if(milliseconds > 9){
        appendMilliseconds.innerHTML = milliseconds
    }
    if(milliseconds > 99){
        seconds++
        if(seconds <= 9){
         appendSeconds.innerHTML = "0" + seconds
         }
         else{
          appendSeconds.innerHTML = seconds
              }
        
        milliseconds = 00
        appendMilliseconds.innerHTML = "0" + 0
       
              
        }
     if(seconds > 60){
        minutes++
        if(minutes <= 9){
        appendMinutes.innerHTML = "0" + minutes
            
        }
        if(minutes > 9){
        appendMinutes.innerHTML = minutes
            
        }
         seconds = 00 
        appendSeconds.innerHTML = "0" + 0
        milliseconds = 00
        appendMilliseconds.innerHTML = "0" + 0
             }
    }
    
    function start(){
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
            }
            
function pause(){
  
    clearInterval(interval)
            }
            
   function reset(){
    clearInterval(interval)
    minutes = "00"
    seconds = "00"
    milliseconds = "00"
    appendMilliseconds.innerHTML = milliseconds
    appendMinutes.innerHTML = minutes
    appendSeconds.innerHTML = seconds
   }     
    
   function incrementHome(){
       totalHome += addOne
scoreHome.textContent = totalHome
   }
   
function subtractHome(){
           totalHome -= addOne
scoreHome.textContent = totalHome
}

function incrementGuest(){
       totalGuest += addOne
scoreGuest.textContent = totalGuest
   }
   
function subtractGuest(){
          totalGuest -= addOne
scoreGuest.textContent = totalGuest
}
