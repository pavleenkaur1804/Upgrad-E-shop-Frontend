import React from 'react';
import Navbar from '../../common/navbar/Navbar';
import Products from '../products/Products';
import ToggleProducts from '../togglebutton/ToggleProducts';


const Home=()=>{
    
   
return(
<>
<ToggleProducts />
<Products />
</>
);
}
export default Home