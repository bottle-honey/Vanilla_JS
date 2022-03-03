// id,class, 태그로 값을 가져올 수 있음
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event){
    event.preventDefault();//브라우저 기본 작동 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);
    // 문자열 표현 방법
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit",onLoginSubmit);
