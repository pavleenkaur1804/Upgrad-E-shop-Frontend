import React, { useContext } from 'react'
import { Button } from '@mui/material';
import { UserContext } from '../../App';
import { AdminContext } from '../../App';
import { pink } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom';

const Logout=()=>{
    const navigate=useNavigate();
    const {state,dispatch}=useContext(UserContext);
    const {state2,dispatch2}=useContext(AdminContext);

const logout=()=>{
  if(state2)
  {
    dispatch2({type:'ISADMINLOGGEDIN',payload:false})
    navigate("/");
}
   if(state){
       dispatch({type:'ISLOGGEDIN',payload:false})
       navigate("/");
   }
}

return(
<Button onClick={logout} sx={{bgcolor: pink[500]}} variant="contained">LOGOUT</Button>
)
}
export default Logout