//@ 동기적(synchronous) write, read

const fs = require('fs');

//* -------------- write --------------

const numArr = [1, 2, 3, 4, 5];
const fileCommonName = 'syncText';

numArr.forEach((num) => {
  const fileName = fileCommonName + num;
  const data = `reserved message for the '${fileName}'`;
  fs.writeFileSync(`${fileName}.txt`, data);
  console.log(`file[${fileName}] write complete`);
})

//* -------------- read ----------------

numArr.forEach((num) => {
  const fileName = fileCommonName + num;
  const data = fs.readFileSync(`${fileName}.txt`);
  console.log(`file[${fileName}] with ${data}`);
})
