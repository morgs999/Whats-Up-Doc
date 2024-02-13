import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email:String! $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
  `;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
  `;

export const UPDATE_USER_INFO = gql`
    mutation updateUserInfo($email:String! $password: String!) {
      updateUserInfo(email: $email, password: $password) {
        token
        user {
          _id
          email
        }
        doctor {
          name
        }
      }
    }
  `;

export const ADD_DOCTOR = gql`
  mutation addDoctor($email: String!, $doctorName: String!) {
    addDoctor(email: $email, doctorName: $doctorName) {
      user {
        email
        doctor {
          doctorName
        }
      }
    }
  }
  `;

export const ADD_PROCEDURE = gql`
  mutation addProcedure($id: ID!, $procedureName: String!) {
    addProcedure(_id: $id, procedureName: $procedureName) {
      appointment {
        _id
      }
    }
  }
`

export const REMOVE_DOCTOR = gql`
    mutation removeDoctor($name: String!) {
      removeDoctor(name: $name) {
        name
        success
      }
    }
  `;

export const ADD_APPOINTMENT = gql`
mutation Mutation($date: String!, $name: String!, $procedure: String!) {
  addAppointment(date: $date, name: $name, procedure: $procedure) {
    _id
    date
    procedure
  }
} 
`;

export const REMOVE_APPOINTMENT = gql`
mutation removeAppointment ($id: ID!) {
  removeAppointment (id:$id) {
    _id
    success
    message
  }
}
`;

export const UPDATE_REFILL = gql`
mutation updateRefill($name: String, $refill:Boolean!) {
  updateRefill(name: $name, refill: $refill) {
    id
    name
    refill
  }
}
`;