import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { ParaCount } from '../store/atoms/ParaCount';

function RenderElements() {
   const [count, setCount] = useState(0);
  const setParaCount=useSetRecoilState(ParaCount);
  return (
    <>
      <div className="paragraphGenerator">
        <h1 className="heading">Para Generator</h1>
        <div className="inputInterface">
            <input id="inputBox" type="text" placeholder='Enter Number of Words' onChange={(e)=>{
               const value=e.target.value;
               setCount(value);
             }}/>
          <span>
            <button onClick={()=>{
               setParaCount(count)
             }}>Generate</button>
          </span>
        </div>
      </div>
   {/* <div className="inputPara">{inputPara}</div> */}
    </>
  
)}

export default RenderElements