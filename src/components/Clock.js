import React, {useState} from 'react'

const Clock = ({tz}) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", {timeZone: tz.timezone}))
    const [date, setDate] =useState(new Date().toLocaleDateString("en-US", {timeZone: tz.timezone}))
    const [color, setColor] = useState("#05aff7");

    setInterval(() => {
        setTime(new Date().toLocaleTimeString("en-US", {timeZone: tz.timezone}))
        setDate(new Date().toLocaleDateString("en-US", {timeZone: tz.timezone}))
        let t = time.split(':')[0]
        let ampm = time.slice(-2)
        // console.log(t, ampm)
        if((t>=5 && ampm=="PM") || (t<=6 && ampm=="AM")){
            setColor("#000000");
        }
    }, 1000);

  return (
    <div className='card' style={{backgroundColor : color}}>
        <div className='card-body text-center text-light'>
            <b>{tz.country}</b>
            <h2>{time}</h2>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Clock
