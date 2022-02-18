/*
이벤트 : 사용자의 행동, 웹상의 변화.
이벤트 생성 : 이벤트에 따른 웹의 반응.
이벤트와 이벤트 연결방법 :
  - HTML에 직접 연결(onclick 등)
  유지보수에 어려우므로 직접 연결은 그다지 추천되지 않음.
  - JS에서 작성 후 HTML에 연결(addEventListener 등)

다중 이벤트를 순차대로 확인하기위한 콜백 :
  setTimeout(함수, 시간) : 시간만큼 지연되여 함수가 실행됨.
*/

const button = document.querySelector("button");

function write() {
  const string = document.querySelector("div:first-of-type");
  const phoneNum = document.querySelector("div:nth-of-type(2)");
  
  string.style.display = `block`;
  phoneNum.style.display = `block`;
  button.style.display = `none`;
};

function call() {
  setTimeout(write, 2000);
};

button.addEventListener("click", call);