import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const QUERY_ALL_DOCTOR = gql`
  query getAllDoctor {
      _id
      doctorName
      specialty
      appointment {
        _id
      }
    }
`;


export const QUERY_ALL_PROCEDURE = gql`
query getAllProcedure {
    _id
    procedureName
    appointment {
      _id
    }
  }
`;

// export const QUERY_SINGLE_PRESCRIPTION = gql`
// query getSinglePrescription ($prescriptionName: prescriptionName!) {
//     prescription(prescriptionName: $prescriptionName) {
//         _id
//         prescriptionName
//         procedure
//         appointment {
//             _id
//         }
//     }
// `;