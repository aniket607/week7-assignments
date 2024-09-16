import React from 'react'


function ButtonBar() {
  return (
    <div className='buttonbar'>
        <Buttons bgColor='Red'/>
        <Buttons bgColor='Yellow'/>
        <Buttons bgColor='Black'/>
        <Buttons bgColor='Purple'/>
        <Buttons bgColor='Green'/>
        <Buttons bgColor='Blue'/>
        <span className='default' onClick={()=>{document.body.style.background='white'}}>default</span>
    </div>
  )
}

function Buttons({bgColor}) {
    return <span className='button' style={{backgroundColor:bgColor}} 
    onClick={()=>{
        document.body.style.background=bgColor}}
    >{bgColor}</span>
}
export default ButtonBar