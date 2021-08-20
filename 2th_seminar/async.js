//@ 1. 비동기식 Callback 함수
//* 자바스크립트 함수는 일급객체 --> 다른 함수의 인자 o, 반환값 o, 변수에 할당 o
/*
console.log('Hoyoung');

setTimeout(function(){
  console.log('I waited for 3 seconds');
}, 3000)

console.log('Server')
*/

//@ 2. Promise
//* ES6에서 비동기 처리를 위해 도입, 비동기 시점을 명확하게 표현

//* pending --> fulfilled
const promise = new Promise(function(resolve, reject){
  const age = 19;
  if (age > 20) {
    resolve(age);
  } else {
    reject(new Error('미성년자 입니다.'));
  }
});
promise.then(function (resolveData) {
    console.log(resolveData);
  });
promise.catch(function (err) {
    console.log(err);
  })