const name = 'pixartive';
const color = ['#3E00FD', '#00FDFD', '#FFFF32', '#CEFF03', '#F82888', '#E30303'];
let i = 1;
const answer = document.getElementById("answer");
const button1 = document.getElementById("play");
const button2 = document.getElementById("reset");



function showAnswer() {
  answer.innerText = name.substr(0, i);
  answer.style.color = color[Math.floor(Math.random() * 6)];
  i++;
  if(i === 10) {
    button1.innerText = `That's my name!`;
    button1.disabled = true;
    button2.style.display = 'block';
  }
}

function resetAnswer() {
  answer.innerText = '';
  i = 1;
  button1.innerText =  `show my name`;
  button1.style.width = `10rem`;
  button1.disabled = false;
  button2.style.display = `none`;
};

function easterEgg() {
  answer.innerText = `🎉 Owall 🎉`;
  answer.style.color = `white`;
  button1.innerText = `You got my real name  👍`;
  button1.style.width = `15rem`;
  button1.disabled = true;
  button2.style.display = `block`;
}