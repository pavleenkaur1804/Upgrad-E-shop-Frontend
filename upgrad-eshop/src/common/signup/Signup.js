import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../signup/Signup.css'
import Box from '@mui/material/Box'
import { Avatar, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Grid } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const [ user, setUser] = React.useState({
       firstName:"",
       lastName:"",
       email:"",
        password:"",
        confirmPassword:"",
        contactNumber:"",
        
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        const { firstName,lastName,email, password,contactNumber} = user
        if( firstName && lastName && email && password && contactNumber){
            axios.post("http://localhost:8000/users", user)
            .then( res => {
                console.log(res.data);
            })
        } else {
            alert("invlid input")
        }}

    return (
        <div className='signup'>
            {/* This is for the signup lock avatar icon */}
            <Grid align="center" marginTop='100px'>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <LockOutlinedIcon />

                </Avatar>
                <h2>Sign up</h2>
            </Grid>
            <Grid>
                <form align="center">
                    <FormControl sx={{marginBottom:'6px',width: '25ch'}}>
                        
                        
                        <OutlinedInput
                            required={true}
                            id="component-outlined"
                            value={user.firstName}
                            onChange={handleChange}
                            placeholder="Name*"
                           
                        />
                    </FormControl>
                    <br></br>
                    <FormControl sx={{marginBottom:'6px',width: '25ch'}}>
                        
                       
                        <OutlinedInput
                        required={true}
                            id="component-outlined"
                            value={user.lastName}
                            onChange={handleChange}
                            placeholder="Last Name*"
                        />
                    </FormControl>
                    <br></br>
                    <FormControl sx={{marginBottom:'6px',width: '25ch'}}>
                       
                    
                        <OutlinedInput
                        required={true}
                            id="component-outlined"
                            value={user.email}
                            onChange={handleChange}
                           placeholder="Email Address*"
                        />
                    </FormControl>
                    <br></br>
                    <FormControl sx={{marginBottom:'6px', width: '25ch'}}>
                       
                       
                        <OutlinedInput
                        required={true}
                            id="component-outlined"
                            value={user.password}
                            onChange={handleChange}
                           placeholder="Password*"
                        />
                    </FormControl>
                    <br></br>
                    <FormControl sx={{marginBottom:'6px',width: '25ch'}}>
                        
                       
                        <OutlinedInput
                        required={true}
                            id="component-outlined"
                            value={user.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password*"
                        />
                    </FormControl>
                    <br></br>
                    <FormControl sx={{marginBottom:'6px',width: '25ch'}}>
                        
                        
                        <OutlinedInput
                            required={true}
                            id="component-outlined"
                            value={user.contactNumber}
                            onChange={handleChange}
                            placeholder="Contact Number*"
                        />
                    </FormControl>
                    <br></br>
                    <Button sx={{backgroundColor:'#3f51b5',width: '33ch'}} variant="contained">Sign up</Button>
                    <br></br>
                    <Link sx={{color:'violet'}} to='/login'><Typography sx={{fontSize:'small'}}>Already have an account? Sign in</Typography></Link>
                </form>
            </Grid>


        </div>
    );

}
export default Signup