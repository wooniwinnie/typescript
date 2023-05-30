// 함수 선언

// 문의 일종
// 4가지 구성 요소
// 1. 함수명 : 변수명과 동일하게 취급, 식별자
// 2. 반환 타입 : 타입 표기의 일종, 반환하는 값의 타입을 선언
// 3. 본문 : 호출됐을 때 실행되는 코드, 복수의 문 삽입 가능
// 4. 인수 목록: 함수의 인수

function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(5, 10));

// return 문 : 함수의 실행이 종료, 주어진 식은 함수의 반환 값

// min 부터 max까지 반복되는 숫자들을 합하는 함수 만들어봄

function sum(min: number, max: number): number {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(2, 9));

// 반환값이 없는 함수

// 반환값의 타입으로 void 타입 사용
// 인수 n을 받아 'Hello, world!'를 n회 출력하는 함수
function helloWorldNTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello, world!");
  }
}

helloWorldNTimes(10);

// void 타입을 명시함으로써 반환값이 없다고 선언
// 단, 반환값이 void 타입인 함수에도 return문 사용 가능 => 조기 반환
// return 문을 이용해서 조건 분기의 결과에 따라 함수의 실행을 그자리에서 중단시키는 방법
// 반환값이 있어도 조기 반환 가능
function helloWorldNTimes2(n: number): void {
  if (n >= 100) {
    console.log(`${n}번은 너무 많은뎁숑?`);
    return;
  }
  for (let i = 0; i < n; i++) {
    console.log("Hello, world!");
  }
}

helloWorldNTimes2(200);
console.clear();
// 함수 표현식

// 함수도 값의 일종
// 함수는 객체
// 함수 선언과 달리 호이스팅이 없음

type Human = {
  height: number;
  weight: number;
};
// const calcBMI = function (human: Human): number {
//   return human.weight / human.height ** 2;
// };
const calcBMI = function ({ height, weight }: Human) {
  return weight / height ** 2;
};

const jiwoon: Human = { height: 1.72, weight: 74 };
console.log(calcBMI(jiwoon));
console.log(jiwoon.height);
console.log(jiwoon.weight);

// 화살표 함수 표현식

const calcBMI2 = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};

console.log(calcBMI2(jiwoon));

// 화살표 함수 표현식 생략형

// 콜백 함수 생성할 때 사용

const calcBMI3 = ({ weight, height }: Human): void => {
  weight / height ** 2;
};

// 화살표 함수 표현식을 사용할 때 주의할 점

// 객체 리터럴을 반환값의 식으로 사용할 때 객체 리터럴을 () 로 감싸야 함
// 통상적인 화살표 함수의 본문을 감싸는 {}로 간주되기 때문

type Human2 = {
  height: number;
  weight: number;
};

type ReturnObj = {
  bmi: number;
};

const calcBMIObject = ({ height, weight }: Human2): ReturnObj => ({
  bmi: weight / height ** 2,
});

// 메서드 기법의 함수

// 프로퍼티를 정의하는 기법의 일종
// 객체 리터럴 안에서 사용 가능

const obj = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
};

// 통상적인 기법 + 화살표 함수

console.log(obj.double(100));
console.log(obj.double2(-50));

// 가변 인수 선언

// 함수가 임의의 수만큼 인수를 받을 수 있게 한다.
// rest 인수
// 반드시 배열 타입 또는 튜플 타입이어야 함
const sum2 = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum2(1, 10, 100));
console.log(sum2(123, 456));
console.log(sum2());

console.clear();

// rest 인수는 보통의 인수와 함께 사용 가능하지만, rest 인수는 맨 마지막에 와야 함
const sum3 = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum3(1, 10, 100));
console.log(sum3(123, 456));
// console.log(sum3());

console.clear();

// 함수를 호출할 때의 전개 구문
// ...식 구문을 함수 호출 인수에 사용가능
// 인수 목록에는 식 대신에 ...식 형태의 구문을 사용 가능
const sum4 = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

const nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(sum4(...nums));

const sum5 = (a: number, b: number, c: number) => a + b + c;
const nums2: [number, number, number] = [1, 2, 3];
console.log(sum5(...nums2));

console.clear();

// 선택적 인수 선언
// 선택적 인수란 넘겨도 되고 넘기지 않아도 되는 인수
// 다양한 상황에서 사용

const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));

// 콜백 함수
// 함수의 인수로 함수를 넘기는 것

type User = {
  name: string;
  age: number;
};
const getName = (u: User): string => u.name;
const users: User[] = [
  { name: "jiwoon", age: 30 },
  { name: "kaeun", age: 25 },
];

const names = users.map((u: User) => u.name);
const ages = users.map((a: User) => a.age);
console.log(names);
console.log(ages);
