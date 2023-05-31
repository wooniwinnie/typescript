// 객체란?
// 객체는 연관 배열 => 몇 개의 값을 모은 데이터이다.
// 여러 데이터를 한데 모아야 할 때 객체를 사용한다.
const objFooBar = {
  foo: 123,
  bar: "Hello, world!",
};
console.log(objFooBar);
console.log(objFooBar.foo);
console.log(objFooBar.bar);

// 콤마로 구분된 프로퍼티의 정의가 나열
// 프로퍼티 => 객체 안의 값 하나하나를 가리키는 명칭
// 프로퍼티 접근 => 객체 내용(프로퍼티)의 값을 얻는 것

// 객체 리터럴 : 기본 구문
// 객체 리터럴은 표현식의 일종이다.
// 문자열 리터럴을 사용하여 프로퍼티명 지정 가능 => 사용할 수 없는 문자열도 생성 가능

// const name = input ? input : "이름 없음";
// const user = {
//   name,
//   age: 20,
// };

// 프로퍼티 접근 : 값 취득과 대입
// 프로퍼티 접근이란, 값을 가져오거나 프로퍼티에 값을 대입하는 기능

const user = {
  name: "jiwoon",
  age: 20,
};
console.log(user.name);
console.log(user.age);
user.age = 30;
console.log(user.age);

// 객체 리터럴 : 전개 구문
// 객체를 만들 때 다른 객체의 프로퍼티를 복사할 수 있음
// 기존 객체를 확장해서 별도의 객체를 만들고 싶을 때 유용
// 전개 구문을 앞에 작성하면 에러가 남
// 하나의 객체 리터럴 안에서 여러 번 사용 가능
// 전개 구문은 프로퍼티의 복사라는 점 주의!
// 원본 객체의 프로퍼티를 변경해도 복사된 객체는 영향을 받지 않음
const obj1 = {
  bar: 456,
  baz: 789,
};

const obj2 = {
  foo: 123,
  ...obj1,
};

console.log(obj2);

const obj3 = {
  foo: 123,
  bar: 456,
};

const obj4 = {
  bar: -999,
  baz: -9999,
};

const obj5 = {
  ...obj3,
  ...obj4,
};

console.log(obj5);
console.clear();
// 객체는 어떤 경우에 같은가 => 명시적으로 복사하지 않으면 같다.
// 변수는 객체 그 자체가 아니라 다른 곳에 있는 객체의 실체를 가리키는 존재

const foo = { num: 1234 };
const bar = foo;
console.log(bar.num);
bar.num = 0;
console.log(foo.num);

// bar1은 foo1의 프로퍼티를 복사해서 얻어낸 새로운 객체에 해당
//
const foo1 = { num: 1234 };
const bar1 = { ...foo1 };
console.log(bar1.num);
bar1.num = 0;
console.log(bar1.num);
console.log(foo1.num);
