const form = document.querySelector("form");

function consoleLog(event) {
  event.preventDefault();

  const num = document.querySelector("input").value;

  if(isNaN(Number(num))) {
    alert("빈칸에는 숫자만 써 주세요.");
  } else {
    for(let i = 1; i <= Number(num); i++) {
      console.log(i);
    };
  };
};


form.addEventListener("submit", consoleLog);