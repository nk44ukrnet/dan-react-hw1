import Button from "./components/Button/Button";
import './App.scss';
import ModalWrapper from "./components/Modal/ModalWrapper.jsx";
import ModalBody from "./components/Modal/ModalBody.jsx";
import ModalImage from "./components/Modal/ModalImage.jsx";
import ModalHeader from "./components/Modal/ModalHeader.jsx";
import ModalText from "./components/Modal/ModalText.jsx";
import ModalFooter from "./components/Modal/ModalFooter.jsx";
import ModalClose from "./components/Modal/ModalClose.jsx";
import {useState} from "react";
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


function App() {

    const [fistModal, setFistModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);

    const [cartCount, setCartCount] = useState(0);
    const [favoritesCount, setFavoritesCount] = useState(0);

    function handleToggleFirstModal() {
        return setFistModal(!fistModal);
    }

    function handleToggleSecondModal() {
        return setSecondModal(!secondModal);
    }

    function handleModalOverlayClick(e, targetFunction) {
        if (e.target.classList.contains("modal-wrapper")) {
            targetFunction();
        }
    }

    function handleModalFirstCLick() {
        console.log('first button clicked')
    }

    function handleModalSecondaryClick() {
        console.log('secondary button clicked')
    }

    return (
        <>
            {/*<div className="buttons-holder">*/}
            {/*    <Button type="button" classNames="button" onClick={handleToggleFirstModal}>Open First Modal</Button>*/}
            {/*    <Button type="button" classNames="button" onClick={handleToggleSecondModal}>Open Second Modal</Button>*/}
            {/*</div>*/}

            {/*HEADER*/}
            <Header className='qwe'>
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
                                <span className="count">{favoritesCount}</span>
                                <HeartIcon/>
                            </button>
                            <button type="button" className="action-btn">
                                <span className="count">{cartCount}</span>
                                <CartIcon/>
                            </button>
                        </div>
                    </div>
                </Container>
            </Header>
            {/*HEADER END*/}

            {/*brand deals*/}
            <BrandDeals/>
            {/*brand deals END*/}


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

            {fistModal && <ModalWrapper onClick={(e) => handleModalOverlayClick(e, handleToggleFirstModal)}>
                <ModalBody>
                    <ModalClose onClick={handleToggleFirstModal}/>
                    <ModalImage/>
                    <ModalHeader>Product Delete!</ModalHeader>
                    <ModalText>By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.</ModalText>
                    <ModalFooter
                        firstText="NO, CANCEL"
                        secondaryText="YES, DELETE"
                        firstClick={handleModalFirstCLick}
                        secondaryClick={handleModalSecondaryClick}
                    />
                </ModalBody>
            </ModalWrapper>}

            {secondModal && <ModalWrapper onClick={(e) => handleModalOverlayClick(e, handleToggleSecondModal)}>
                <ModalBody>
                    <ModalClose onClick={handleToggleSecondModal}/>
                    <ModalHeader>Add Product “NAME”</ModalHeader>
                    <ModalText>Description for you product</ModalText>
                    <ModalFooter
                        firstText="ADD TO FAVORITE"
                    />
                </ModalBody>
            </ModalWrapper>}

        </>
    )
}

export default App
