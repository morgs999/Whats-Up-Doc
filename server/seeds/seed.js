const db = require('../config/connection');
const { User, Hospital, Doctor, Procedure } = require('../models');
const { Prescription } = require('../models/Prescription')
const cleanDB = require('./cleanDB');

// const userData = require('./userData.json');
const doctorData = require('./doctorData.json');
const hospitalData = require('./hospitalData.json');
const prescriptionData = require('./prescriptionData.json');
const procedureData = require('./procedureData.json');

db.once('open', async () => {
  // await cleanDB('User', 'User');
  // await User.insertMany(userData);

  await cleanDB('Doctor', 'doctors');
  await Doctor.insertMany(doctorData);

  await cleanDB('Hospital', 'hospitals');
  await Hospital.insertMany(hospitalData);

  await cleanDB('Procedure', 'procedures');
  await Procedure.insertMany(procedureData);
  console.log("prescription")
  // await cleanDB('Prescription', 'prescriptions');
  await Prescription.insertMany(prescriptionData);

  console.log('Data seeded!');
  process.exit(0);
});
