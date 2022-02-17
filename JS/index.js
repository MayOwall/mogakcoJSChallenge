function movieInfo(name, year, story) {
  this.name = name;
  this.year = year;
  this.story = story;
};



const totoro = new movieInfo(`My neighbor ToToro`, `1988`, `일본 농촌의 어린 두 자매 사츠키와 메이가 숲의 요정 토토로를 만나서 판타지를 경험하게 되는 이야기`);

const spirited = new movieInfo(`Spirited Away`, '2001', `열 살이 된 초등학생 치히로는 부모님과 함께 새로 이사하는 곳으로 차를 타고 이동하다가 아버지가 길을 잘못 들어 어떤 터널 앞에 도착하게 된다. 치히로는 좋지 않은 느낌에 돌아가자고 하지만 아버지의 주장으로 터널 안으로 들어가게 되고, 그 부터 벌어지는 기이한 이야기`);

const mononoke = new movieInfo(`Mononoke Hime`, `2003`, `대자연의 숲과 산을 짓밟아서 자신의 터전을 넓히려는 인간들과 인간의 욕심때문에 분노의 재앙신으로 변한 멧돼지를 비롯한 대자연과의 처절한 사투. 그 전쟁의 중심에서 자연의 편에 선 '원령공주'와 재앙신의 원인을 찾아 타타라 마을의 숲으로 들어온 '아시타카'의 이야기`);

const castle = new movieInfo(`Castle in the Sky`, `1986`, `하늘을 날아다니는 성 라퓨타 제국과 그 성을 날아다닐 수 있게 하는 전설의 비행석(石)을 둘러싼 '시타'와 '파즈'의 모험을 그린 이야기`);

const section = document.querySelector("section");
const poster = document.querySelector("#article1 img");
const title = document.getElementById("info-name");
const year = document.getElementById("info-year");
const story = document.getElementById("info-story");

function show() {
  poster.style.visibility = `visible`;
  document.querySelector("#info").style.visibility = `visible`;
};

function button1() {
  show();
  section.style.backgroundImage = `url(/IMG/totoroWall.png)`;
  poster.src = `IMG/totoroPoster.png`;
  title.innerText = totoro.name;
  year.innerText = totoro.year;
  story.innerText = totoro.story;
};

function button2() {
  show();
  section.style.backgroundImage = `url(/IMG/spiritedWall.png)`;
  poster.src = `IMG/spiritedPoster.jpg`;
  title.innerText = spirited.name;
  year.innerText = spirited.year;
  story.innerText = spirited.story;
};

function button3() {
  show();
  section.style.backgroundImage = `url(/IMG/monoWall.png)`;
  poster.src = `IMG/monoPoster.jpg`;
  title.innerText = mononoke.name;
  year.innerText = mononoke.year;
  story.innerText = mononoke.story;
};

function button4() {
  show();
  section.style.backgroundImage = `url(/IMG/castleWall.png)`;
  poster.src = `IMG/castlePoster.jpg`;
  title.innerText = castle.name;
  year.innerText = castle.year;
  story.innerText = castle.story;
};