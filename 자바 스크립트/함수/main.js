
// hello 함수 선언
function helloFunc(){
  //실행 코드
  console.log(1234);
}

// return 함수 선언
function returnFunc(){
  return 123;
}


// 함수 호출
helloFunc();  // 1234

let a = returnFunc();

console.log(a);



// Sum 함수 선언

function sum(a,b){
  return a + b;
}

// 재사용
let d = sum(1,2);
let b = sum(7,12);
let c = sum(2,4);

console.log(d,b,c);