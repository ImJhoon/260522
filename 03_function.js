/* 
function (매개변수){
    return ...
}
*/

// 매개변수에 값을 넣는 것은 인자,인수에 값을 넣는 것

function greet(name) {
  return `${name}님 안녕하세요`;
}

//익명함수
const hello = function (name) {
  return `${name}님 안녕하세요`;
};

// 화살표 함수, ES6에서 도입된 함수 표현식 간결 단축 문법
const sqrt = (x) => {
  return x * x;
};

console.log(sqrt(3));

//기본값 매개변수, 매개변수에 default 값을 지정해주는 것
function studentInfo(name = "철수", age = "13") {
  return (name, age);
}

let a = 0;
console.log(a);

function myFunc() {
  console.log(a);
  a++;
  let b = 1;

  return b;
}

myFunc();
myFunc();
console.log(a);

function myFun2(a) {
  return a * 2;
}

// 매개변수가 더 가까이 있기 때문에 200 출력
// 블록 외부에 있는 네임스페이스 < 매개변수/내부에서 선언
console.log(myFun2(100));

function myFun3() {
  //함수의 return 값으로 객체 및 배열도 출력할 수 있음
  return [1, 2, 3];
}

console.log(myFun3());

function myFunc3() {
  if (Math.random() > 0.5) {
    return [1, 2, 3];
    //리턴은 출력만의 의미만 가지는 것은 아니고 break 의 역할도 수행한다.
    //현재 블록에서 리턴하게 되면 아래 코드가 실행되지 않고 종료
  }
  //else 역할을 수행하게 됨
  return { a: 1, b: 2, c: 2 };
}

// return이 정의되지 않은 함수를 console.log로 출력하면 return 의 디폴트 값으로 undefined로 설정됨
function test() {
  console.log("hu");
}

console.log(test());

