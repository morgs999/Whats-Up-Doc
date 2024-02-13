import React, { useState } from 'react';

const EventPopup = ({ date, onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleSaveEvent = () => {
    console.log('Event Name:', eventName);
    console.log('Event Date:', eventDate);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add event for {date}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
          <input
            type="text"
            className="border rounded-md px-3 py-2 w-full"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
          <input
            type="date"
            className="border rounded-md px-3 py-2 w-full"
            value={eventDate}
            onChange={handleEventDateChange}
          />
        </div>
        <button onClick={handleSaveEvent} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
        <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
      </div>
    </div>
  );
};

export default EventPopup;
