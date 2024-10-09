import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import { Card, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log("Login data:", data);
    toast.success("Login submitted (no backend connected)", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <>
      <div className="h-fit object-contain bg-center flex flex-col justify-center items-center mx-5 md:mx-20">
        <div className="w-full max-w-md m-auto flex items-center flex-col">
          <Card className='rounded-lg shadow drop-shadow-md flex items-center flex-col p-4 w-full bg-white mt-24'>
            <div className='w-24 overflow-hidden drop-shadow-lg p-2 flex flex-col justify-center mx-auto'>
              <h1 className='mx-auto font-bold text-2xl'>Sign In</h1>
            </div>
            <h5 className='font-medium text-center text-sm md:text-base'>Welcome to a new experience of travel bookings</h5>
            <br />
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:px-5 px-2 bg-white'>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type='email'
                size='small'
                className='w-full bg-slate-200 drop-shadow-md'
                {...register("email", { required: true })}
              /><br />
              {errors.email && <span className="text-red-500">This field is required</span>}
              <br />
              <FormControl variant="outlined" size='small' className='w-full bg-slate-200 drop-shadow-md'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  name="password"
                  {...register("password", { required: true })}
                />
              </FormControl>
              {errors.password && <span className="text-red-500">This field is required</span>}
              <br /><br />
              <div className='flex items-center justify-between w-full'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                <a href="/forgot-password" className='text-blue-500 underline text-sm md:text-base'>Forgot Password?</a>
              </div>
              <br />
              <div className='flex justify-center cursor-pointer'>
                <Button type='submit' variant="contained" color="primary">
                  Sign In
                </Button>
              </div>
            </form>
            <br />
            <p className='text-sm md:text-base'>Create a New Account? <a href='/signup' className='text-blue-500 underline'>Signup</a></p>
          </Card>
        </div>
      </div>
      <div className="relative w-full mt-28">
        <div className="bg-white opacity-20 z-0 absolute inset-0"></div>
        <span className="z-10 relative text-center text-xs md:text-sm text-black flex justify-center font-medium">Copyright © 2024 Traveldaving. All Rights Reserved</span>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
