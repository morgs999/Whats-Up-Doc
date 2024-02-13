import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_ALL_APPOINTMENT } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { email: userParam } = useParams();


  const { loading: userloading, data: userdata } = useQuery(userParam ? QUERY_USER : QUERY_ME, {

    variables: { email: userParam },
  });
  const user = userdata?.me || userdata?.user || {};

  const { loading: apptloading, data: apptdata } = useQuery(QUERY_ALL_APPOINTMENT);
  const appointment = apptdata?.appointments || [];

  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/profile" />;
  }

  if (userloading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }


  return (
    <div className="container mx-auto pt-4 text-center">

      <div className="mb-4">
        <h2 className="text-lg">Welcome {`${user.firstName}`}!</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg bg-gray-100 p-4">
          <div className="flex justify-center items-center mb-4">
            <i className="bi-window text-primary text-4xl"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2 underline">Patient Information</h3>
          <ul className="text-left">
            <li><strong>Name:</strong> {`${user.firstName} ${user.lastName}`}</li>
            <li><strong>Age:</strong> 28</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Doctor:</strong> Dr. Stevens</li>
            <li><strong>Medical History:</strong> None</li>
            <li><strong>Current Medications:</strong> None</li>
          </ul>
        </div>
        <div className="rounded-lg bg-gray-100 p-4 ">
          <div className="flex justify-center items-center mb-4">
            <i className="bi-layers text-primary text-4xl"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2 underline">Visitation Notes</h3>
          <ul className="text-left">
            <li><strong>Date of Visit: 02/10/2024</strong> </li>
            <br />
            <li><strong>Reason for Visit:</strong>Annual Checkup</li>
            <br />
            <li><strong>Vitals:</strong>
              <ul className="list-disc pl-4">
                {/* {appointment.map(appointment)} */}

                <li className=''>Blood Pressure: 120/80 mmHg</li>
                <li>Pulse Rate: 70 beats per minute</li>
                <li>Respiratory Rate: 16 breaths per minute</li>
                <li>Temperature: 37.0 degrees Celsius</li>
              </ul>
            </li>
            <br />
            <li><strong>Additional Notes:</strong> Patient was worried about a persistent cough they recently had. Checked for covid symptoms and flu symptoms, all negative. Recommended proper rest, fluids and to not go outside if it is too cold. Drew two vials of patient's blood for lab testing. New appointment scheduled for 08/01/2024</li>
            <li><strong>Next Appointment:</strong>
            <ul>
                <li>Date: 08/01/2024</li>
                <li>Name: Biannual Checkup</li>
                <li>Procedure: Diabetes Checkup</li>
            </ul>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-gray-100 p-4">
          <div className="flex justify-center items-center mb-4">
            <i className="bi-terminal text-primary text-4xl"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2 underline">Prescription History</h3>
          <p className="text-lg">None</p>
        </div>
      </div>
    </div>
  )
}

export default Profile