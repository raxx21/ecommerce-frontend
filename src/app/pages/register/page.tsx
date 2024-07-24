"use client"
import { Button, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import {registerAPI} from '../../../services/authService'

type FormData = {
    username: string;
    password: string;
    name: string;
    surname: string;
    birthdate: string;
}

const Register = () => {
  const {register, handleSubmit} = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try{
        await registerAPI(data);
        router.push('/login');
    } catch (error) {
        console.error('Registration failed', error);
    }
  }
  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Username" {...register('username')} fullWidth margin="normal" required />
        <TextField label="Password" {...register('password')} type="password" fullWidth margin="normal" required />
        <TextField label="Name" {...register('name')} fullWidth margin="normal" required />
        <TextField label="Surname" {...register('surname')} fullWidth margin="normal" required />
        <TextField label="Birthdate" {...register('birthdate')} type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </Container>
  )
}

export default Register