import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">

          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <div className="container p-10">
                <h1 className="card-header bg-dark text-light p-2">Sign Up</h1>
                <div className="grid grid-cols-2 gap-4">
                  <form onSubmit={handleFormSubmit}>
                    <div className="m-3">
                      <input
                        className="form-input rounded-lg bg-gray-100 p-4 w-full"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="m-3">
                      <input
                        className="form-input rounded-lg bg-gray-100 p-4 w-full"
                        placeholder="****"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="m-3">
                      <input
                        className="form-input rounded-lg bg-gray-100 p-4 w-full"
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                      />
                    </div>
                    <div className="m-3">
                      <input
                        className="form-input rounded-lg bg-gray-100 p-4 w-full"
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                      />
                    </div>
                    <div className="m-3">
                      <input
                        className="form-input rounded-lg bg-gray-100 p-4 w-full"
                        placeholder="Age"
                        name="age"
                        type="text"
                      />
                    </div>
                    <div className="m-3">
                      <input
                        className="form-input rounded-lg bg-gray-100 p-4 w-full"
                        placeholder="Gender"
                        name="gender"
                        type="text"
                      />
                    </div>
                  </form>

                  <button
                    className="btn  btn-block btn-primary m-3"
                    style={{ cursor: 'pointer' }}
                    type="submit">
                    Submit
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
