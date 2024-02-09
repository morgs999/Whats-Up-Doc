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
  mutation addDoctor($name: String!) {
    addDoctor(name: $name) {
      name
    }
  }
  `;

export const REMOVE_DOCTOR = gql`
    mutation removeDoctor($name: String!) {
      removeDoctor(name: $name) {
        name
        success
      }
    }
  `;

//do we update the doctor for the user too?
//is this the right syntax to do that 

//not certain about this one, or if we need to link in the user somehow

// export const UPDATE_DOCTOR = gql`
//   mutation updateDoctor($name: String!) {
//     updateDoctor(name: $name) {
//       doctor {
//         name
//       }
//     }
//   }
// `;

//taking name from doctor for an appointment with them?
// export const ADD_APPOINTMENT = gql`
//   mutation addAppointment($name:String!) {
//     addAppointment(name: $name) {
//       name
//     }
//     doctor {
//       name
//     }
//   }
// `;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $date: String!
    $time: String!
    $procedure: ID!
    $user: String!
  ) 
  {
    addAppointment(
      date: $date
      time: $time
      procedure: $procedure
      user: $user
    ) 
    {
      date
      time
      procedure{
        _id
        name
        prescription
      }
      user {
        firstName
        lastName
        location
        doctor {
          name
        }
      }
      }
    }
  }
`;

export const REMOVE_APPOINTMENT = gql`
mutation removeAppointment ($id=ID!) {
  removeAppointment (id:$id) {
    id
    success
    message
  }
}

`
export const UPDATE_REFILL = gql`
mutation updateRefill($name: String, $refill:Boolean!) {
  updateRefill(name: $name, refill: $refill) {
    id
    name
    refill
  }
}
`

//add in some sort of message stating the appointment has been removed
//do we need to add in the appointment id after removing to keep track of it?
