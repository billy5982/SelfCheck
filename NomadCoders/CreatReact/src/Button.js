// css를 abc라는 변수에다 할당해줄수 있음. 할당 데이터의 형태는 객체임.
// styles의 이름은 자유롭게 변경할 수 있음.파일명은 xx.module.css가 되어야함.
import styles from './Button.module.css' 


const Button = ({text})=>{
    //화면에는 button의 클래스명이 btn이 아닌 임의의 값으로 출력된다.
    return <button className = {styles.btn}>{text}</button>
}
export default Button;