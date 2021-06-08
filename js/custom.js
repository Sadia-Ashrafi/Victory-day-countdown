//html elements

const victory= document.getElementById('victory');
const day= document.getElementById('day');
const hr= document.getElementById('hr');
const min= document.getElementById('min');
const sec= document.getElementById('sec');


//get the time to be countdowned

const vicDay = new Date("Dec 16, 2021 00:00:00");

// create a function

function countDay(){
    const currentTime = new Date().getTime();
    const diff = vicDay - currentTime;


    const s = Math.floor((diff/1000) % 60);
    const m = Math.floor((diff/1000/60) % 60);
    const h = Math.floor((diff/1000/60/60) % 24);
    const d = Math.floor((diff/1000/60/60/24));

    sec.innerHTML = (s<10)? '0'+ s:s;
    min.innerHTML= (m<10)? '0'+ m:m;
    hr.innerHTML= (h<10)? '0'+ h:h;
    day.innerHTML= (d<10)? '0'+ d:d;
    
}

setInterval (countDay, 1000);


countDay();


