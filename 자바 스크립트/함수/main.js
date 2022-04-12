
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


// 화살표 함수
// () => {} vs functino () {}

const double = function (x) {
  return x * 2;
}
console.log('double : ',double(7));

const doubleArrow = (x) => x * 2;
console.log('doubleArrow : ', doubleArrow(7));

const textArrow = (x) =>({
  name : 'Taegeom'
})
console.log('textArrow : ', textArrow(7));



// 즉시 실행 함수
// IIFE

const n = 7
function doubleIIFE() {
  console.log(n * 2)
}

doubleIIFE();

(function () {
  console.log(n * 2)
})();

(function () {
  console.log(n * 2)
}());


// 호이스팅(Hoisting)
// 함수 선언부가 유효 범위 최상단으로 끌어올려지는 현상

const num = 5;

doubleHoisting()

function doubleHoisting() {
  console.log(num * 2);
}


// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// const timer = setTimeout(() => {
//   console.log('Taegeom');
// },3000)


// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//   clearTimeout(timer)
// })


// 콜백(Callback) 
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(CB) {
  setTimeout(() => {
    console.log('tageom')
    CB()
  },3000)
}
timeout(() => {
  console.log('Done!')
});