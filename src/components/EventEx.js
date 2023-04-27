import React, { useState } from 'react'

const EventEx = ({myfunc}) => {
    const test = () => {
        alert("Button is clicked");
    }
    // let count = 0;
    const [count, setCount] = useState(0)
    const increment =()=>{
        // count++;
        setCount(count+1)
        console.log(count);
    }

    const [text, setText] = useState("Good Morning")
    const changeText = () =>{
        setText("Good Afternoon");
    }

  return (
    <div>
        {/* <button onClick={test}>Click Me</button>
        <button onClick={myfunc}>Click Me 2</button> */}
        <p>You have clicked {count} times</p>
        <button onClick={increment}>Click</button>

        <p>{text}</p>
        <button onClick={changeText}>Change</button>
    </div>
  )
}

export default EventEx
