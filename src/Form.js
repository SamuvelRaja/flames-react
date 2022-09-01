import React from 'react'
import { useRef } from 'react'

const Form = (props) => {
    const yourName=useRef()
    const otherName=useRef()
    const flamesHandler = (event)=>{
        event.preventDefault();
        const YourNameValue=yourName.current.value
        const otherNameValue=otherName.current.value
        props.flames(YourNameValue, otherNameValue)
        const flameData={
            name1:YourNameValue,
            name2:otherNameValue,
            res:props.result
        }
        fetch('https://flames-90e3e-default-rtdb.firebaseio.com/flames.json', {method:'POST', body:JSON.stringify(flameData)})
    }
  return (
    <div className='form-div'>
        <form onSubmit={flamesHandler}>
            <div className='input-div' style={{borderBottom:"0px"}}>
                <label htmlFor="yourname"> Your Name</label>
                <input type="text" name="yourname" id="yourname" className='input' ref={yourName}/>
            </div>
            <div className='input-div'>
                <label htmlFor="othername">Other Name</label>
                <input type="text" name="" id="othername" className='input' ref={otherName}/>
            </div>
            <div className='btn-div'>
                <button>Flames</button>
            </div>
        </form>
    </div>
  )
}

export default Form