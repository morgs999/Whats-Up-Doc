const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    location: String
    doctor: Doctor
  }

  type Appointment {
    _id: ID!
    date: String!
    time: String!
    procedure: Procedure
    user: User
  }

  type Doctor {
    name: String!
  }

  type Hospital {
    name: String!
    location: String!
  }

  type Prescription {
    price: Float!
    name: String!
    refill: Boolean!
  }

  type Procedure {
    _id: ID
    name: String
    prescription: [Prescription]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
      doctors: [Doctor]
      procedures: [Procedure]
      prescription(name: String!): Prescription 
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    updateUser(email: String!, password: String!, doctor: String): User

    addDoctor(email: String!, name: String!): User

    removeDoctor(email: String!, name: String!): User

    addAppointment(date: String!, time: String!, procedure: ID!, user: String!): User

    removeAppointment(email: String!, id: ID!): User

    updateRefill(name: String!, refill: Boolean!): Prescription
  }

`;

module.exports = typeDefs;
