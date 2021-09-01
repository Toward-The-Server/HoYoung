console.log(a);
// ReferenceError: Cannot access 'a' before initialization

const a = 'this is const';
console.log(a);
// this is const

//const a = 'const은 중복 선언이 안 됨!'
console.log(a);
//SyntaxError: Identifier 'a' has already been declared

a = 'const은 값 재할당도 안 됨!';
console.log(a);
// TypeError: Assignment to constant variable.

function x() {
  a = 'a is "block level scope" 이므로 이 문장은 출력되지 않음';
}
console.log(a);
// this is const

const b;
//SyntaxError: Missing initializer in const declaration
