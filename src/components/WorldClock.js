import React, { useState } from 'react'
import Clock from './Clock'

const WorldClock = () => {
    const timeZones = [
        {country: "India", timezone: "Asia/Kolkata"}, 
        {country: "New York", timezone: "America/New_York"}, 
        {country: "London", timezone: "Europe/London"}, 
        {country: "Tokyo", timezone: "Asia/Tokyo"}, 
    ]

    const [tZones, setTzones] = useState(timeZones);

    const [dropdown, setDropdown] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(dropdown);
        let newTz = {
            country: dropdown.split("-")[0],
            timezone: dropdown.split("-")[1]
        }
        let found = false;
        for(let i=0; i<tZones.length; i++){
            if(newTz.country === tZones[i].country){
                found=true;
            }
        }
        if(!found){
            setTzones([...tZones, newTz]);
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto my-3'>
                <div>
                    <form onSubmit={submitHandler}>
                        <select value={dropdown} onChange={(e)=>setDropdown(e.target.value)} className="form-control" required>
                            <option></option>
                            <option value="Dubai-Asia/Dubai">Dubai</option>
                            <option value="Melbourne-Australia/Melbourne">Melbourne</option>
                            <option value="Dhaka-Asia/Dhaka">Dhaka</option>
                        </select>
                        <input type="submit" value="Add" className='btn btn-primary mt-2 w-100' />
                    </form>
                </div>
            </div>
        </div>
        <div className='row'>
            {
                tZones.map((tz, i)=>(
                    <div className='col-sm-3 p-1'>
                        <Clock key={i} tz={tz} />
                    </div>

                ))
            }
            {/* <div className='col-sm-3 p-1'>
                <Clock country="New York" tz="America/New_York"  />
            </div>
            <div className='col-sm-3 p-1'>
                <Clock country="London" tz="Europe/London"  />
            </div>
            <div className='col-sm-3 p-1'>
                <Clock country="Tokyo" tz="Asia/Tokyo"  />
            </div> */}
        </div>
    </div>
  )
}

export default WorldClock
