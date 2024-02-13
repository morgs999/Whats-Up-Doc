const { User, Doctor, Hospital, Appointment, Procedure, Prescription } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    doctors: async () => {
      return Doctor.find();
    },
    procedures: async () => {
      return Procedure.find()
      // .populate('appointment');
    },
    prescription: async (parent, { prescriptionName }) => {
      return Prescription.findOne({ prescriptionName })
      // .populate('procedure').populate('appointment');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    // appointments: async (parent, { _id }) => {
    //   return Appointment.find({ user: { _id } })
    // }
    appointments: async () => {
      return Appointment.find();
    }
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
    addDoctor: async (parent, { email, doctorName }, context) => {
      if (context.user) {
        const newDoctor = Doctor.find(doctorName);
        return User.findOneAndUpdate(
          { email: email },
          { $push: { doctor: { newDoctor } } },
          { new: true }
        )
      }
      throw AuthenticationError;
      ('Need to be logged in to add Doctor');
    },
    removeDoctor: async (parent, { email, doctorName }, context) => {
      if (context.user) {
        const oldDoctor = Doctor.find(doctorName);
        return User.findOneAndUpdate(
          { email: email },
          { $pull: { doctor: { oldDoctor } } },
          { new: true }
        )
      }
      throw AuthenticationError
    },
    //Add/remove appointment
    addAppointment: async (parent, args, context) => {
      console.log(args);
      console.log(context.user)
      if (context.user) {
        const newAppointment = await Appointment.create(args);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              appointments: { newAppointment },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        console.log(updatedUser);
        return updatedUser;
      }
      throw AuthenticationError;
    },
    removeAppointment: async (parent, args, context) => {
      // if (context.user) {
      console.log(args);
      const appointmentId = new ObjectId(args.appointmentId);
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $pull: {
            // plants: { _id: args.plantId },
            appointments: appointmentId,
          },
        },
        { new: true }
      );
      console.log('Removed:', updatedUser);
      return updatedUser;
      // }
      // throw AuthenticationError;
    },
    // addAppointment: async (parent, { date, name, procedure, user }, context) => {
    //   // if (context.user) {
    //   // const user = await User.find(email);
    //   // const newAppointment = await Appointment.create({ date, procedure });
    //   return Appointment.create({ date, name, procedure, user })
    //   // } throw AuthenticationError
    // },
    // removeAppointment: async (parent, { email, id }, context) => {
    //   if (context.user) {
    //     const oldAppointment = Appointment.find({ _id: id });
    //     return User.findOneAndUpdate(
    //       { email: email },
    //       { $pull: { appointment: { oldAppointment } } },
    //       { new: true }
    //     )
    //   }
    //   throw AuthenticationError
    // },
    updateRefill: async (parent, { prescriptionName, refill }, context) => {
      if (context.user) {
        return Prescription.findOneAndUpdate(
          { prescriptionName: prescriptionName },
          { $set: { refill: refill } },
          { new: true }
        )
      }
      throw AuthenticationError
    }
  }
};

module.exports = resolvers;
