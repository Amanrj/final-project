import React, { useState } from 'react';
import './TravelForm.css'

const JourneyTypeRadio = ({ label, value, checked, onChange }) => (
  <div>
    <input type="radio" value={value} checked={checked} onChange={onChange} />
    <label>{label}</label>
  </div>
);

const TravelForm = () => {
  const [journeyType, setJourneyType] = useState('oneWay');

  const handleJourneyTypeChange = (e) => {
    setJourneyType(e.target.value);
  };

  return (
    <div className='layer-1'>
      <div className='layer-2'>
        <div className='layer-3'>
          {/* One Way, Both Way layer */}
          <div className='layer-3-1'>
            <span className='layer-4-1'>
              <div className='layer-5-1'>
                <input id='ow' className='oneway-radio' type="radio" />
                <label htmlFor='ow' className='oneway-radio-lable'>One Way</label>
              </div>
            </span>
            <span className='layer-4-2'>
              <div className='layer-5-1'>
                <input id='bw' className='oneway-radio' type="radio" />
                <label htmlFor='bw' className='oneway-radio-lable'>Round Trip</label>
              </div>
            </span>
          </div>
          {/* Chouse Source and Distanition layer */}
          <div className='layer-3-2'>
            <div className='from-to'>
              <div>
                <label className='upper-lable' htmlFor='from-input'> From</label>
                <input placeholder='From' id='from-input' type='text' />
                <label htmlFor='from-input' className='input-bottom-lable'>Select City</label>
              </div>
              <label>🔁</label>
              <div>
                <label className='upper-lable' htmlFor='to-input'>To</label>
                <input placeholder='To' id='to-input' type='text' />
                <label htmlFor='to-input' className='input-bottom-lable'>Select City</label>
              </div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className='div-searchFlight'>
                <button className='searchFlight'>Search Flight</button>
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
