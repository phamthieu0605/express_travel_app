const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:travel_app_1@cluster0.cfm7s.mongodb.net/travel_app?retryWrites=true&w=majority'
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(`Error to connect to MongoDB ${err}`)
  }
}

module.exports = { connect }
