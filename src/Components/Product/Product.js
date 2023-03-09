import './Product.css';

import { useDispatch, useSelector } from 'react-redux';

const Products = ({allproducts}) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state);

    console.log(allproducts);

   let prodz = allproducts.map((items)=>{
    items.quantity = 1;
        return(
            <div className="products__content" key={items.id}>

                <div className="products__image">
                    <img className='products__imgs' src={items.images[0]} alt="" />
                </div>
                <div className="products__title">
                    <a href={'/items/' + items.title}>{items.title}</a>
                </div>
                <div className="products__desc">
                    <p>{items.description.substr(0, 30)}</p>
                </div>
                <div className="products__price">
                    <small>{items.price}<span>$</span></small>
                </div>


                <button className='products__btns' onClick={()=>dispatch({type: 'ADD TO CART', payload: items})}>Add to Cart</button>
                
            </div>
        )
    })
   
    return (
        <div className="products">   
            <div className="products__container">
            
            {prodz}
            
            </div>
        </div> 
    )
}
 
export default Products;    