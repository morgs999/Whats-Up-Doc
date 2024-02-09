const { User, Doctor, Hospital, Appointment, Procedure, Prescription } = require('../models')

const resolvers = {
  Query: {
    doctors: async () => {
      return Doctor.find();
    },
    procedures: async () => {
      return Procedure.find()
      // .populate('appointment');
    },
    prescription: async (parent, { name }) => {
      return Prescription.findOne({ name })
      // .populate('procedure').populate('appointment');
    },
  }
  ,
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, { email, password, doctor }) => {
      return User.findOneAndUpdate(
        { email: email },
        {
          $set: {
            email: { email }, password: { password }, doctor: { doctor }
          }
        },
        { new: true }
      )
    },
    addDoctor: async (parent, { email, name }) => {
      const newDoctor = Doctor.find(name);
      return User.findOneAndUpdate(
        { email: email },
        { $push: { doctor: { newDoctor } } },
        { new: true }
      )
    },
    removeDoctor: async (parent, { email, name }) => {
      const oldDoctor = Doctor.find(name);
      return User.findOneAndUpdate(
        { email: email },
        { $pull: { doctor: { oldDoctor } } },
        { new: true }
      )
    },
    addAppointment: async (parent, { date, time, procedure, email }) => {
      const user = await User.find(email);
      const newAppointment = await Appointment.create({ date, time, procedure, user });
      return User.findOneAndUpdate(
        { email: email },
        { $push: { appointment: { newAppointment } } },
        { new: true }
      )
    },
    removeAppointment: async (parent, { email, id }) => {
      const oldAppointment = Appointment.find({ _id: id });
      return User.findOneAndUpdate(
        { email: email },
        { $pull: { appointment: { oldAppointment } } },
        { new: true }
      )
    },
    updateRefill: async (parent, { name, refill }) => {
      return Prescription.findOneAndUpdate(
        { name: name },
        { $set: { refill: refill } },
        { new: true }
      )
    }
  }
};

module.exports = resolvers;
