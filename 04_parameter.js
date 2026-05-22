// 매개변수 <- 값 : 인자, 인수 (arguments)

function f1(a, b, c) {
  console.log(a * 2, b * 2, c * 2);
}

f1(); //아무것도 안넣어도 작동을 한다
f1(1, 2); //일부만 넣어도 작동을 한다
f1(1, 2, 3, 4); //넘치게 넣어도 작동을 한다, 무시할 뿐

function f2(a = "기본값1", b = "기본값2", c = "기본값3") {
  return `${a} ${b} ${c}`;
}

console.log(f2());
console.log(f2("수정값1", "수정값2"));

function f3() {
  //권장x
  console.log(arguments);
}

f3();
f3(1, 2, 3, 4, 5);

function f4(a, ...b) {
  console.log("a", a);
  console.log("b", b);
}

f4(1);
f4(1, 2);
f4(1, 2, 3, 4, 5);

function f5(props) {
  // {a: ?, b: ?, c: ?}
  console.log(`props.a: ${props.a}`);
  console.log(`props.b: ${props.b}`);
  console.log(`props.c: ${props.c}`);
}
// f5(); // {} / undefined -> x
f5({ a: 10 });
