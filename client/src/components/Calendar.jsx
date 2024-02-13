import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PROCEDURE } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_APPOINTMENT } from '../utils/mutations';

const EventPopup = ({ date, onClose, onSave }) => {
    const { loading, data } = useQuery(QUERY_ALL_PROCEDURE);
    const procedures = data?.procedures || [];

    const [addAppointment, { error, apptdata }] = useMutation(ADD_APPOINTMENT);

    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState(date);
    const [selectedProcedure, setSelectedProcedure] = useState('');

    const handleEventNameChange = (e) => {
        setEventName(e.target.value);
    };

    const handleEventDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const handleProcedureChange = (e) => {
        setSelectedProcedure(e.target.value);
    };

    const handleSaveEvent = async () => {
        await addAppointment({
            variables: { date: eventDate, name: eventName, procedure: selectedProcedure },
        });

        onSave({ name: eventName, date: eventDate, procedure: selectedProcedure });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Schedule an Appointment</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Name</label>
                    <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        value={eventName}
                        onChange={handleEventNameChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Date</label>
                    <input
                        type="date"
                        className="border rounded-md px-3 py-2 w-full"
                        value={eventDate}
                        onChange={handleEventDateChange}
                    />
                </div>
                <div>
                    <div className="relative">
                        <select
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            value={selectedProcedure}
                            onChange={handleProcedureChange}
                        >
                            <option value="">Procedures</option>
                            {procedures.map((procedure) => (
                                <option
                                    value={procedure.procedureName}
                                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    key={procedure.procedureName}
                                >
                                    {procedure.procedureName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={handleSaveEvent} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
                <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
            </div>
        </div>
    );
};


const Calendar = () => {

    const printedDay = function () {
        const date = new Date(Date.now);
        console.log(date);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const newdate = date.toLocaleDateString(undefined, options);
        console.log(newdate);
        return newdate;
    }


    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day) => {
        setSelectedDate(day);
    };

    const handleClosePopup = () => {
        setSelectedDate(null);
    };

    const handleSaveEvent = (event) => {
        setEvents([...events, event]);
    };

    const renderCalendar = () => {
        const totalDays = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        // Fill in the days before the first day of the month with nulls
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Fill in the days of the month
        for (let i = 1; i <= totalDays; i++) {
            days.push(i);
        }

        return days.map((day, index) => (
            <div
                key={index}
                className={`day flex justify-center items-center p-2 border cursor-pointer ${day === null ? 'bg-gray-100' : ''
                    }`}
                onClick={() => handleDateClick(day)}
            >
                {day !== null && (
                    <span className="text-sm">{day}</span>
                )}
            </div>
        ));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    return (
        <div className="calendar border rounded-lg overflow-hidden">
            <div className="flex justify-between bg-gray-200 p-3">
                <button onClick={prevMonth}>&lt;</button>
                <h2 className="text-lg font-semibold">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 p-2">
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Sun</span>
                </div>
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Mon</span>
                </div>
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Tue</span>
                </div>
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Wed</span>
                </div>
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Thu</span>
                </div>
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Fri</span>
                </div>
                <div className="day flex justify-center items-center p-2 border h-16 w-16">
                    <span className="text-sm font-bold">Sat</span>
                </div>
                {renderCalendar()}
            </div>
            {selectedDate && (
                <EventPopup date={selectedDate} onClose={handleClosePopup} onSave={handleSaveEvent} />
            )}
            <div className='text-center'>
                <h3 className='underline'>Appointments:</h3>
                <ul className="grid grid-cols-1 gap-2">
                    {events.map((event, index) => (
                        <li key={index} className="border p-3 rounded-md">
                            <p className="text-sm font-semibold">Date: {event.date}</p>
                            <p className="text-sm font-semibold">Name: {event.name}</p>
                            <p className="text-sm font-semibold">Procedure: {event.procedure}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Calendar;
