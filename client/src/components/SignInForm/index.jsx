import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';

const SignInForm = () => {

  const handleSignIn = () => {
    
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  
  return (
    <>
      <Form size="large" onSubmit={handleSignIn}>
        <Segment>
          <EmailInput focus value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />
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
