const arr = [1, 2, 3, 4, 5];

// LIFO (후입선출)
arr.push(6);
console.log(arr);
console.log(Object.keys(arr));
arr.pop();
console.log(arr);

// FIFO (선입선출)
arr.unshift(20); // 앞에서부터 집어넣기
console.log(arr);
arr.shift(); // 앞에서부터 빼기
console.log(arr);

// 배열의 시작점(인덱스)부터 갯수만큼 짜르고 자른 배열 리턴
arr.splice(1, 2);
console.log(arr);
