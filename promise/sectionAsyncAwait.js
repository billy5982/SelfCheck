function gotoCodestates(){ //이함수가 실행됐을 때 이상이 없다면 .then으로 resolve를 실행시킬수 있음.
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{resolve('1. go to codestates')}, 500);
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

const result = async() =>{ //async 표현이 있어야 await를 쓸수 있다.
    const one = await gotoCodestates().then((x)=>x);
    console.log(one); // 여기서 왜 1. go to codestates?? 
    const two = await sitAndCode();
    console.log(two);
    const third = await eatLunch();
    console.log(third);
}
result();