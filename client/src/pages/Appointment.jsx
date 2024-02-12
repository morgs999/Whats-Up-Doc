import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import TimePicker from '../components/timePicker';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); 
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className='appointment'>
      <h1>Book Appointments</h1>
      <div>
        <Calendar onSelect={handleDateSelect} />
        {selectedDate && (
          <TimePicker
            date={selectedDate}
            onSelect={handleTimeSelect}
          />
        )}
      </div>
      {selectedTime && (
        <p>Selected appointment time: {selectedTime}</p>
      )}
    </div>
  );
}

export default Appointment;
