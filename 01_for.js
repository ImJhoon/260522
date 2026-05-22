// for (초기식; 조건식; 증감식)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 배열 순회
const arr = ["축구", "농구", "배구", "야구"];

for (let i = 0; i < arr.length; i++) {
  // 0부터 시작해서 길이 미만으로 조건식을 작성
  // 1부터 시작을 하면 모든 조건이 '충족' -> 전체 길이 이하여야 모든 원소/요소를 찾을 수 있음
  // 인덱스가 0부터 시작하기 때문에 초기 변수 값도 0에서 시작하는 편이..
  if (arr[i] == "배구") {
    continue;
  }

  console.log(arr[i]);
}

// 역방향 순회
for (let i = arr.length; i > 0; i--) {
  console.log(arr[i - 1]);
}

// 무한반복
// for (;;){
//     // for의 무한반복
//     console.log("출력");
// }

// 중첩 for문
// 블록스코프 -> 하위 {} 에서는 상위의 변수/상수와 같은 범위를 가짐

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i ${i}, j ${j}`);
  }
}

//표 형태의 데이터를 탐색할 때 (행렬)
const matrix = [
  [1, "ja", "축구"],
  [2, "sw", "코딩"],
  [3, "ba", "야구"],
];

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}