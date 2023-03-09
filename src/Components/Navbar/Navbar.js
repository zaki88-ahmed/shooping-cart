
import { Link } from 'react-router-dom';
import './Navbar.css';
import Flag from 'react-world-flags';
import {useDispatch, useSelector} from 'react-redux';


const Navbar = () => {

    const cart = useSelector((state)=> state);
    const dispatch = useDispatch();

    return ( 
        <nav className="header">
            <div className="header__nav">
                <Link to='/'><div className="header__nav_logo"></div></Link>
                <div className="header__nav">
                    <div className="header__nav_top">
                        <span>Deliver to</span>
                        <span>Egypt</span>
                        <span className='header__nav_icon'></span>

                    </div>
                    <div className="header__nav_bottom">
                    </div>
                </div>
                <div className="header__nav_search">
                    <div className="header__nav_selection">
                        <select name="" className='header__nav_select_items' id="">
                            <option value="">All</option>
                            <option value="">All Departments</option>
                            <option value="">Clothes</option>
                            <option value="">Shoes</option>
                            <option value="">Electronics</option>
                            <option value="">Accessories</option>
                            <option value="">Sports</option>
                        </select>
                        
                    </div>
                    <div className="header__nav_input">
                        <input type="text" className='header__nav_input_search' />
                        
                    </div>
                        <a href='#' className="header__nav_icon_search_1">
                        <div className="header__nav_icon_search">
                            
                            
                        </div>
                    </a>
                </div>

                <div className="header__nav_lang">
                    <div className="header__nav_lang_icon">
                        <Flag code="sau" height="16" />
                        <span className='.header__nav_flag_word'> SA</span>
                    </div>
                </div>


                <div className='header__nav_signin'>
                    <div className='header__nav_signin_top'>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className='header__nav_signin_bottom'>
                        <span>Account & Lists</span>
                    </div>

                </div>
                <div className='header__nav_signin'>
                    <div className='header__nav_signin_top'>
                        <Link to="/signup">
                            <span>Hello Signup</span>
                        </Link>
                    </div>
                    <div className='header__nav_signin_bottom'>
                        <span>Account & Lists</span>
                    </div>

                </div>
                <div className='header__nav_signin'>
                    <div className='header__nav_signin_top'>
                        <Link to="/signin">
                            <span>Hello Signin</span>
                        </Link>
                    </div>
                    <div className='header__nav_signin_bottom'>
                        <span>Account & Lists</span>
                    </div>

                </div>


                <Link to="/cart">
                    <div className="header__nav_cart">
                        <div className="header__nav_icon_cart">
                            <span>{cart?.length}</span>

                        </div>
                        <div className="header__nav_word">
                            <span>Cart</span>
                        </div>
                    </div>
                </Link>

            </div>


           

        </nav>
     );
}
 
export default Navbar;