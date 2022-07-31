// import React from "react";

// function App(){
//     const user = {
//         firstName : 'Haprer',
//         lastName : 'Perez',
//     };

//     function formatName(user){
//         return `${user.firstName} ${user.lastName}`
//     }

//     function Hello(){ // 리액트 엘리먼트가 JSX로 작성되면 대문자로 시작해야한다?
//         return <div>Hello!</div>
//     }

//     function Helloworld(){
//         return <Hello />
//     }

//     //APP.js 한개의 js 파일 안에서 HTML과 JS를 한번에 처리 가능
//     return(
//     // 앨리먼트의 한 영역을 나눠주기 위해서 최상위 태그에서 Opening tag와 closing 태그로 감싸준 후 이후 태그를 작성     
//     <div>
//         <div>{/* class는 className으로 작성, class라고 하면 js의 클래스로 인식*/}
//             <h1 className="">Hello{formatName(user)}</h1>    {/*JSX에서 JavaScript를 쓰고자 하면 중괄호를 이용, 쓰지 않는다면 일반 텍스트로 인식한다.*/}
//         </div>
//         <div>
//             <h1>    </h1>
//         </div>
//         <div>
//             {  {/*조건부 렌더링은 삼항연산자를 이용  */}
//                 (1+1 === 2)?(<p>정답</p>) : (<p>오답</p>)  
//             }
//         </div>
// </div>
//     )

// }
// function Post(){
// // 리액트에서 여러개의 HTML 앨리먼트를 표시할 때는 map()함수를 사용 사용시 "key" JSX 속성을 넣어야한다.
// const posts = [{id :1 ,title : 'hello world',content : 'molymoly'},{id :2 ,title : 'hello2world',content : 'moly2moly'}];
// function Blog(){
//     const content = posts.map((post)=>{
//         //맵 사용 시 key를 넣어야함
//         <div key={post.id}>  
//             <h3> {post.title} </h3>
//             <p> {post.content} </p>
//         </div>
//     })

//     return (
//         <div>
//         {content}
//         </div>
//     )
// }
    
// }



// export default App;


const posts = [
    { id : 1, title : 'Hello World', content : 'Welcome to learning React!' },
    { id : 2, title : 'Installation', content : 'You can install React via npm.' },
    { id : 3, title : 'reusable component', content : 'render easy with reusable component.' },
];

function Blog(){
    const postToElement = (post) => {

        //map 메소드 사용시 내부에 있는 첫 엘리먼트에 key 속성을 꼭 넣어줘야함.
       <div key={post.id}> 
        <h3>{post.title}</h3>
        <p>{post.content}</p>
       </div>
    }
    const postMap = posts.map(postToElement);
    return (
        <div className='post-wrapper'>{postMap}</div>

    )
}