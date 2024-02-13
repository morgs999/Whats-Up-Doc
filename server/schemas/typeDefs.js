const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    location: String
    doctor: [Doctor]
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID
    date: String
    procedure: String
  }

  type Doctor {
    doctorName: String
    specialty: String
  }

  type Hospital {
    hospitalName: String
    location: String
  }

  type Prescription {
    price: Float
    prescriptionName: String
    refill: Boolean!
  }

  type Procedure {
    _id: ID
    procedureName: String
    prescription: [Prescription]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]

    user(email: String!): User

    doctors: [Doctor]

    procedures: [Procedure]

    prescription(prescriptionName: String!): Prescription

    me: User

    appointments: [Appointment]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    updateUser(email: String!, password: String!, doctor: String!): User

    addDoctor(email: String!, doctorName: String!): User

    removeDoctor(email: String!, doctorName: String!): User

    addAppointment(date: String!, name: String!, procedure: String!): User

    removeAppointment(email: String!, id: ID!): User

    updateRefill(prescriptionName: String!, refill: Boolean!): Prescription
  }

`;

module.exports = typeDefs;
