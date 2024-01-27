const startbtn = document.querySelector(".start"),
stopbtn = document.querySelector(".stop"),
resetbtn = document.querySelector(".reset"),
savebtn = document.querySelector(".save");

let hrhtml = document.querySelector('.hour'),
minhtml = document.querySelector('.minute'),
sechtml = document.querySelector('.second'),
mshtml = document.querySelector('.millisecond');

let hr = 0,
min = 0,
sec = 0,
ms = 0,
startTimer,
saveNum = 0;

startbtn.addEventListener("click",start);
stopbtn.addEventListener("click",stop);
resetbtn.addEventListener("click",reset);
savebtn.addEventListener("click",save);

function start(){
    startbtn.classList.add("active");
    stopbtn.classList.remove("active");

    startTimer = setInterval(()=>{
        ms++;
        if(ms < 10){
            ms = "0" + ms;
        }
        if(ms == 99){
            ms = 0;
            secFunc();
        }
        mshtml.innerHTML = ms;
        function secFunc(){
            sec++;
            if(sec < 10){
                sec = "0" + sec;
            }
            if(sec == 60){
                sec = 0;
                sechtml.innerHTML = "00";
                minFunc();
            }
            sechtml.innerHTML = sec;
        }
        function minFunc(){
            min++;
            if(min < 10){
                min = "0" + min;
            }
            if(min == 60){
                min = 0;
                minhtml.innerHTML = "00";
                hrFunc();
            }
            minhtml.innerHTML = min;
        }
    },10)
}

function stop(){
    startbtn.classList.remove("active");
    stopbtn.classList.add("active");
    clearInterval(startTimer);
}

function reset(){
    startbtn.classList.remove("active");
    stopbtn.classList.remove("active");
    clearInterval(startTimer);
    hrhtml.innerHTML =
    minhtml.innerHTML = 
    sechtml.innerHTML = 
    mshtml.innerHTML = "00";
    hr = min = sec = ms = 0;
    let boxs= (document.querySelector(".boxUl").innerHTML="");
}

function save(){
    saveNum++;
    let boxs= document.querySelector(".boxUl");
    boxs.innerHTML += `<li><span>${saveNum}.</span><span>${hrhtml.innerHTML}:${minhtml.innerHTML}:${sechtml.innerHTML}<span class="ms">:${mshtml.innerHTML}</span></li>`;
}