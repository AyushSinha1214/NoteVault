import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
    // Add actual login logic here
  };

  return (
    <Container className="login-page">
      <h2>Login to NoteVault</h2>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={() => handleLogin('Email')} fullWidth>
        Login with Email
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleLogin('LinkedIn')} fullWidth>
        Login with LinkedIn
      </Button>
      <Button variant="contained" color="default" onClick={() => handleLogin('GitHub')} fullWidth>
        Login with GitHub
      </Button>
    </Container>
  );
}

export default LoginPage;
