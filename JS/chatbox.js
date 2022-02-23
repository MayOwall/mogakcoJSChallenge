const chatboxForm = document.querySelector("#chat-box form");
let nightmodeCount = 0;

function chatbotHighlighter() {
  const chatbotChat = document.querySelector("#chatbot-chat-box .chat");
  chatbotChat.style.boxShadow = `0 2px 10px #3800FF`;
  setTimeout(() => chatbotChat.style.boxShadow = `0 2px 5px rgb(182, 182, 182)`, 500);
};
function userChatHandler() {
  const userChat = document.querySelector(`#user-chat .chat`);
  const userInput = document.querySelector(`form input:first-of-type`);
  userChat.innerText = userInput.value;
}
function chatboxHandler(event) {
  event.preventDefault();
  const chatbotChat = document.querySelector("#chatbot-chat-box .chat");
  const userTextInput = chatboxForm.querySelector("input:first-of-type");

  if(userTextInput.value.includes(`안녕`)) {
    userChatHandler();
    userTextInput.value = ``;
    setTimeout(chatbotHighlighter, 800);
    setTimeout(() => chatbotChat.innerText = `안넝!!`, 800);
  }
  else if(userTextInput.value.includes(`반가`)) {
    userChatHandler();
    userTextInput.value = ``;
    setTimeout(chatbotHighlighter, 800);
    setTimeout(() => chatbotChat.innerText = `반가어!! 난 오워리아 🐶`, 800);
  }
  else if(userTextInput.value.includes(`나이트모드`) && userTextInput.value.includes(`꺼`)) {
    if(nightmodeCount === 2) {
      userChatHandler();
      setTimeout(() => chatbotChat.innerText = `ㅋㅋ 장난이얌. 나이트모드를 꺼주께!`, 800);
      setTimeout(chatbotHighlighter, 800);
      setTimeout(nightmodeOff, 1500);
      nightmodeCount = 0;
    } else {
      userChatHandler();
      setTimeout(() => chatbotChat.innerText = `머라구우~ 잘 안들려어ㅓ어!!`, 800);
      setTimeout(chatbotHighlighter, 800);
      nightmodeCount += 1;
    }
    userTextInput.value = '';
  }
  else if(userTextInput.value.includes(`나이트모드`)) {
    userChatHandler();
    setTimeout(() => chatbotChat.innerText = `나이트모드를 켜주께!`, 800);
    setTimeout(chatbotHighlighter, 800);
    setTimeout(nightmodeOn, 1500);
    userTextInput.value = ``;
  }
  else if(userTextInput.value.includes(`고마`)) {
    userChatHandler();
    setTimeout(chatbotHighlighter, 800);
    setTimeout(() => chatbotChat.innerText = `머, 이정도 가주구!! 😎`, 800);
  }
  else {
    userChatHandler();
    setTimeout(() => chatbotChat.innerText = `내가 알아들을 수 없눈 말이야 ㅜㅠ 다시 말 걸어주!!`, 800);
    setTimeout(chatbotHighlighter, 800);
  };
};


chatboxForm.addEventListener("submit", chatboxHandler);
