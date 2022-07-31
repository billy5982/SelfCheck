//node js 란? 비동기 기반이며, 앱웹을 만들기 위해 만들어졌다? 라고 이해해보자
//fs.readfile은 비동기적으로 파일 전체내용을 읽으며 총 3개의 전달인자를 받아서 실행된다.
//fs.readfile(path,[option(인코딩 방식을 의미함)],callback) 
//여기서 콜백은 파일을 읽고 난 후 비동기적으로 실행되는 콜백 함수를 전달한다. 
//콜백함수에는 두가지 매개변수가 존재하는데 (err,data) 에러가 발생하지 않으면, (null,data),에러가 발생하면 (err,null)
// fs.readFile("text.txt", "utf8", (err, data) => {
//     if (err) {// 파일을 읽고 난 후 세번째 인자가 실행되는데 에러가 발생되면
//       throw err;  // 에러를 던지고
//     }
//     console.log(data);//에러가 발생하지 않으면 콘솔에 데이터를 표시한다.
//   }
// )
const fs = require("fs"); // filesystem 모듈을 불러오는 메세지임

//함수에 읽기 파일을 전달하였을 때, 해당 데이터가 잘 받아졌는 지 확인하는 함수를 제작
const getDataFromFile = (filepath,callback) =>{
    
    fs.readFile(filepath,'utf-8',(err,data)=>{ // 이 함수는 fs.readFile이 읽어지고 나서 오류가 있는지 없는지 확인해주는 함수이다.(자체 실행됨)
        if(err){
            callback(err,null) //콜백이 실행되었을 때 해당 에러를 어디로 보내는지에 대한 결정이다.
        }
        callback(null,data);
    })

}
getDataFromFile('README.md', (err,data)=>{console.log(data)}); // 콜백함수는 fs.fileread가 끝난 후에
// const printString = (string) =>{ //printString 이란 함수는 string을 인자로 받아서 랜덤 시간후에 인자로 받은 string 출력한다.
//     setTimeout(()=>{
//         console.log(string);
//     },
//     Math.floor(Math.random()*100)+1);
// }

// const printAll = ()=>{ //printString 함수를 a,b,c 실행을 한다.
//     printString('A'); //시간이 랜덤이기 때문에 어떤게 먼저 끝날지 모른다.
//     printString('B'); // A->B->C를 순차적으로 실행하기 위해선 callback이 필요함. (하나 끝나면 다음함수가 시작되고, 다음함수가 끝나면 그 다음함수가 시작되게?)
//     printString('C');
// }



// const printstr = (str,callback) =>{
//     setTimeout(()=>{
//         console.log(str); // 일정 시간후에 인자로 받은 str을 실행하고,
//         callback(); // 콜백으로 전달된 함수를 실행한다.
//     }, Math.floor(Math.random()*100)+1)
// }

// const printAll = ()=>{
//     printstr("A",()=>{ // 함수를 실행했다, 일정시간후에 console에 인자를 출력하고, callback함수를 실행한다.
//         printstr("B",()=>{
//             printstr("C",()=>{})
//         })
//     })
// }
// printAll();

// const somethingGonnaHappen = callback =>{ // 애초에 함수를 정의할 때 기본 기능이 정의되었있다.
//     waitingUntilSomethingHappens(); // 이 비동기함수가 실행된다.

//     if(isSomethingGood){
//         callback(null, something); // 보통 에러를 앞에서 받는다
//     }
//     if(isSomethingBad){
//         callback(something,null); // 보통 에러를 뒤에서 받는다.
//     }
// }

// somethingGonnaHappen((err,data)=>{
// if(err){
//     console.log("Errr");
// }
// return data;
// }) // 해당 함수를 실행하면, waitingUntilSomething함수가 실행되고, if문에서 결과를 확인한 후에 인자로 전달된 콜백함수를 실행시킨다.