import React, { useState, useContext } from 'react';
import { Form, Segment, Grid, Header } from '../../common/helpers';
import EmailInput from '../../EmailInput';
import PasswordInput from '../../PasswordInput';
import SubmitButton from '../../SubmitButton';
import { signin } from '../../../API';
import GlobalContext from '../../../contexts/GlobalContext';
import { USER, MODAL_STATE } from '../../../contexts/constants';

const SigninForm = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      setSubmitLoading(true);
      setError('');
      const data = { email, password };
      const user = await signin(data);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: USER, payload: user });
      dispatch({ type: MODAL_STATE, payload: { ...state.modalState, open: false } });
    } catch (err) {
      setSubmitLoading(false);
      setError(err.message);
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Sign In
        </Header>
        <Form onSubmit={handleSignIn}>
          <Segment>
            <EmailInput focus value={email} onChange={event => setEmail(event.target.value)} />
            <PasswordInput value={password} onChange={event => setPassword(event.target.value)} />
            {error ? <p>{error}</p> : null}
            <SubmitButton loading={submitLoading}>Sign In</SubmitButton>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SigninForm;
