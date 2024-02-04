import React, { useState, useEffect } from 'react';
import './TravelForm.css'
import AutoSugation from './AutoSugestion';
import validateData from './ValidateData';

const preData = {
  oneway: true,
  from: "",
  fromCity: "",
  to: "",
  toCity: "",
  fromDate: "",
  toDate: "",
  persion: 0
}


const TravelForm = ({setData}) => {
  const today = new Date().toISOString().split('T')[0];
  const [fromType, SetFromType] = useState("");
  const [toType, SetToType] = useState("");
  const [finalData, finalDataUpdate] = useState(preData);



  const setFromCity = (eventData) => {
    finalDataUpdate({ ...finalData, "from": eventData.code, "fromCity": eventData.city })
  }
  const setToCity = (eventData) => {
    finalDataUpdate({ ...finalData, "to": eventData.code, "toCity": eventData.city })
  }

  const setPredataforFinal = (event) => {
    if (event.target.type == "radio") {
      if (event.target.id == "ow") {
        finalDataUpdate({ ...finalData, [event.target.name]: true });
      } else if (event.target.id == "bw") {
        finalDataUpdate({ ...finalData, [event.target.name]: false });

      }
    }
  }

  const setFromTypeinput = (event) => {
    SetFromType(event.target.value)
    finalDataUpdate({ ...finalData, "from": event.target.value, "fromCity": event.target.value })

  }
  const setToTypeinput = (event) => {
    SetToType(event.target.value)
    finalDataUpdate({ ...finalData, "to": event.target.value, "toCity": event.target.value })
  }
  const setDate = (event) => {
    finalDataUpdate({ ...finalData, [event.target.name]: event.target.value })
  }
  const setPerson = (event) => {
    finalDataUpdate({ ...finalData, [event.target.name]: event.target.value })
  }

  return (
    <div className='layer-1'>
      <div className='layer-2'>
        <div className='layer-3'>
          {/* One Way, Both Way layer */}
          <div className='layer-3-1'>
            <span className='layer-4-1'>
              <div className='layer-5-1'>
                <input name='oneway' defaultChecked onClick={setPredataforFinal} id='ow' className='oneway-radio' type="radio" />
                <label htmlFor='ow' className='oneway-radio-lable'>One Way</label>
              </div>
            </span>
            <span className='layer-4-2'>
              <div className='layer-5-1'>
                <input name='oneway' onClick={setPredataforFinal} id='bw' className='oneway-radio' type="radio" />
                <label name="round" htmlFor='bw' className='oneway-radio-lable'>Round Trip</label>
              </div>
            </span>
          </div>
          {/* Chouse Source and Distanition layer */}
          <div className='layer-3-2'>
            <div className='from-to'>
              <div>
                <label className='upper-lable' htmlFor='from-input'> From</label>
                <input value={finalData.from} name='from' onChange={setFromTypeinput} placeholder='From' id='from-input' type='text' />
                <label htmlFor='from-input' className='input-bottom-lable aaa'>{finalData.fromCity || "Select City"}
                  {
                    fromType &&
                    < AutoSugation city={fromType} setData={setFromCity} />
                  }
                </label>
              </div>
              {/* <label>🔁</label> */}
              <div>
                <label className='upper-lable' htmlFor='to-input'>To</label>
                <input value={finalData.to} name="to" onChange={setToTypeinput} placeholder='To' id='to-input' type='text' />
                <label htmlFor='to-input' className='input-bottom-lable'>{finalData.toCity || "Select City"}
                  {
                    toType &&
                    < AutoSugation city={toType} setData={setToCity} />
                  }
                </label>

              </div>
            </div>
            {/* Date input part */}
            <div className='date-select'>
              <div>
                <label id='datePicker' className='upper-lable' htmlFor='to-date'>Departure Date</label>
                <input onChange={setDate} name='fromDate' id='to-date' min={today} type='date' />
                <label htmlFor='to-date' className='input-bottom-lable'>Select Day</label>
              </div>
              <div >
                <label className='upper-lable' htmlFor='from-date'>Return Date</label>
                <input onChange={setDate} disabled={finalData.oneway} name='toDate' id='from-date' min={today} type='date' />
                <label htmlFor='from-date' className='input-bottom-lable'>Select Day</label>
              </div>
            </div>
            <div>
              <div className='travel'>
                <label htmlFor='travel-number' className='upper-lable'>Travellers</label>
                <input onChange={setPerson} name='persion' placeholder='Persion' id='travel-number' min={0} max={9} type='number' />
                <label htmlFor='travel-number' className='input-bottom-lable'>Total Travels</label>
              </div>
            </div>
            <div className='div-searchFlight'>
              <div >
                <button onClick={()=>{
                  if(validateData(finalData)){
                    setData(finalData);
                  }
                }} className='searchFlight'>Search Flight</button>
              </div>
            </div>
          </div>
          <div className='layer-3-3'></div>
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
