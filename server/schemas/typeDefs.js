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
    date: Date!
    time: Date!
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

  type Query {
    doctors: [Doctor]
    procedures: [Procedure]
  }

`;

module.exports = typeDefs;
