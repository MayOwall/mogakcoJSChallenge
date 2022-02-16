/*
타이머를 다시 만들어보자~~
*/


//1. 시간을 계산할 함수 짜기

//2. 시간을 패널에 표시할 함수 짜기.

//3. start, stop, reset에 적용할 함수 짜기.

//4. html dom 요소 불러오기

let hours = 0;
let minutes = 0;
let seconds = 0;
let t;

function tick() {
  seconds++;
  if(seconds === 60) {
    minutes++;
    seconds = 0;
    if(minutes === 60) {
      hours++;
      minutes = 0;
    };
  };
};

const timePannel = document.getElementById("time-panel");

function timeWrite() {
  tick();
  timePannel.innerText = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
  timerStart();
};

function timerStart() {
  t = setTimeout(timeWrite, 1000);
  document.getElementById("start").disabled = true;
};

function timerStop() {
  clearTimeout(t);
  document.getElementById("start").disabled = false;
};

function timerReset() {
  timePannel.innerText = `00 : 00 : 00`;
  hours = 0; minites = 0; seconds = 0;
};
