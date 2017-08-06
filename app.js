var hourTens = document.querySelector('.hour-tens');
var hourOnes = document.querySelector('.hour-ones');
var minuteTens = document.querySelector('.minute-tens');
var minuteOnes = document.querySelector('.minute-ones');


function setDate(){
    const now = new Date();
    
    
    var mins = now.getMinutes();
    var minString = mins.toString();
    minsArray = minString.split("");
    var minTensNum = `<p class="time minTensNum">${minsArray[0]}</p>`;
    var minOnesNum = `<p class="time minOnesNum">${minsArray[1]}</p>`;
    minuteTens.innerHTML = minTensNum;
    minuteOnes.innerHTML = minOnesNum;

    
    var hour = now.getHours();
    var hourString = hour.toString();
    if(hour > 12){
        hour = hour - 12;
        hourString = hour.toString();
        hourString = "0" + hourString;
    }

    console.log(hourString);

}

setInterval(setDate, 60000);

setDate();