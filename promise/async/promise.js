'use strict'

// // 콜백함수 대신에 사용할 수 있음
// // 1. state => 기능이 수행중인지? , 기능이 성공했는지? , 실패했는지 가 중요함
// // 2. 제공하는 사람과 해당 데이터를 사용하는 사람을 구별할 줄 알아야됨.

// //state : pending(실행 중일때) ->완료되면 (fulfilled) or 실패대면 rejected
// //producer vs consumer

// //1. Producer Promise는 클래스이며, new를 이용해서  객체 생성가능.
// //2. Promise 생성자는 executor라는 콜백함수((resolve,reject)=>{})를 전달해줘야함.
// //3. resolve, reject 두가지의 콜백함수를 받는다.
// const promise = new Promise((resolve,reject)=>{ // executor 함수. 바로 실행된다.
//     // 아래 console이 바로 실행된다.
//     // executor 내부에 바로 실행되기 때문에 사람이 이벤트를 원할 때만 코드가 실행되게 해야한다.
//     console.log('doing something');

//     //네트워크 통신하는 것처럼 시간의 딜레이를 줄것임
//     setTimeout(()=>{ // 이 함수가 실행될 때 성공적이라면 resolve함수를 실행한다.
//         // resolve('ellie');
//         if(message){
//             resolve('ellie');
//         }else{
//         reject(new Error('no network'));  
//     }},2000);
// });
// let message = 0;

// promise.then((x)=>{ // 
//     console.log('ellie','ci');
// }).catch((x)=>{
//     console.log(x);
// })

// // 2. consumers : then, catch, finally
// promise
// .then((value)=>{
//     console.log(value);
// })
// .catch((x) =>{console.log(x)})
// .finally(()=>{
//     console.log('finally');
// })

// // 3. Promise Chaining;
// const fetchNumber = new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve(1),1000);
// })
// fetchNumber
// .then(num => {console.log(num); return num *2})
// .then(num => {console.log(num);return num *3})
// .then(num=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(num-1), 1000);
//     });
// })
// .then(num => console.log(num));


// 4. Error Handling
const getHen = (hat)=>{ //Promise는 실행과 동시에 내부 executer함수가 실행됨. 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(hat) // then함수 실행한 값을 리턴
        },1000);
    })
}

const getEgg = hen =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(hen);
            resolve(`${hen}=> 에그`)},1000);
    })
}

const cook = egg =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(`${egg}=>계란후라이`)},1000);
    })
};

getHen('닭')
.then(hen => { //getHen 함수 실행시 1초후에 resolve('닭')
    console.log(hen); //닭 출력
    return getEgg(hen) //리턴값으로는 getEgg 함수를 실행하는데 전달인자는 닭 
})
.then(egg =>{ //getEgg resolve 실행 값
    console.log(egg); //여기선 위에 닭이 egg인자로 들어가고  egg => 에그가 나온다.
    return cook(egg)}
    )
.then(meal => {
    console.log(meal);
});