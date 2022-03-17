const clock = document.querySelector("#clock");


function CurrentTime(){
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = time;
}
//setInterval : 매 ms 간격으로 함수 실행
//setTimeout : ms 후에 함수 실행

CurrentTime();
setInterval(CurrentTime,1000);