console.log(a);
// undefined

var a = 'this is var';
console.log(a);
// this is var

let a = 'var은 중복 선언이 가능함!'
console.log(a);
//SyntaxError: Identifier 'a' has already been declared

a = 'let은 값 재할당도 가능함!';
console.log(a);
// var은 값 재할당도 가능함!

function x() {
  a = 'a is "function level scope" 이므로 이 문장은 출력되지 않음';
}
console.log(a);
// var은 값 재할당도 가능함!

x()
console.log(a);
// a is "function level scope" 이므로 이 문장은 출력되지 않음

