var fs = require('fs');

// 파일에 데이터를 씁니다.
fs.writeFile('./output.txt', 'Hello Wolrd!', function(err) {
  if(err) {
    console.log('Error' + err);
  }
  console.log('output.txt파일에 데이터 쓰기 완료.');
});