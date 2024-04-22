import React, { useEffect, useState , usersRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, TextField , Box, styled, Button } from '@mui/material';



function Register() {

    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

  

    function onFinish(e){

        e.preventDefault();

        // Doing storage form data in local storage
        localStorage.setItem('register', JSON.stringify(formData));

        // Navigating to login page
        navigate('/login');

    }

  return (
    <div className='formpage' style={{ paddingTop:"9%",paddingBlock:"15%", justifyContent:"center", background:"lightblue", height:"100%"}}>
        <form layout="vertical" className='w-400 bg-white p-2' onSubmit={onFinish}   id='register' style={{ paddingRight:"27%" , paddingTop:"-30%"}}>

            <h1 className='uppercase my-1'> 
                <b>Register Page</b>
            </h1>
            <hr/>


            <Grid item xs={12}>
                    <TextField label="Name"  name="name" type="name"   variant="outlined"  value={formData.name} className='formpage'  style={{ height: "311%", width: " 210%" }}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value }) }
                      />
             </Grid><br></br>

            <Grid item xs={12}>
                    <TextField label="Email Address"  name="email" type="email"   variant="outlined"  value={formData.email} style={{ height: "311%", width: " 210%" }}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
             </Grid><br></br>

             <Grid item xs={12}>
                    <TextField label="Password"  name="password" type="password"   variant="outlined"  value={formData.password} style={{ height: "311%", width: " 210%" }}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                       />
            </Grid><br></br>


            <Box>
                <Button className='contained-btn my-1 w-full btn' type='submit'  color="primary" style={{background:"blue", color:"white"}}>Register</Button><br/>

                <Link className='underline' to="/login">
                    Already have a account ? <strong>Sign In</strong>
                </Link>
            </Box>
        </form>
    </div>
  )
}

export default Register