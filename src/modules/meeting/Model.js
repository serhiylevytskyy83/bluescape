const mongoose = require('mongoose');

const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email)
};

const Schema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    hostEmail: {
      type: String,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    
    name: {
      type: String,
      required: true,
    },
    
    dateTime: {
      type: String,
      required: true,
    },

    attendeeEmail: [String],
  },

  { timestamps: {}, versionKey: false },
);

module.exports = mongoose.model('Meeting', Schema);
