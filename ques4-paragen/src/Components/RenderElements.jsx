import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { ParaCount } from '../store/atoms/ParaCount';

function RenderElements() {
   const [count, setCount] = useState(0);
  const setParaCount=useSetRecoilState(ParaCount);
  return (
    <div>
        <div className='heading'>Para Generator</div>
        <div>
            <input className='inputbox' type="text" placeholder='Enter Number of Words' onChange={(e)=>{
              const value=e.target.value;
              setCount(value);
            }}/>
            <button className='button' onClick={()=>{
              setParaCount(count)
            }}>Generate</button>
        </div>
    </div>
  )
}

export default RenderElements