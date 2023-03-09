
import './Cart.css';
import {useDispatch, useSelector} from 'react-redux';

const Cart = () => {
    const cart = useSelector((state)=> state);
    const dispatch = useDispatch();


    const addition = (acc, currentValue)=>{
        return acc + currentValue.price * currentValue.quantity;
    }

    const total = cart.reduce(addition, 0);

    let allProductsInCart = cart.map((items)=>{
        return(
            <div className="cart__content_card" key={items.id}>

            <div className="cart__content_card_wrap">
                <div className="cart__content_card_left">
                    <img src={items.images} className='cart__content_card_left_img' alt="" />
                </div>
                <div className="cart__content_card_right">
                    <div className="cart__content_cart_title">
                        <a href="">{items.description.substr(0, 120) + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, beatae!"}</a>
                    </div>
                    <div className="cart__content_cart_instock">
                        <span>In Stock</span>
                    </div>
                    <div className="cart__content_cart_gift">
                        <input type="checkbox" className='cart__content_cart_gift_checkbox' />
                        <label htmlFor="">This gift is </label>
                        <a href="">Learn more</a>

                    </div>
                    <div className="cart__content_card_qty_wraps">
                        <div className="cart__content_cart_qty">

                            <button onClick={()=>dispatch({type: "INCREMENT", payload: items})}>+</button>
                            <span>{items.quantity}</span>
                            <button onClick={ items.quantity == 1 ? (e)=>dispatch({type: 'REMOVE CART', payload: items}, e.preventDefault()) 
                             :()=>dispatch({type: "DECREMENT", payload: items})}>-</button>

                        </div>
                        <div className="cart__content_cart_actions">
                            <span>
                                <span>|</span> <a href="" onClick={(e)=>dispatch({type: 'REMOVE CART', payload: items}, e.preventDefault())}>Delete</a>
                            </span>


                            <span>
                                <span>|</span> <a href="">Save for later</a>
                            </span>
                            <span>
                                <span>|</span> <a href="">Compare with similer items</a>
                            </span>

                        </div>
                    </div>
                </div>
            </div>



            <div className="cart__content_cart_price_right">
                <p>${items.price * items.quantity}</p>
                <a href="">Join Prime to buy  this item at $19.19</a>
            </div>

        </div>
        )
})



return ( 
    <div className="cart__area">
        <div className="cart__Wrapper">

            <div className="cart__content">

            <div className="cart__content_left">
                        <span className='cart__content_left_word'>Shopping Cart</span>
                        <div className="cart__content_wrap_splitter">
                            <span className='cart__content_splitter'></span>
                            <span className='cart__content_splitter_price'>Price</span>
                        </div>



                        <div className="cart__wrapper_card">
                           
                        

                            {allProductsInCart?.length == 0 ? <img src="https://media.tenor.com/gjTAkAIaY1sAAAAM/dog-triste.gif" alt="" /> 
                            : allProductsInCart}

                                   
                            <div className="cart__content_wrap_splitter">
                            {/* <span className='cart__content_splitter_price_sub_subtotal'>Subtotal (1 item): <strong> $679.00</strong>
</span> */}
                            <span className='cart__content_splitter_sub_subtotal'></span>
                        </div>




                            <div className="cart__content_wrap_splitter">
                            {/* <span className='cart__content_splitter_price_sub_subtotal'>Subtotal (1 item): <strong> $679.00</strong>
</span> */}
                            {/* <span className='cart__content_splitter_sub_subtotal'></span> */}
                        </div>




                            <div className="cart__content_wrap_splitter">
                            <span className='cart__content_splitter_price_sub_subtotal'>Subtotal ({allProductsInCart?.length} item): <strong> ${total}.00</strong>
</span>
                            {/* <span className='cart__content_splitter_sub_subtotal'></span> */}
                        </div>


                        </div>
                </div>

                <div className="cart__content_right">
                    <span className='cart__content_right_subtotal'>Subtotal ({allProductsInCart?.length} items): <strong> ${total + ".00"}</strong></span>

                    <div className="cart__content_gift_input">
                        <input type="checkbox" className='cart__content_gift_input_checkbox'/>
                        <label htmlFor="">This order contains a gift</label>
                    </div>

                    <button className='cart__content_right_btn'>Proceed to checkout</button>

                </div>

            </div>

        </div>

    </div> 
 );
}
export default Cart;