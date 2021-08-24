setInterval(() => {
    a = new Date();
    hour = a.getHours()
    min  = a.getMinutes()
    sec  = a.getSeconds()

    if (sec < 10){
        sec = "0"+a.getSeconds()
    }
    if (min < 10){
        min  = "0"+a.getMinutes()
    }

    time = hour + ':' + min + ':' + sec;
    date = a.toLocaleDateString();
    
    document.getElementById('time').innerHTML = "Time is: "+time
    document.getElementById('date').innerHTML = "Date is: "+date

}, 1000);