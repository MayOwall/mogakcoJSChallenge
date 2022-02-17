# mogakcoJSChallenge
/*
객체(object) :
  프로퍼티 : 객체의 속성
  값 : 각 프로퍼티에 대한 값
  프로퍼티 참조 방법
    1. 객체.프로퍼티이름;
    2. 객체["프로퍼티이름"];
  프로퍼티 추가 방법
    객체를 참조하는 식으로 새로운 값을 넣어버리면 됨.
    ex) 객체.새로운프로퍼티 = 새로운값;
  프로퍼티 삭제 방법
    delete활용.
    delete 객체.프로퍼티;
  
  객체를 이용한 메서드 작성 방법
  function Profile(name, birthday, Id) {
    this.name = name;
    this.birthday = birthday;
    this.Id = Id;
  };
  const userProfile = new Profile("owall", "0508", "pixartive");

  *name/ birthday/ Id : 매개변수
  *this : 이것의(여기서는 해당 함수를 가리킴)
  *new : 생성자 함수. 새로운 매개변수를 지닌 함수를 생성할 때 사용. 재사용성에 의의를 두고 있음.
*/
