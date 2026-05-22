// var : 함수 스코프 (함수로 만들어진 블록에서만 격리)
// let, const : 블록 스코프 (블록 단위 내부에서 선언된 변수는 외부에서 호출 불가능)

//호이스팅 발생
console.log(v1);
// 너무 밖에 있어서 누구나 접근할 수 있으면 : 전역변수
let v3 = "나는 밖 let이야";

{
  //외부에서 접근 못하는 좁은 스코프를 가지고 있는 변수 : 지역 변수
  console.log("안녕 나는 블록아야!");
  //var는 함수 스코프기 때문에 블록 밖에서도 호출 가능
  var v1 = "나는 var야";
  //let은 블록 스코프여서 블록 밖에서 호출 불가능
  let v3 = "나는 let이야";
}

// 블록 스코프는 블록 밖에서 선언된 결과물을 전달할 수 없음
console.log(v3);

for (let i = 0; i < 5; i++) {
  // i는 let으로 선언된 변수기 때문에 for 문 스코프 밖에서 호출할 수 없다
  console.log(i);
}

//console.log(i) // ReferenceError : i is not defined
