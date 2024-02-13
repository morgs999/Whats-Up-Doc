import React, { useState } from 'react';
import Slider from "react-slick";
import Calendar from '../components/Calendar';
import ProceduresList from '../components/ProceduresList';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ALL_PROCEDURE } from '../utils/queries';
import { ADD_APPOINTMENT } from '../utils/mutations';
import Auth from '../utils/auth';
import TimePicker from '../components/timePicker';

const Appointment = () => {

  const { loading, data } = useQuery(QUERY_ALL_PROCEDURE);
  const procedures = data?.procedures || [];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(event.target);
    console.log(value);
    try {
      const { data } = await addAppointment({
        variables: {

        },

      });
    } catch (err) {
      console.error(err);
    }
  };


  // adding appointment to user
  const [addAppointment, { appterror }] = useMutation
    (ADD_APPOINTMENT);

  // const [addProcedure, { procerror }] = useMutation(ADD_PROCEDURE);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // setSelectedTime(null); 
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className='appointment'>
      <h1 className="text-center text-4xl font-semibold"> Book Appointments</h1>
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
