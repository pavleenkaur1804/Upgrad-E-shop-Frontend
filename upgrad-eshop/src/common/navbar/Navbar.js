import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../navbar/Navbar.css'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Logout from '../logout/Logout';
import { AdminContext, UserContext } from '../../App';



const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const { state2, dispatch2 } = useContext(AdminContext);
  console.log("yes", state2)
  console.log("state1", state)

  const ToggleMenu = () => {
// the ToggleMenu function helps toggle between login and logout states 
// of the user as well as helps in toggling the ui based on ADMIN and USER loggin


//If the logged in person is admin
    if (state2 === true) {
      return (<Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: '0.9' }}>

        <NavLink to='/'>
          <Typography sx={{ color: 'white', textDecoration: 'underline', marginRight: '10px' }}>Home</Typography>

        </NavLink>

        <NavLink to='/'>
          <Typography sx={{ color: 'white', textDecoration: 'underline', marginRight: '10px' }}>Add Product</Typography>

        </NavLink>

        <Logout />

      </Box>)

    }
    //If the logged in person is users
    if (state === true) {
      console.log("I am true else if Logout ui", state)
      return (<Box sx={{ display: 'flex', justifyContent: 'right', flexGrow: '0.9' }}>
        <NavLink to='/'>
          <Typography sx={{ color: 'white', textDecoration: 'underline', marginRight: '10px' }}>Home</Typography>

        </NavLink>
        <Logout />


      </Box>);
    }
    // If None of the admin or normal user is logged In
    else {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'right', alignContent: 'right', flexGrow: '0.9' }}>
          <NavLink to='/login'>
            <Typography sx={{ color: 'white', textDecoration: 'underline', marginRight: '10px' }}> Login</Typography>

          </NavLink>
          <NavLink to='/signup'>

            <Typography sx={{ color: 'white', textDecoration: 'underline', marginRight: '10px' }} > Sign Up</Typography>
          </NavLink>
        </Box>);
    }
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(9)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <AppBar sx={{ backgroundColor: '#3f51b5' }} position="static">
        <Toolbar>
          <ShoppingCart sx={{ marginRight: '10px' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: '0.4' }}
          >
            upGrad E-Shop
          </Typography>
          <Search sx={{ flexGrow: '0.5' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <ToggleMenu />
        </Toolbar>
      </AppBar>
    </Box>


  );
}
export default Navbar