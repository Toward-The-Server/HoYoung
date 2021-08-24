
const fs = require('fs');
const crypto = require('crypto');

const fileName = 'hoaeng_password'
const my_password = 'sm@123123'

const make_password = function (password) {
  return new Promise((resolve, reject) => {
    console.log("암호 암호화 시작")
    crypto.randomBytes(64, (err, buf) => {
      const salt = buf.toString('base64');
      crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) =>{
        console.log(`암호화 완료 \npassword : ${key.toString('base64')}`);
        resolve(key.toString('base64'));
      });
    });
  });
};

const make_file = function (salted_word) {
  fs.writeFile(`${fileName}.txt`, salted_word, () => {
    console.log(`file[${fileName}] write complete`);
  });
}

async function make() {
  const first = await make_password(my_password);
  const second = await make_file(first);
  console.log("암호화 파일 생성완료")
}
make()