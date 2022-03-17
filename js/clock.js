const clock = document.querySelector("#clock");


function CurrentTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const time = `${hours}:${minutes}:${seconds}`;
    clock.innerText = time;
}
//setInterval : 매 ms 간격으로 함수 실행
//setTimeout : ms 후에 함수 실행

CurrentTime();
setInterval(CurrentTime,1000);