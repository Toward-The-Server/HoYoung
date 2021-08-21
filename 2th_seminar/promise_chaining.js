//! callback Hell - 가독성⇣, 실수 ↑ -> 유지보수 난이도 상승
/*
function cook(callback, timeout){
  setTimeout(callback,timeout);
}

cook(function () {
  cook(function ramenRecipe() {
    console.log('[라면 진행상황]');
    cook(function boilWater() {
      console.log('[라면] - 1. 물 끓이기 완료');
      cook(function putTheRamenAndSoupPowder() {
        console.log('[라면] - 2. 라면과 스프 넣기 완료 앞으로 3분간 끓이기');
        cook(function delayThreeMinute() {
          console.log('[라면] - 3. 3분간 대기완료 라면 완성');
        }, 3000);
      }, 500);
    }, 2000);
  }, 1000);  
}, 0);
*/

//@ Promise - 비동기 시점을 표현하여 비동기 처리에 용이(ES6부터)
