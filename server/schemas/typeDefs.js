const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    location: String
    doctor: Doctor
  }

  type Appointment {
    _id: ID
    date: String
    time: String
    procedure: Procedure!
    user: User!
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
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    updateUser(email: String!, password: String!, doctor: String!): User

    addDoctor(email: String!, doctorName: String!): User

    removeDoctor(email: String!, doctorName: String!): User

    addAppointment(date: String!, time: String!, procedure: ID!, user: String!): User

    removeAppointment(email: String!, id: ID!): User

    updateRefill(prescriptionName: String!, refill: Boolean!): Prescription
  }

`;

module.exports = typeDefs;
