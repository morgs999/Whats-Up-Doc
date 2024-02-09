import { gql } from '@apollo/client';

export const QUERY_ALL_DOCTOR = gql`
  query getAllDoctor {
      _id
      name
      appointment {
        _id
      }
    }
`;


export const QUERY_ALL_PROCEDURE = gql`
query getAllProcedure {
    _id
    name
    appointment {
      _id
    }
  }
`;

export const QUERY_SINGLE_PRESCRIPTION = gql`
query getSinglePrescription ($name: name!) {
    prescription(name: $name) {
        _id
        name
        procedure
        appointment {
            _id
        }
    }
`;