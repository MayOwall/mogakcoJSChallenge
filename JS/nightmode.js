const nightmodeButton = document.querySelector("#nightmode-button button");

function nightmodeOn() {
  const header = document.querySelector("header");
  const display = document.getElementById("chat");
  const chats = document.querySelectorAll("#chat-display .chat");
  const formButton = document.querySelector("#chat form input:nth-of-type(2)");
  const chatBox = document.getElementById("chat-box");

  document.body.style.background = `linear-gradient(to bottom, #000000, #333333)`;
  chatBox.style.background = `rgba(255, 255, 255, 0.123)`;
  header.style.background = `#444444`;
  display.setAttribute("style", "background: black;");
  display.style.boxShadow = `none`;
  for(let i = 0; i < chats.length; i++) chats[i].style.boxShadow = 'none';
  formButton.style.boxShadow = `none`;

  nightmodeButton.style.backgroundColor = `gray`;
  nightmodeButton.style.color = `white`;
  nightmodeButton.style.boxShadow = `none`;
  nightmodeButton.setAttribute(`onclick`, `nightmodeOff()`);
  nightmodeButton.innerText = `Off`;
};

function nightmodeOff() {
  const header = document.querySelector("header");
  const display = document.querySelector("#chat");
  const chats = document.querySelectorAll("#chat-display .chat");
  const formButton = document.querySelector("#chat form input:nth-of-type(2)");
  const chatBox = document.getElementById("chat-box");

  document.body.removeAttribute(`style`);
  chatBox.style.background = `url('/img/mayBackground.png')`;
  chatBox.style.backgroundSize = 'cover';
  header.removeAttribute(`style`);
  display.removeAttribute(`style`);
  for(let i = 0; i < chats.length; i++) chats[i].style.boxShadow = '0 2px 5px rgb(182, 182, 182)';
  formButton.style.boxShadow = `2px 2px 2px gray`;

  nightmodeButton.removeAttribute(`style`);
  nightmodeButton.setAttribute(`onclick`, `nightmodeOn()`);
  nightmodeButton.innerText = `On`;
}