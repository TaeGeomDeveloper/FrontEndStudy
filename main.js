import random from './getRandom'

// 산술 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);


// 할당 연산자
const a = 2;
let b = 4;
b += 1;

console.log(b);


// 비교 연산자
const a_1 = 1;
const b_1 = 1;

console.log(a_1 === b_1);

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1));
console.log(a_1 !== b_1);


// 논리 연산자
const a_2 = 1 === 1;
const b_2 = 'AB' === 'AB'
const c = false;

console.log(a_2)
console.log(b_2)
console.log(c)

console.log('&&: ', a_2&& b_2 && c);
console.log('||: ', a_2 || b_2 || c);


// 삼항 연산자

const d = 1 < 2;

if(d) {
  console.log('참');
} else {
  console.log('거짓');
}


// 조건문 if

const r = random();

if(r === 0) {
  console.log('a is 0');
} else if (r === 2){
  console.log('a is 2');
}else {
  console.log('rest...');
}


// 조건문 switch

switch (r) {
  case 0: console.log('a is 0'); break;
  case 2: console.log('a is 2'); break;
  case 4: console.log('a is 4'); break;
}


// 반복문 For

const ulEl = document.querySelector('ul');

for(let i =0; i < 3; i++){
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`;
  if((i + 1) % 2 === 0) {
   // li.addEventListener('click', fucntion() {})
  }
  ulEl.appendChild(li);
}


// 변수 유효범위

function scope() {
  if( true) {
    const y = 123
    console.log(y)
  }
}

scope()


// 형 변환 (Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

const n_1 = 1
const n_2 = '1'

console.log(n_1 === n_2) // 2개말고 3개를 사용!!
