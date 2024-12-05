import { useState } from 'react';
import { styled } from 'styled-components';
import { Button } from './Button';
import { CustomInput } from './Input';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <InputContainer>
        <CustomInput
          label="Email"
          type="email"
          $invalid={emailNotValid}
          onChange={(event: any) => handleInputChange('email', event.target.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          $invalid={passwordNotValid}
          onChange={(event: any) =>
            handleInputChange('password', event.target.value)
          }
        />
      </InputContainer>
      <div className="actions">
        <Button type="button" className="text-button">
          Create a new account
        </Button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
