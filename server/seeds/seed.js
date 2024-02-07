const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

db.once('open', async () => {
  // await cleanDB('Tech', 'teches');

  await User.insertMany(techData);

  console.log('Users seeded!');
  process.exit(0);
});
