import React from 'react';

const TimePicker = ({ date, onSelect }) => {
  // Assuming the available times are hard-coded for simplicity
  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const handleTimeSelect = (time) => {
    onSelect(time);
  };

  return (
    <div className='time-picker'>
      <h2>Select a time for {date.toDateString()}</h2>
      <ul>
        {availableTimes.map((time, index) => (
          <li key={index} onClick={() => handleTimeSelect(time)}>
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimePicker;
