const chatboxForm = document.querySelector("#chat-box form");

function chatboxHandler(event) {
  event.preventDefault();
  console.log(`handler is working`);

  const userTextInput = chatboxForm.querySelector("input:first-of-type");
  console.log(userTextInput.value);
  if(userTextInput.value.includes(`안녕`)) {
    console.log(`안녀ㅇ!`);
    userTextInput.value = ``;
  }
  if(userTextInput.value.includes(`반가`)) {
    console.log(`나두 반가웡!`);
    userTextInput.value = ``;
  }
  if(userTextInput.value.includes(`나이트모드`)) {
    console.log(`나이트모드로 바꿔주께!`);
    userTextInput.value = ``;
  };
};


chatboxForm.addEventListener("submit", chatboxHandler);
