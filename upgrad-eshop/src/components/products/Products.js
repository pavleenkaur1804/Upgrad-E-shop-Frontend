import React, { useEffect, useState } from 'react';
import DisplayProductCards from './productCard/DisplayProductCards';
import axios from 'axios'

//Parent component with state management
function Products() {
    const [obj, setObj] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products').then((res) => {
            console.log(res.data)
            setObj(res.data)
        })
    }, []);
    return (
        <div>
            <DisplayProductCards pictures={obj} />
        </div>);
}
export default Products