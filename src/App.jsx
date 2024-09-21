import Button from "./components/Button/Button";
import './App.scss';
import ModalWrapper from "./components/Modal/ModalWrapper.jsx";
import ModalBody from "./components/Modal/ModalBody.jsx";
import ModalImage from "./components/Modal/ModalImage.jsx";
import ModalHeader from "./components/Modal/ModalHeader.jsx";
import ModalText from "./components/Modal/ModalText.jsx";
import ModalFooter from "./components/Modal/ModalFooter.jsx";
import ModalClose from "./components/Modal/ModalClose.jsx";
import {useEffect, useState} from "react";
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
import BrandDeals from "./containers/BrandDeals/BrandDeals.jsx";
import Heading from "./components/Heading/Heading.jsx";
import Hero from "./containers/Hero/Hero.jsx";
import ProductList from "./containers/ProductList/ProductList.jsx";
import CategoryCard from "./containers/ProductList/CategoryCard.jsx";
import {sendRequest} from "./helpers/sendRequest.js";
import ProductCard from "./containers/ProductList/ProductCard.jsx";

function App() {

    const [modalCart, setModalCart] = useState(false);

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const [favoritesItems, setFavoritesItems] = useState(JSON.parse(localStorage.getItem("favoritesItems")) || []);

    const [categoryOneProducts, setCategoryOneProducts] = useState(null);
    const [categoryTwoProducts, setCategoryTwoProducts] = useState(null);
    const [categorySaleProducts, setCategorySaleProducts] = useState(null);

    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        sendRequest('./public/products.json')
            .then(data => {
                let productsData = data;
                let categoryOne = productsData.filter(product => product.gender.includes('male'));
                if (categoryOne.length > 8) {
                    categoryOne.length = 8;
                }
                setCategoryOneProducts(categoryOne);

                let categoryTwo = productsData.filter(product => product.gender.includes('female'));
                if (categoryTwo.length > 4) {
                    categoryTwo.length = 4;
                }
                setCategoryTwoProducts(categoryTwo);

                let categorySale = productsData.filter(product => product.sale === true);
                if (categorySale.length > 4) {
                    categorySale.length = 4;
                }
                setCategorySaleProducts(categorySale);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("favoritesItems", JSON.stringify(favoritesItems));
    }, [favoritesItems]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    function handleFavoriteToggle(e) {
        const alreadyExists = favoritesItems.some(item => item.code === e.code);
        if (!alreadyExists) {
            setFavoritesItems(prevState => {
                return [...prevState, e];
            });
        } else {
            setFavoritesItems(prevState => {
                return prevState.filter(item => item.code !== e.code);
            });
        }
    }

    function handleProductToCartToggle(e) {
        setCurrentProduct(e);
        handleToggleModalCart(e);
    }

    function handleAddingToCartFromModal() {

        setCartItems(prevState =>  [...prevState, currentProduct]);

        handleToggleModalCart();
    }

    function handleDeleteFromCartByModal(){
        setCartItems(prevState => {
            return prevState.filter(item => item.code !== currentProduct.code);
        });

        handleToggleModalCart();
    }

    function renderAddToCartModal() {
        const alreadyExist = cartItems.some(item => item.code === currentProduct.code);
        return (
            <ModalWrapper onClick={handleToggleModalCart}>
                <ModalBody>
                    <ModalClose onClick={handleToggleModalCart}/>
                    <ModalImage src={`/public/products/${currentProduct.image}`} alt={currentProduct.name}/>
                    {!alreadyExist && <ModalHeader>
                        Add product <strong>{currentProduct.name}</strong> to cart?
                    </ModalHeader>}
                    {alreadyExist && <ModalHeader>Prodcut <strong>{currentProduct.name}</strong> is already in your cart!</ModalHeader>}
                    {alreadyExist && <ModalText>Do you want to delete it?</ModalText>}
                    {!alreadyExist &&  <ModalFooter
                        firstText="Add to Cart"
                        secondaryText="Cancel"
                        firstClick={handleAddingToCartFromModal}
                        secondaryClick={handleToggleModalCart}
                    />}
                    {alreadyExist && <ModalFooter
                        firstText="Delete from Cart"
                        secondaryText="Cancel"
                        firstClick={handleDeleteFromCartByModal}
                        secondaryClick={handleToggleModalCart}
                    />}
                </ModalBody>
            </ModalWrapper>
        )
    }

    function handleToggleModalCart(currentProduct = null) {
        setModalCart(!modalCart);
        setCurrentProduct(currentProduct);
    }

    return (
        <>
            {/*HEADER*/}
            <Header>
                <Container>
                    <div className="header__holder">
                        <a href="#!" className="header__logo">
                            <ShopLogo/>
                        </a>
                        <nav className="header__nav">
                            <ul>
                                <li><a href="#!" className="active">Shop</a></li>
                                <li><a href="#!">Men</a></li>
                                <li><a href="#!">Women</a></li>
                                <li><a href="#!">Combos</a></li>
                                <li><a href="#!">Joggers</a></li>
                            </ul>
                        </nav>
                        <div className="header__search">
                            <SearchIcon/>
                            <input type="search" placeholder="Search"/>
                        </div>
                        <div className="header__buttons">
                            <button type="button" className="action-btn">
                                <span className="count">{favoritesItems.length}</span>
                                <HeartIcon/>
                            </button>
                            <button type="button" className="action-btn">
                                <span className="count">{cartItems.length}</span>
                                <CartIcon/>
                            </button>
                        </div>
                    </div>
                </Container>
            </Header>
            {/*HEADER END*/}

            {/*HERO*/}
            <Hero/>
            {/*HERO END*/}

            <Heading>Categories For Men</Heading>

            {categoryOneProducts && <ProductList>
                {categoryOneProducts.map((product, index) => {
                    return (
                        <CategoryCard
                            key={index}
                            product={product}
                            favoritesItems={favoritesItems}
                            cartItems={cartItems}
                            handleFavoriteToggle={handleFavoriteToggle}
                            handleProductToCartToggle={handleProductToCartToggle}/>
                    )
                })}
            </ProductList>}


            <Heading>Categories For Women</Heading>

            {categoryOneProducts && <ProductList>
                {categoryTwoProducts.map((product, index) => {
                    return (
                        <CategoryCard
                            key={index}
                            product={product}
                            favoritesItems={favoritesItems}
                            cartItems={cartItems}
                            handleFavoriteToggle={handleFavoriteToggle}
                            handleProductToCartToggle={handleProductToCartToggle}/>
                    )
                })}
            </ProductList>}

            {/*brand deals*/}
            <BrandDeals/>
            {/*brand deals END*/}


            <Heading>In The Limelight</Heading>

            {categoryOneProducts && <ProductList>
                {categorySaleProducts.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            product={product}
                            favoritesItems={favoritesItems}
                            cartItems={cartItems}
                            handleFavoriteToggle={handleFavoriteToggle}
                            handleProductToCartToggle={handleProductToCartToggle}/>
                    )
                })}
            </ProductList>}


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

            {modalCart && currentProduct && renderAddToCartModal()}

        </>
    )
}

export default App
