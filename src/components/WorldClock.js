import React from 'react'
import Clock from './Clock'

const WorldClock = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-3 p-1'>
                <Clock country="India" tz="Asia/Kolkata" />
            </div>
            <div className='col-sm-3 p-1'>
                <Clock country="New York" tz="America/New_York"  />
            </div>
            <div className='col-sm-3 p-1'>
                <Clock country="London" tz="Europe/London"  />
            </div>
            <div className='col-sm-3 p-1'>
                <Clock country="Tokyo" tz="Asia/Tokyo"  />
            </div>
        </div>
    </div>
  )
}

export default WorldClock
