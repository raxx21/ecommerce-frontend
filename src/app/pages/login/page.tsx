"use client"
import { login } from '@/services/authService';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const {register, handleSubmit} = useForm<FormData>();
    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        try {
            await login(data);
            router.push('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    }
  return (
    <Container>
        <Typography variant='h4'>Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Username" {...register("username")} margin='normal' required/>
            <TextField label="Password" {...register("password")} margin='normal' required/>
            <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
    </Container>
  )
}

export default Login