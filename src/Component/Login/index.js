// import {Form, message } from 'antd';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Button, TextField } from '@mui/material';
import {  message } from 'antd';

function Login() {
    
    const navigate = useNavigate();

    const onFinish =(e) =>{
        e.preventDefault();

        // Retrieve form data from local storage
        const formData = JSON.parse(localStorage.getItem('register'));

        // Check if user is registered
        if (formData) {
            // Check if the entered email and password match the registered user's data
            if (e.target.email.value === formData.email && e.target.password.value === formData.password) {
                // Navigate to home page or any other desired page
                navigate('/home');
                // Display success message
                message.success('Login successful!');
            } else {
                // Handle incorrect credentials
                message.error('Incorrect email or password. Please try again.');
            }
        } else {
            // Handle case where user is not registered
            message.error('User not registered. Please sign up.');
        }      
    }
    


  return (
    <div className='formpage'style={{ paddingTop:"9%",paddingBlock:"15%", justifyContent:"center", background:"lightblue", height:"100%"}}s >
        <form layout="vertical"  onSubmit={onFinish} id='register' style={{ paddingRight:"27%" , paddingTop:"-30%"}}>

            <h1 className='uppercase my-1'> 
                <strong style={{color: "black"}}><span className='text-primary'>Login</span></strong>
            </h1>   
            <hr/>

            <Grid item xs={9}>
                    <TextField  label="Email Address"  name="email" type="email"   variant="outlined"  style={{ height: "311%", width: " 210%" }}/>
             </Grid><br/>

             <Grid item xs={9}>
                    <TextField  label="Password"  name="password" type="password"   variant="outlined"  style={{ height: "311%", width: " 210%" }}/>
            </Grid>

            <Button className='contained-btn my-1 w-full btn' type='submit' color="primary" style={{background:"blue", color:"white"}}>Login</Button>

            <Link className='underline' to="/ "> <br></br>
                Don't have n account ? <strong>Sign Up</strong>
            </Link>
        </form>
    </div>
  )
}

export default Login;
