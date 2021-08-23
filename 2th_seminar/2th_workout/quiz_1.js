const members = require('./member')
function getFemale(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const female_Data = members.filter(people => people.gender ==="여")
      resolve(female_Data)
    }, 500)
  })
}

function getYB(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const YB_Data = members.filter(people => people.status ==="YB")
      resolve(YB_Data)
    }, 500)
  })
}

function getIOS(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const IOS_Data = members.filter(people => people.part ==='iOS')
      resolve(IOS_Data)
    }, 500)
  })
}

getFemale(members) //
  .then(members => getYB(members))
  .then(members => getIOS(members))
  .then(members => console.log(members))