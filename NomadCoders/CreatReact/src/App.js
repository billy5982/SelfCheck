import Button from './Button'
import PropTypes from 'prop-types'

function App() {
  return (
    <div>
    <h1>hi</h1>
    <Button text={'Continue'}/>
    </div>
  );
}
Button.propTypes ={
  text : PropTypes.string.isRequired
}
export default App;
