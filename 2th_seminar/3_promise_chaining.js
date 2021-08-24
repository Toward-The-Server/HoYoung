//@ Promise
//* ES6에서 비동기 처리를 위해 도입, 비동기 시점을 명확하게 표현

//* pending --> fulfilled
/*
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
*/
//@ Promise Chaining

function cook(callback, timeout) {
  setTimeout(callback, timeout);
};

const ramenRecipe = function() {
  return new Promise((resolve, reject) => {
    cook(() =>{
      console.log('[라면 진행상황]')
      resolve(`[라면 만들기 시작]`);
    }, 1000)
  });
};

const boilWater = function(progress) {
  return new Promise((resolve, reject) => {
    console.log('[라면] - 1. 물 끓이기 시작');
    cook(() =>{
      resolve(`${progress} => 물끓이기`);
    }, 2000)
  });
};

const putTheRamenAndSoupPowder = function(progress) {
  return new Promise((resolve, reject) => {
    console.log('[라면] - 2. 라면과 스프 넣기 완료 앞으로 3분간 끓이기 시작');
    cook(() =>{
      resolve(`${progress} => 면과 스프 넣고 3분 끓이기`);
    }, 500)
  });
};

const delayThreeMinute = function(progress) {
  return new Promise((resolve, reject) => {
    console.log('[라면] - 3. 3분 대기 시작');
    cook(() =>{
      resolve(`${progress} => 라면 완성!`);
    }, 3000)
  });
};
//@ promise Chaining 사용 1번
/*
ramenRecipe()
  .then(function (progress) {
    return boilWater(progress)
  })
  .then(function (progress) {
    return putTheRamenAndSoupPowder(progress)
  })
  .then(function (progress) {
    return delayThreeMinute(progress)
  })
  .then(function (progress) {
    console.log(progress);
  })
*/
//@ promise Chaining 사용 2번
/* //? 화살표 함수를 이용한 표현
ramenRecipe()
  .then(progress => boilWater(progress))
  .then(progress => putTheRamenAndSoupPowder(progress))
  .then(progress => delayThreeMinute(progress))
  .then(progress => console.log(progress))
*/
//@ promise Chaining 사용 3번
//? 제일 간단하다.. 근데 이해하기 어렵다..
/*
ramenRecipe()
  .then(boilWater)
  .then(putTheRamenAndSoupPowder)
  .then(delayThreeMinute)
  .then(console.log)
*/