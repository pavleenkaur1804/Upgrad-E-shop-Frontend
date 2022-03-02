import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminContext, UserContext } from '../../App'



export const ProtectedRoute = () => {
    
    const { state , dispatch } = useContext(UserContext);
    const { state2, dispatch2} = useContext(AdminContext);
    const isAuthenticated=()=>{
        if(state){
            return state;
        }
        if(state2){
            return state2;
        }
        else{
            return false;
        }
    }
    const auth = isAuthenticated(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}