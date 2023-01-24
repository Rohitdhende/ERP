import { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React from 'react';

const UnderGroupLocation = () => {
  const initialFormState = {
    continent: '',
    country: '',
    state: '',
    district: '',
    taluka: '',
    village: '',
  };

  //Handle Form Data
  const [formData, setFormData] = useState(initialFormState);
  const handleForm = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value.trim() });
  };

  //Handle Form Submit
  const handleSubmitForm = () => {
    console.log(formData);
  };

  //Reset Data function to reset form inputs
  const resetData = () => {
    setFormData(initialFormState);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6">Add Location</Typography>
      <FormControl
        sx={{
          display: 'flex',
          width: '320px',
        }}
      >
        <Typography>Continent</Typography>
        <OutlinedInput
          required
          id="continent-input-box"
          onChange={handleForm('continent')}
        />
      </FormControl>
      <FormControl
        sx={{
          display: 'flex',
          width: '320px',
          marginTop: '1rem',
        }}
      >
        <Typography>Country</Typography>
        <OutlinedInput required onChange={handleForm('country')} />
      </FormControl>
      <FormControl
        sx={{
          display: 'flex',
          width: '320px',
          marginTop: '1rem',
        }}
      >
        <Typography>State</Typography>
        <OutlinedInput required onChange={handleForm('state')} />
      </FormControl>
      <FormControl
        sx={{
          display: 'flex',
          width: '320px',
          marginTop: '1rem',
        }}
      >
        <Typography>District</Typography>
        <OutlinedInput required onChange={handleForm('district')} />
      </FormControl>
      <FormControl
        sx={{
          display: 'flex',
          width: '320px',
          marginTop: '1rem',
        }}
      >
        <Typography>Taluka</Typography>
        <OutlinedInput required onChange={handleForm('taluka')} />
      </FormControl>

      <FormControl
        sx={{
          display: 'flex',
          width: '320px',
          marginTop: '1rem',
        }}
      >
        <Typography>Village</Typography>
        <OutlinedInput required onChange={handleForm('village')} />
      </FormControl>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <Button onClick={resetData}>Cancel</Button>
        <Button
          onClick={handleSubmitForm}
          disabled={
            formData.continent === '' ||
            formData.country === 'other' ||
            formData.state === '' ||
            formData.district === '' ||
            formData.taluka === '' ||
            formData.village === ''
          }
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default UnderGroupLocation;
