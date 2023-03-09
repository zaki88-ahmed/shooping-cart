
import { useState } from 'react';
import './Home.css';
import axios from 'axios';    
import Products from '../Product/Product';  

const Home = ({allproducts}) => {


    // console.log(axios.get('https://api.escuelajs.co/api/v1/products'));

    // const [products, setProducts] = useState([]);

    //     axios.get('https://api.escuelajs.co/api/v1/products').then((res)=>{
    //         // console.log(res);
    //         setProducts(res.data);
    //     }

    // )

    return ( 
    //     <div>
    //         <h1>Welcome To Home</h1>
    //     </div>
    //  );

    // <products allProducts={allProducts}/>
    
    <>
        {allproducts?.length == 0 ? <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt=''/> : <Products allproducts={allproducts}/>}
    </>
    )
}
 
export default Home;