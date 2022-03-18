const USERTIME_KEY = "usertime";
const userTimeClock = document.querySelector("#userTime");

function SavingUserTime(){
    const CurrentUserTime = localStorage.getItem(USERTIME_KEY);
    if (CurrentUserTime === null){
        localStorage.setItem(USERTIME_KEY,"0");
    }
    else{
        localStorage.setItem(USERTIME_KEY,String(Number(CurrentUserTime)+1));
    }
}

function displayUserTime(){
    const CurrentUserTime = Number(localStorage.getItem(USERTIME_KEY));
    var hours = parseInt(CurrentUserTime/3600);
    var minutes = parseInt(CurrentUserTime%3600 / 60);
    var seconds = CurrentUserTime % 60;
    if(isNaN(hours)){
        hours = 0;
    }
    if(isNaN(minutes)){
        minutes = 0;
    }
    userTimeClock.innerText = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}
function getUserTime(){
    SavingUserTime();
    displayUserTime();
}
getUserTime();
setInterval(getUserTime,1000);  