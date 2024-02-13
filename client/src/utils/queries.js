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
      appointments{_id}
    }
  }
`;

export const QUERY_ALL_DOCTOR = gql`
  query getDoctors {
    doctors  
    {doctorName
      specialty}
    }
`;

export const QUERY_ALL_APPOINTMENT = gql`
query getAppointments {
  appointments {
    _id
    date
    procedure
  }
}
`;

export const QUERY_ALL_PROCEDURE = gql`
query getProcedures {
  procedures 
    { _id
      procedureName
  }
}
`;