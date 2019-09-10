import React, { useState } from 'react';
import { Grid, Form, Segment, Header } from '../../common/helpers';
import EmailInput from '../../EmailInput';
import PasswordInput from '../../PasswordInput';
import SubmitButton from '../../SubmitButton';

const SigninForm = ({ onLogin, error, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => onLogin(email, password);

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Sign In
        </Header>
        <Form onSubmit={handleLogin}>
          <Segment>
            <EmailInput focus value={email} onChange={event => setEmail(event.target.value)} />
            <PasswordInput value={password} onChange={event => setPassword(event.target.value)} />
            {error ? <p>{error}</p> : null}
            <SubmitButton loading={loading}>Sign In</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SigninForm;
