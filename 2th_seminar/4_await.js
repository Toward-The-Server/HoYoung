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

async function ramen() {
  const first = await ramenRecipe();
  const second = await boilWater(first);
  const third = await putTheRamenAndSoupPowder(second);
  const clear = await delayThreeMinute(third);
  console.log(clear);
}

ramen()