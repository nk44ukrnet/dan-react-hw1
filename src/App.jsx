import './App.scss';
import Footer from "./containers/Footer/Footer.jsx";
import Container from "./containers/Container/Container.jsx";
import FooterHolder from "./containers/Footer/FooterHolder.jsx";
import FooterItem from "./containers/Footer/FooterItem.jsx";
import FooterHeading from "./containers/Footer/FooterHeading.jsx";
import FooterSocials from "./containers/Footer/FooterSocials.jsx";
import FooterCopyright from "./containers/Footer/FooterCopyright.jsx";
import HeartIcon from '/public/heart.svg?react';
import CartIcon from '/public/cart.svg?react';
import ShopLogo from '/public/logo.svg?react';
import SearchIcon from '/public/search.svg?react';
import Header from "./containers/Header/Header.jsx";
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";

import {
    selectorCart,
    selectorFavorites
} from "./store/selectors.js";
import {useSelector} from "react-redux";
import Checkout from "./pages/Checkout.jsx";

function App() {

    const selCartItems = useSelector(selectorCart);
    const selFavItems = useSelector(selectorFavorites);

    return (
        <>

            {/*HEADER*/}
            <Header>
                <Container>
                    <div className="header__holder">
                        <Link to="/" className="header__logo">
                            <ShopLogo/>
                        </Link>
                        <nav className="header__nav">
                            <ul>
                                <li><NavLink activeclassname="active" to="/">Home</NavLink></li>{/*active*/}
                                <li><NavLink activeclassname="active" to="/cart">Cart</NavLink></li>
                                <li><NavLink activeclassname="active" to="/favorites">Favorites</NavLink></li>
                                <li><NavLink activeclassname="active" to="/checkout">Checkout</NavLink></li>
                            </ul>
                        </nav>
                        <div className="header__search">
                            <SearchIcon/>
                            <input type="search" placeholder="Search"/>
                        </div>
                        <div className="header__buttons">
                            <Link to="/favorites" className="action-btn">
                                <span className="count">{selFavItems.length}</span>
                                <HeartIcon/>
                            </Link>
                            <Link to="/cart" className="action-btn">
                                <span className="count">{selCartItems.length}</span>
                                <CartIcon/>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Header>
            {/*HEADER END*/}

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/favorites" element={<Favorites />} />

                <Route path="/checkout" element={<Checkout />} />

            </Routes>


            {/*FOOTER*/}
            <Footer>
                <Container>
                    <FooterHolder>
                        <FooterItem>
                            <FooterHeading>Need Help</FooterHeading>
                            <ul>
                                <li><a href="#!">Contact Us</a></li>
                                <li><a href="#!">Track Order</a></li>
                                <li><a href="#!">Returns & Refunds</a></li>
                                <li><a href="#!">FAQ's</a></li>
                                <li><a href="#!">Career</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <FooterHeading>Company</FooterHeading>
                            <ul>
                                <li><a href="#!">About Us</a></li>
                                <li><a href="#!">euphoria Blog</a></li>
                                <li><a href="#!">euphoriastan</a></li>
                                <li><a href="#!">Collaboration</a></li>
                                <li><a href="#!">Media</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <FooterHeading>More Info</FooterHeading>
                            <ul>
                                <li><a href="#!">Term and Conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                                <li><a href="#!">Shipping Policy</a></li>
                                <li><a href="#!">Sitemap</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <FooterHeading>Location</FooterHeading>
                            <ul>
                                <li><a href="mailto:support@euphoria.in">support@euphoria.in</a></li>
                                <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                                <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
                            </ul>
                        </FooterItem>
                    </FooterHolder>
                    <FooterSocials/>
                    <FooterCopyright>
                        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
                    </FooterCopyright>
                </Container>
            </Footer>
            {/*FOOTER END*/}

        </>
    )
}

export default App
