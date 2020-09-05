import React ,{useState, useEffect}from 'react';
import './home-style.css';
import Cart from '../Cart/Cart';
import { Box } from '@material-ui/core';

const Home = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setCart(data))
    }, [])

    return (
        <div>
            <h1>Blog page</h1>
            <Box justifyContent="center" display="flex" flexWrap="wrap">
                {
                    cart.map(postData => <Cart key={postData.id} postData={postData}/>)
                }
                
            </Box>

        </div>
    );
};

export default Home;