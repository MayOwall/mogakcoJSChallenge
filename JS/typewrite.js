const asideText = document.querySelector("#todo-box p");
const typewriter = new Typewriter(asideText, {loop: true});

typewriter.typeString("안녕하세요~")
.pauseFor(1000)
.deleteAll()
.typeString("감사해요~")
.pauseFor(1000)
.deleteAll()
.typeString("잘있어요~")
.pauseFor(1000)
.deleteAll()
.typeString("다시 만나요~~")
.pauseFor(1000)
.start();