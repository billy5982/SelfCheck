'use strict'
//promise를 이용한 콜백
const fs = require('fs');
const getFile = (filepath) =>{ // 콜백을 사용했을 떄는 인자를 filepath와 callback을 받아서 실행시 콜백함수를 기재해줬는데 promise를 사용하면 비동기 작업을 프로미스 안에 넣어주고
    //resolve와 reject로 성공여부와 실패여부를 가르면 된다. 그리고 함수 실행 밑에 .then으로 resolve에 해당하는 함수를 적어주면됨. 리턴값은 then을 통해서 체이닝이 될기도함.
    return new Promise((resolve,reject)=>{ // promise는 정의 될시 바로 시작이 된다. getFile이 시작되고 return newPromise가 되면 별도에 호출없이 시작됨.
        fs.readFile(filepath,'utf-8',(err,data)=>{
            if(err){ //err가 없으면 null이되어 if문에서 나가게됨
            reject(err);
            }else{
            resolve(data);
   } })
})
}
getFile('README.md')
.then((data)=>{
   return data;
}).then((dat)=>{
    console.log(dat); // 앞에 then의 리턴값은 이번함수에 전달인자로 사용됨README.md
    dat = 'hi'; 
    console.log(dat);
}).catch((err,data)=>{
    console.log(data);
});

//Promise : 콜백 핸들링에 팁 , new Promise((resolve,reject)=>{}) resolve를 통해 다음 걸로 넘어가거나, reject로 실패를 

const printString = (string) =>{ // resolve를 통해 다음 실행할 콜백함수를 받을 수 있다.
    return new Promise((resolve,reject)=>{ // 함수를 실행하면 새로운 Promise를 실행,
        setTimeout(()=>{ //일정 시간후에 string을 출력.
            console.log(string);
            resolve(); // 문제가 없으면 다음 콜백 함수를 실행한다?
        },2000)
    })
}
const test = ()=>{
    printString('Hi')// 2초후에 Hi를 출력하고 다음함수를 실행
    .then(()=>{console.log('yellow')}) // resolve() 에 대한 내용 
    .then(()=> {console.log('red')});// 연달아 또 함수를 사용할 수 있음.
}
test();
const printAll = ()=>{
    printString("B") // 함수가 실행될때, Promise가 자동적으로 실행되며, console에 인자를 찍어주고, 이상이 없다면 다음 함수로 이동한다.
    .then(() => printString("C")) // 리턴 생략 resolve()===() => printString("C") 콘솔에 string을 찍어주고 이상이 없다면? 다음함수로 이동
    .then(()=>printString("D")) // 리턴 생략 ()=>
}
printAll();

//Promise => 첫 테스크가 끝나고 나서 .then을 통해 다음 함수로 이동할수 있다. 또 .then을 통해 다음함수로 이동할 수 있다. 중간에 에러가 발생할 경우 failure task로 이동된다.(.catch())


function gotoCodestates(a){ //이함수가 실행됐을 때 이상이 없다면 .then으로 resolve를 실행시킬수 있음.
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{resolve('1. go to codestates',a)}, 500);
    })
}

function sitAndCode(){ //이함수가 실행됐을 때 이상이 없다면 .then으로 resolve를 실행시킬수 있음.
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{resolve('2. sit and code')}, 500);
    })
}

function eatLunch(){ //이함수가 실행됐을 때 이상이 없다면 .then으로 resolve를 실행시킬수 있음.
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{resolve('3. eat Lunch')}, 500);
    })
}

gotoCodestates() // 함수를 실행하면 일정 시간 후에 resolve를 실행시킨다. resolve은 then은 이용해 작성한다.
.then((str)=>{ 
    console.log(str); //여기서 str은 1.go to codestates
    return sitAndCode()
    .then((str)=>{
        console.log(str);
        return eatLunch()
        .then((str)=>{
            console.log(str)
        })
    })
}) 

gotoCodestates() // 함수를 실행하면 일정 시간 후에 resolve를 실행시킨다. resolve은 then은 이용해 작성한다.
.then((str)=>{ 
    console.log(str); 
    return sitAndCode()}) // 리턴을 통해서 다음코드를 실행할 수 있다 그 실행코드에 resolve값을 이어나가기 위해 .then을 이용해서 이어나갈 수 있다.
.then((str)=>{
    console.log(str);
    return eatLunch()})
.then((str)=>{
    console.log(str)
})
   
