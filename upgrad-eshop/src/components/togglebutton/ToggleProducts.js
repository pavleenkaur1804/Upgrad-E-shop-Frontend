import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect } from 'react';
import axios from 'axios';

export default function ToggleProducts(props) {
  const [alignment, setAlignment] = React.useState('web');
  const [category,setCategory]=React.useState([{}]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  useEffect(() => {
    axios.get('http://localhost:8000/products/categories').then((res) => {
     console.log(res.data[0].category)
     setCategory(res.data[0].category)
    })
},[]);
   
  return (
    <ToggleButtonGroup
      color="primary"
      sx={{justifyContent:'center',alignContent:'center',marginLeft:'5em',marginRight:'5em'}}
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="All">All</ToggleButton>
      <ToggleButton value="Electronics">Electronics</ToggleButton>
      <ToggleButton value="Automotive">Automotive</ToggleButton>
      <ToggleButton value="Furniture">Furniture</ToggleButton>
      <ToggleButton value="Apparel">Apparel</ToggleButton>
      <ToggleButton value="Personal Care">Personal Care</ToggleButton>
     
    </ToggleButtonGroup>
  );
}