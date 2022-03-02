import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import '../signup/Signup.css'
import Box from '@mui/material/Box'
import { Avatar, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import { Grid } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { AdminContext, UserContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const { state , dispatch } = useContext(UserContext);
    const { state2, dispatch2} = useContext(AdminContext);
    const [ user, setUser] = React.useState({
       
        email:"",
        password:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        const { email, password} = user
        if( email && password){
            axios.post("http://localhost:8000/auth", user)
            .then( res => {
                // We are sending a POST requst to the backend server 
                console.log(res.data.userData);
                console.log("isAdmin=>",res.data.userData.isAdmin);
                // Here we are trying to understand if the user 
                // is admin or a normal user 
                if(res.data.userData.isAdmin===true){
                    sessionStorage.setItem("AdminToken",res.data.userData.accessToken);
                    dispatch2({type:'ISADMINLOGGEDIN',payload:true})
                    navigate("/")
                    return;
                   
                }
               else if(res.data.userData.isAdmin===false){
                    sessionStorage.setItem("access-token",res.data.userData.accessToken);
                    dispatch({type:'ISLOGGEDIN',payload:true})
navigate("/");
                    return;
                }
                    
                
            
            })
        } else {
            alert("invlid input")
        }}
   


    return (
        <div className='signin'>
            {/* This is for the signin lock avatar icon */}
            <Grid align="center" marginTop='100px'>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <LockOutlinedIcon />

                </Avatar>
                <h2>Sign In</h2>
            </Grid>
            <Grid>
                <form align="center">
                   
                    <FormControl sx={{marginBottom:'15px',width: '25ch'}}>
                        
                       <InputLabel>Email*</InputLabel>
                        <OutlinedInput
                        required={true}
                            id="component-outlined"
                            value={user.email}
                            label='Email*'
                            onChange={handleChange}
                            
                            name='email'
                        />
                    </FormControl>
                    <br></br>
                    <FormControl sx={{marginBottom:'10px',width: '25ch'}}>
                        
                    <InputLabel>Password*</InputLabel>
                        <OutlinedInput
                            required={true}
                            id="component-outlined"
                            value={user.password}
                            label="Password*"
                            onChange={handleChange}
                            
                            name='password'
                        />
                    </FormControl>
                    <br></br>
                    <Button onClick={login} sx={{backgroundColor:'#3f51b5',width: '33ch'}} variant="contained">Sign in</Button>
                    <br></br>
                    <Link to='/signup'><Typography sx={{fontSize:'small'}}>Don't have an account? Sign Up</Typography></Link>
                </form>
            </Grid>


        </div>
    );

}
export default Login