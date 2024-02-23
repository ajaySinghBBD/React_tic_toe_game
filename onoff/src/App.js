 
import {useState} from 'react'
import Homepage from './Game_component/Homepage';
 
function App() {
  const [flag, setFlage]=useState(0);
  const onhandleClick=()=>{
    if(flag) setFlage(0);
  }
  return (
    <>
        <button onClick={()=>{setFlage(1)}}>Turn On</button>
        <a href="" >
             <img border="0" alt="W3Schools" style={flag===1?{transform: 'rotate(0deg)' }: {transform: 'rotate(180deg)' }} src={flag===1 ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif" } width="100" height="100" />
       </a>
     
        <button onClick={()=>{setFlage(0)}}>Turn Off</button>
        <Homepage />
    </>
  );
}
 
export default App