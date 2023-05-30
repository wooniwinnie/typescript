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
