import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import { signin } from '../../API';
import GlobalContext from '../../contexts/GlobalContext';
import { USER } from '../../contexts/constants';

const SignInForm = () => {
  const { dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      setSubmitLoading(true);
      setError('');
      const data = {email, password};
      const user = await signin(data);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({type: USER, payload: user});
    } catch (err) {
      setSubmitLoading(false);
      setError(err.message);
    }
  };
  
  return (
    <>
      <Form size="large" onSubmit={handleSignIn}>
        <Segment>
          <EmailInput focus value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />
          {
            error ? (
              <Message negative>
                {error}
              </Message>
            ) : null
          }
          <Button 
            fluid
            type="submit"
            size="large"
            loading={submitLoading}
            disabled={submitLoading}
          >
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Not a member? 
        <Link to="/signup">Sign up</Link>
      </Message>
    </>
  );
};

export default SignInForm;
