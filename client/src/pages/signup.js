import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signup } from '../auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 1, 3),
  },
}));

export default function Signup() {
  const [values, setValues] = useState({
    fname: '', lname: '', email: '', password: '', error: '', registered: false,
  });

  const { fname, lname, email, password, registered, error } = fields;

  const effectChange = (fname, lname) => (event) => {
    setValues({ ...fields, error: false, [fname]: event.target.value });
    setValues({ ...fields, error: false, [lname]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...fields, error: false });
    signup({ fname, lname, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...fields, error: data.error, registered: false });
      } else {
        setValues({
          ...values, fname: '',lname: '', email: '', password: '', error: '', registered: true,
        });
      }
    });
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>
      Created Successfully. You can now <Link to='/login'>Log in</Link>
    </div>
  );

  const classes = useStyles();

  const formSignUp = () => (
    <Container component='main' maxWidth='xs'>
//handle error and success
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={14}>
              <TextField
                autoComplete='off' required onChange={effectChange('name')}
                type='text' name='name' value={fname} variant='outlined' fullWidth
                id='name'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={14}>
              <TextField autoComplete='off' required onChange={effectChange('name')}
                type='text' name='name' value={lname} variant='outlined' fullWidth id='name' label='Last Name' autoFocus />
            </Grid>
            <Grid item xs={14}>
              <TextField variant='outlined' required fullWidth id='email' label='Email Address' name='email' onChange={effectChange('email')} type='email' value={email}  autoComplete='off' />
            </Grid>
            <Grid item xs={14}>
              <TextField variant='outlined' required fullWidthname='password' type='password' label='Password' id='password' onChange={effectChange('password')} type='password' value={password} autoComplete='current-password' />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}  onClick={clickSubmit}>
            Sign Up </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/login' variant='body2'>
                Have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );

  return (
    <Layout
      title='New User Signup'
      description='Welcome to our e-commerce website. Shop shoes'
      className=""
    >
      {formSignUp()}
      <Copyright />
    </Layout>
  );
}
