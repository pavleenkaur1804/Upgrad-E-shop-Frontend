import logo from './logo.svg';
import './App.css';
import Signup from './common/signup/Signup'
import Login from './common/login/Login'
import { Routes, Route, } from 'react-router-dom'
import Navbar from './common/navbar/Navbar';
import Home from './components/home/Home'
import { createContext, useReducer } from 'react'
import { initialState, reducer } from "../src/common/reducer/UseReducer"
import { adminState, reducer2 } from './common/reducer/AdminReducer';

export const UserContext = createContext();
// User Context helps in toggling the LOGIN/LOGOUT functionality and 
// and managing a global state throughout the app for the value "ISLOGGEDIN"


export const AdminContext = createContext();
// User Context helps in toggling the LOGIN/LOGOUT functionality and 
// of the Admin and helps keeping the internal functionality separate from normal user 
// functionality

const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState);
  // This manages the state of the user "ISLOGGEDIN" throughout
  const [state2, dispatch2] = useReducer(reducer2, adminState);
  // This manages the state of the admin "ISADMINLOGGEDIN" throughout
  
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <AdminContext.Provider value={{ state2, dispatch2 }}>

          {/* Navbar which is common for the entire app */}
          <Navbar />
          {/* Routes changing based on the requirement of the user/admin */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
        </AdminContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
