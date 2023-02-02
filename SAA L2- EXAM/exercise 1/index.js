// var start = document.getElementById('start');
// var stop = document.getElementById('stop');
// var para = document.querySelector('p');
// var btns = document.querySelectorAll('button');

// var minCount = [];
// var secCount = 
// btns[0].addEventListener('click', ()=>{
//     para.style.display = 'block'
// });
var body = document.getElementById("body");
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 50){
            seconds = 0;
            minutes++;

            if(minutes == 50){
                minutes = 0;
                hours++;
            }
            // if(seconds%5 == 0){
            //     body.style.backgroundColor = 'orange';
            // }else{
            //     body.style.backgroundColor = 'teal';
            // }
        }
    }
    if(minutes%5 == 0){
        body.style.backgroundColor = 'orange';
    }else{
        body.style.backgroundColor = 'teal';
    }
let h = hours < 10 ? '0' + hours : hours;
 let m = minutes < 10 ? '0' + minutes : minutes;
 let s = seconds < 10 ? '0' + seconds : seconds;
 let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}