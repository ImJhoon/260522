const studentInfo = {
  이름: "재훈",
  나이: "64살",
  월급: 300_000_0,
};

//for-in => key에 대응되는 값을 의미
for (const key in studentInfo) {
  // let을 써도 상관없지만 const를 쓸 수 있으면 쓰자
  // 실수로 인한 값 변경(재할당) 방지
  // 코드의 의도와 가독성 (Modern JS Best Practice)
  console.log(key, studentInfo[key]);
}

const sports = ["축구", "농구", "배구", "야구"];
// key에 대응되는 값이 sport로 들어가기 때문에 인덱스가 출력
for (const sport in sports) {
  console.log(sport);
}

// value를 꺼내고 싶다면
for (const sport in sports) {
  console.log(sports[sport]);
}

// for-of => value에 대응되는 값을 의미

for (const sport of sports) {
  console.log(sport);
}
