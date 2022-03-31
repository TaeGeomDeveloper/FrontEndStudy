// CamelCase 낙타 표기법 theQucik


console.log("Hello");


// String(문자 데이터)
// 따옴표를 사용합니다.

let myName = "TaeGeom";
let email = 'alf6292@naver.com';
let hello = `Hello ${myName} ?!`

console.log(myName, email, hello);


// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.

let number = 123456;
let opacity = 1.57;

console.log(number, opacity);


// Boolean(불린 데이터)
// true, false 두 가지 값 밖에 없는 논리 데이터 입니다.

let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);


// undefined
// 값이 할당되지 않은 상태를 나타냅니다.

let undef;
let obj = {abc: 123};

console.log(undef);
console.log(obj.abc);
//console.log(obk.xyz);


// Null 
// 의도적으로 값이 비어있음을 나타냅니다.

let empty = null;
console.log(empty); // null


// Object (객체 데이터)
// 여러 데이터를 Key:Vqlue 형태로 저장합니다. 

let user = {

  // key : Value,
  name : 'TaeGeom',
  age : 27,
  isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);


// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다.

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// let 은 재활당이 가능하다.
// Const 는 재활당이 불가능하다.

