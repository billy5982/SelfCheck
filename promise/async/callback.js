'use strict'

// 자바스크립트는 동기적이다. -> 호이스팅 이후부터 코드가 작성한 순서에 맞춰서 순차적으로 실행되는 것.
// 호이스팅 : 코드가 실행되기 전 var , function 선언들이 자동적으로 제일 위로 올라가는 것.
// 호이스팅 이후부터 코드들이 자동적으로 실행이 된다.

console.log('1');
console.log('2');
// setTimeout 브라우저 지정 API 지정 시간이 지나면 지정한 함수를 호출하는 것, 콜백 함수를 호출하는 것.
setTimeout(()=> console.log('3'),1000) //나중에 다시 불러줘 callback

console.log('4');

//콜백은 비동기일 때만 쓰지 않는 다.
//Synchronous callback : 동기적 실행
function printImmediately(print){ // print라는 인자를 받는데
    print(); //() 함수 호출문을 보니 이 함수는 실행될 때 print에 전달인자를 함수로 받고 print로 받은 함수를 실행시키는 것.
}
printImmediately(()=>console.log('hi hello'));

//Asynchronous callback : 비동기적 실행
function printWithdelay(print,timeout){ //해당 함수는 print와 timeout이라는 두개의 인자를 받는다.
    // 함수 실행문을 보니? 일정시간후에 동작하는 setTimeout에 첫번째인자(함수 print) print와 두번쨰인자(일정시간 timeout)을 넣어
    // 위 함수를 호출하게 되면 timeout 시간후에 print 함수를 호출하게 된다.
    setTimeout(print,timeout); 
}

printWithdelay(()=>console.log('나 힘등렁'), 2000);

//callback Hell example
// 1. 유저의 정보를 확인하는 클래스를 만들고 해당 클래스에 메소드를 부여
// 2. 로그인 메서드의 경우 2초후에 id와 password가 같으면 onsussecc 함수를 실행하고 틀리다면 onError를 출력
// 3. onsucces함수를 호출 시 한번더 검사하여 원하는 유저가 맞다면 창에다가 객체를 넣어서 출력하는 함수를 실행?
class UserStorage{
    loginUser(id,password,onSucces,onError){
        setTimeout(()=>{
            if((id === 'billy' &&password === 'bill')||(id === 'lee'&& password ==='mu')){
                onSucces(id,password);
            }else{
                onError(new Error('no access'));
            }
        },2000)
    };
    getRoles(user,onSuccess,onError){
        if(user ==='billy'){
            onSuccess(user);
        }else{
            onError(new Error('not found'));
        }
    }
}
let userStorage = new UserStorage();
let id = prompt('아이디 입력');
let password = prompt('비밀번호 입력');
userStorage.loginUser(id,
    password,
    (user)=>{ // id와 password가 맞다면? 위 구문에서 실행되는 onSucces함수에 내용. (user) 만 쓴 이유는 아이디만 확인할거고 여기서 user은 위에 실행될때 id로 인자를 넣어서 실행됬음 
        userStorage.getRoles(user, //전달인자는 id로 될 것인데 함수 매개변수에는 user라고 사용
            ()=>{console.log(`${user} 안녕`)}), //  인자로 전달된 id를 표시
        (x)=>console.log(x)}, // 유저 정보가 내가 원한게 아니라면 에러 출력하는 함수가 실행됨. 그에 대한 함수임
    (x)=>{console.log(x)});
// class UserStorage{ // 사용자에 데이터를 서버에서 받아오는 클래스
//     loginUser(id,password,onSuccess,onError){ //id ,password를 받아오고, 로그인 정보가 맞다면 onSuccess, 틀리다면 onError
//         setTimeout(()=>{
//             if((id ==='ellie' && password ==='dream')||(id ==='lee' && password ==='myeong')){ // 로그인 정보가 맞다면?
//                 onSuccess(id,password); //사용자 아이디와 password를 onSuccess함수에 넣어서 실행한다.
//             }else{
//                 onError(new Error('not found'));// 틀리다면 onError에 인자로 에러 메세지를 넣어서 리턴한다.
//             }
//         },2000); //로그인 시간 2초
//     }

//     getRoles(user,onSuccess,onError){  
//         setTimeout(()=>{
//             if(user==='ellie'){
//                 onSuccess({name : 'ellie',role :'admin'})
//             }else{
//                 onError(new Error('no access'));
//             }
//         },1000);
//     }
// }

// const userStorage = new UserStorage();
// const id = prompt('아이디 입력');
// const password = prompt('패스워드 입력');
// userStorage.loginUser(
//     id,
//     password,
//     (user)=>{ // onSucces  로그인 정보가 맞다면 getRoles를 해야됨
//         userStorage.getRoles(user,userWithRole=>{
//             alert(`${userWithRole.name}`);
//         },
//         (err)=>{console.log(err)});
// },
// (err)=>{console.log(err)});