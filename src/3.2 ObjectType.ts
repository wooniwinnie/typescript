// 객체의 타입 => 객체를 나타내는 타입
// 객체 타입 사용법

const fooBar: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: "Hello, World!",
};

console.log(fooBar);

// type 문으로 타입에 별명 붙이기
// type 문 => 타입명을 선언하는 문
// type문을 이용해서 별명을 붙이는 것이 정석
// type문으로 타입명을 만드는 구문은 타입명을 쓰는 곳보다 뒤에 있어도 상관없음
type FooBarObj = {
  foo: number;
  bar: string;
};

const fooBarObj: FooBarObj = {
  foo: 123,
  bar: "Hello",
};

// interface 선언으로 객체 타입 선언하기
// type문 => 임의의 타입에 별명 선언, interface => 객체 타입뿐
// type문만 사용해도 문제는 없음
interface FooBarObj2 {
  foo: number;
  bar: string;
}
const fooBarObj2: FooBarObj2 = {
  foo: 456,
  bar: "hihi",
};

// 인덱스 시그니처 => 임의 프로퍼티명을 허용하는 타입
// 어떠한 이름의 프로퍼티도 받아들이는 성질

type PriceData = {
  [key: string]: number;
};
const data: PriceData = {
  apple: 220,
  coffee: 120,
  lunch: 500,
};
// 새로운 프로퍼티를 만들어 대입 가능
data.chicken = 250;
// data.점심 = number 타입 이어야 함, [key: string]이기 때문!
// data.점심 = "foo";

console.clear();

// 선택적 프로퍼티 선언
// 있어도, 없어도 되는 프로퍼티
type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};
const myObj = { foo: true, bar: false };
const myObj2 = { foo: true, bar: false, baz: 123 };
const myObj3 = { foo: true, bar: false, baz: "sdf" };
console.log(myObj);
console.log(myObj2);
console.log(myObj3);

// 읽기 전용 프로퍼티 선언
// readonly를 붙여 선언 => 컴파일러가 추가적인 검사를 수행

type MyObj2 = {
  readonly foo: number;
};
const obj6: MyObj2 = {
  foo: 123,
};
// obj6.foo = 0;

// typeof 키워드로 변숫값 얻기
// 타입을 나타내는 특수한 기법
// 남용하지 말것
const num: number = 0;
type T = typeof num;
const foo2: T = 123;
