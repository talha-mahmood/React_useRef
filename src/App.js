import logo from './logo.svg';
import './App.css';
import {useRef,useEffect} from 'react'
function App() {
  const userref=useRef(0)
 

  const editval=()=>{
    userref.current.focus();
  }
  return (
    <div>
      <h1>Use Ref Example </h1>
      <h2>by clicking on button input field gets focused</h2>
<input ref={userref} type="text"/>
<button onClick={editval}>Edit</button>
    </div>
  );
}

export default App;
