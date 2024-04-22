import React from 'react';
import  { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';


function FormPage() {

    const [formData, setFormData] = useState({
      name: '',
      address:'',
      email: '',
      phone: ''
    });
  


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);

      const uniqueId = generateUniqueId();
      const userData = { id: uniqueId, ...formData };
  
      saveUserData(userData);
  
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
      });
  
    };
  

    // --- generating unique ID---
    const generateUniqueId = () => {
      return Math.random().toString(36).substr(2, 9);
    };
  
    //  ---the saving user data in local storage---
    const saveUserData = (userData) => {
      const storedData = JSON.parse(localStorage.getItem("userData")) || [];
      const newData = [...storedData, userData];
      localStorage.setItem("userData", JSON.stringify(newData));
    };
  

    return (
      <form onSubmit={handleSubmit} method='POST' style={{paddingTop:"3%"}}>
            <Grid container spacing={2}>
                
               <Grid item xs={12}>
                    <TextField fullWidth label="Name" name="name"  value={formData.name}  onChange={handleChange} variant="outlined"/>
                </Grid>
            
                <Grid item xs={12}>
                    <TextField fullWidth label="Address" name="address"  value={formData.address}  onChange={handleChange} variant="outlined"/>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth label="Email Address"  name="email" type="email"  value={formData.email} onChange={handleChange}  variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} variant="outlined"  />
                </Grid>

                <Grid item xs={12} style={{ paddingLeft:"30%"}}>
                    <Button type="submit" variant="contained" color="primary" >
                         Submit
                    </Button>
                </Grid>
            </Grid>
      </form>
    );
  }
  
  export default FormPage;
  