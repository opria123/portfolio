import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button, TextField, TextareaAutosize } from '@mui/material';
import validate from 'validate.js';
import emailjs from 'emailjs-com';

const USER_ID = "LUMydw1T8t4I9_SkU"
const TEMPLATE_ID = "template_3kse14o"
const SERVICE_ID = "service_ytrdg9n"

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 1000,
    },
  }
};


const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();
        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target,
          USER_ID
        )
        .then((res) => console.log('SUCCESS!', res.status, res.text))
        .catch(error => console.log('FAILED...', error));

        setFormState(formState => ({
          ...formState,
          isValid: false,
          values: {},
          touched: {},
          errors: {}
        }));
  }

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      <form 
        headers='application/json'
        name="contact-form"
        onSubmit={sendEmail}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              <strong>Contact Form</strong>
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center">
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}/>
          <Grid item xs={12} sm={4}>
            <TextField
              placeholder="Name"
              label="Name *"
              variant="outlined"
              size="medium"
              name="name"
              id="name"
              fullWidth
              helperText={
                hasError('name') ? formState.errors.name[0] : null
              }
              error={hasError('name')}
              onChange={handleChange}
              type="text"
              value={formState.values.name || ''}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12} sm={2}/>
          <Grid item xs={12} sm={2}/>
          <Grid item xs={12} sm={8}>
            <TextareaAutosize 
              className='text-area'
              placeholder="Message"
              label="Message *"
              variant="outlined"
              minRows="10"
              name="message"
              helperText={hasError('message') ? formState.errors.message[0] : null}
              error={hasError('message')}
              onChange={handleChange}
              type="text"
              value={formState.values.message || ''}
            />
          </Grid>
          <Grid item xs={12} className='text-center'>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formState.isValid}
              className='text-center button-center'
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;