import React, { useState, useContext } from 'react';
import { Grid, Form, Segment, Header } from '../../common/helpers';
import EmailInput from '../../EmailInput';
import PasswordInput from '../../PasswordInput';
import SubmitButton from '../../SubmitButton';
import TextInput from '../../TextInput';
import { USER } from '../../../contexts/constants';
import GlobalContext from '../../../contexts/GlobalContext';
import { signup } from '../../../API';

const SignupForm = () => {
  const { dispatch } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setSubmitLoading(true);
      const data = { name, email, userName, password };
      const user = await signup(data);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: USER, payload: user });
    } catch (err) {
      setSubmitLoading(false);
      setError(err.message);
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="#333" textAlign="center">
          Register your account
        </Header>
        <Form size="large" onSubmit={handleSignup}>
          <Segment>
            <TextInput
              focus
              name="Name"
              iconName="user"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
            <TextInput
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
            <SubmitButton loading={submitLoading}>Sign up</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignupForm;
