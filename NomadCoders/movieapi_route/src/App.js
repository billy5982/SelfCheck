import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return(
  <BrowserRouter>
    <Routes>
      {/* 홈화면 라우트. */}
      <Route path = "/" element = {<Home />} />
      {/* 주소에 movie가 붙으면 detail 컴포넌트가 출력됨 */}
      {/* 다이나믹 url : 콜론을 사용하는 것이 중요함.*/}
      <Route path = '/movie/:id' element = {<Detail/>}/>
    </Routes>
  </BrowserRouter>
  )

}

export default App;
