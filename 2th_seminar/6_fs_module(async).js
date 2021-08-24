//@ 비동기적(asynchronous) write, read
const fs = require('fs');

//* write

const numArr = [1, 2, 3, 4, 5];
const fileCommonName = 'syncText';

numArr.forEach((num) => {
  const fileName = fileCommonName + num;
  const data = `reserved message for the '${fileName}'`;
  fs.writeFile(`${fileName}.txt`, data, () => {
    console.log(`file[${fileName}] write complete`);
  });
});
//* read

numArr.forEach((num) => {
  const fileName = fileCommonName + num;
  fs.readFile(`${fileName}.txt`, (err, data) => {
    console.log(`file[${fileName}] with ${data}`);
  });
});