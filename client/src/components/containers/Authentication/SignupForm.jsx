import React, { useState } from 'react';
import { Grid, Form, Segment, Header } from '../../common/helpers';
import EmailInput from '../../EmailInput';
import PasswordInput from '../../PasswordInput';
import SubmitButton from '../../SubmitButton';
import TextInput from '../../TextInput';

const SignupForm = ({ onRegister, error, loading }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleSignup = () => onRegister(name, email, userName, password);

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="#333" textAlign="center">
          Register your account
        </Header>
        <Form size="large" onSubmit={handleSignup}>
          <Segment>
            <TextInput focus name="Name" iconName="user" value={name} onChange={e => setName(e.target.value)} />
            <EmailInput focus value={email} onChange={e => setEmail(e.target.value)} />
            <TextInput
              focus
              name="Username"
              iconName="user"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
            <PasswordInput
              value={verifyPassword}
              onChange={e => setVerifyPassword(e.target.value)}
              passwordToMatch={password}
              verify
            />
            {error ? <p>{error}</p> : null}
            <SubmitButton loading={loading}>Sign up</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignupForm;
