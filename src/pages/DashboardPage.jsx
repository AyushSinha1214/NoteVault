import React from 'react';
import { Button, Container } from '@mui/material';

function DashboardPage() {
  return (
    <Container className="dashboard-page">
      <h2>Welcome to NoteVault</h2>
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '15px' }}>
        Upload Notes (PDF, Word, Excel)
      </Button>
      <Button variant="contained" color="secondary" fullWidth style={{ marginBottom: '15px' }}>
        Create Your Notes
      </Button>
      <Button variant="contained" color="default" fullWidth>
        Manage Your Notes
      </Button>
    </Container>
  );
}

export default DashboardPage;
