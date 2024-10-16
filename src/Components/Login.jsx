import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import logo1 from "../assets/logo1.png"
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
    <div className="flex flex-col min-h-screen">
        <div className="h-fit object-contain bg-center flex flex-col justify-center items-center mx-5 md:mx-20 relative z-5 flex-grow">
         
            <div className="w-full max-w-md m-auto flex items-center flex-col ">
              {/* logo */}
            <div className=' text-white z-10 relative flex items-center justify-center gap-2 top-16'>
           <img src={logo1} alt="" className='md:w-[10%] w-[5%]'/> <span className='text-xl font-medium '>Travel Saving</span>
           </div>
                <Card className='rounded-lg shadow drop-shadow-md flex items-center flex-col p-4 w-[100%] md:w-full bg-white mt-24 z-10'>
                    <div className='w-24 overflow-hidden drop-shadow-lg p-2 flex flex-col justify-center mx-auto'>
                      
                        <h1 className='mx-auto font-bold text-2xl'>Sign In</h1>
                    </div>
                    <h5 className='font-medium text-center text-sm md:text-base text-black'>Welcome to a new experience of travel bookings</h5>
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
                        <div className='flex justify-center cursor-pointer '>
                            <Button type='submit' variant="contained" color="primary" sx={{width:'100%'}}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                    <br />
                    <p className='text-sm md:text-base'>Create a New Account? <a href='/signup' className='text-blue-500 underline'>Signup</a></p>
                </Card>
            </div>
        </div>
       
        <ToastContainer />
        <footer className="w-screen xl:mt-10 relative z-5 h-14 flex justify-center items-center right-3 ">
    <div className="bg-white opacity-40 absolute inset-0 w-screen"></div>
    <span className="z-10 relative text-center text-xs md:text-sm text-white flex justify-center font-medium">
        Copyright © 2024 Travelsaving. All Rights Reserved
    </span>
</footer>

    </div>
    </>
);

}

export default Login;
