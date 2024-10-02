import Hero from "../containers/Hero/Hero.jsx";
import Heading from "../components/Heading/Heading.jsx";
import ProductList from "../containers/ProductList/ProductList.jsx";
import CategoryCard from "../containers/ProductList/CategoryCard.jsx";
import BrandDeals from "../containers/BrandDeals/BrandDeals.jsx";
import ProductCard from "../containers/ProductList/ProductCard.jsx";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchProducts,
    toggleFavorite,
    toggleCartProduct,
    setCurrentProductAndToggleModal,
    clearCurrentProductAndResetModal
} from "../store/index.js";

import {selectorCart,
    selectorCategoryOne,
    selectorCategoryTwo,
    selectorCategorySale,
    selectorFavorites,
    selectorCurrentModal,
    selectorCurrentProduct,
} from "../store/selectors.js";

import ModalWrapper from "../components/Modal/ModalWrapper.jsx";
import ModalBody from "../components/Modal/ModalBody.jsx";
import ModalClose from "../components/Modal/ModalClose.jsx";
import ModalImage from "../components/Modal/ModalImage.jsx";
import ModalHeader from "../components/Modal/ModalHeader.jsx";
import ModalText from "../components/Modal/ModalText.jsx";
import ModalFooter from "../components/Modal/ModalFooter.jsx";

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

     const categoryOneProducts = useSelector(selectorCategoryOne);
     const categoryTwoProducts = useSelector(selectorCategoryTwo);
     const categorySaleProducts = useSelector(selectorCategorySale);
     const selFavorites = useSelector(selectorFavorites);
     const selCart = useSelector(selectorCart);

     const selCurrentModal = useSelector(selectorCurrentModal);
     const selCurrentProduct = useSelector(selectorCurrentProduct);

    function renderAddToCartModal() {
        const alreadyExist = selCart.some(item => item.code === selCurrentProduct.code);
        return (
            <ModalWrapper onClick={()=>{
                dispatch(clearCurrentProductAndResetModal())
            }}>
                <ModalBody>
                    <ModalClose onClick={()=>{
                        dispatch(clearCurrentProductAndResetModal())
                    }}/>
                    <ModalImage src={`/public/products/${selCurrentProduct.image}`} alt={selCurrentProduct.name}/>
                    {!alreadyExist && <ModalHeader>
                        Add product <strong>{selCurrentProduct.name}</strong> to cart?
                    </ModalHeader>}
                    {alreadyExist && <ModalHeader>Product <strong>{selCurrentProduct.name}</strong> is already in your cart!</ModalHeader>}
                    {alreadyExist && <ModalText>Do you want to delete it?</ModalText>}
                    {!alreadyExist &&  <ModalFooter
                        firstText="Add to Cart"
                        secondaryText="Cancel"
                        firstClick={()=>{
                            dispatch(toggleCartProduct(selCurrentProduct))
                            dispatch(clearCurrentProductAndResetModal())
                        }}
                        secondaryClick={()=>{
                            dispatch(clearCurrentProductAndResetModal())
                        }}
                    />}
                    {alreadyExist && <ModalFooter
                        firstText="Delete from Cart"
                        secondaryText="Cancel"
                        firstClick={()=>{
                            dispatch(toggleCartProduct(selCurrentProduct))
                            dispatch(clearCurrentProductAndResetModal())
                        }}
                        secondaryClick={()=>{
                            dispatch(clearCurrentProductAndResetModal())
                        }}
                    />}
                </ModalBody>
            </ModalWrapper>
        )
    }

    return (
        <>
            {/*HERO*/}
            <Hero/>
            {/*HERO END*/}

            <Heading>Categories For Men</Heading>

            {categoryOneProducts && <ProductList>

                {categoryOneProducts.map((product, index) =>{
                    return (
                        <CategoryCard
                        key={index}
                        product={product}
                        favoritesItems={selFavorites}
                        cartItems={selCart}
                        handleFavoriteToggle={()=> dispatch(toggleFavorite(product))}
                        handleProductToCartToggle={()=>{
                            dispatch(setCurrentProductAndToggleModal(product))
                        }}
                        />
                    )
                })}

            </ProductList>}


            <Heading>Categories For Women</Heading>

            {categoryOneProducts && <ProductList>

            {categoryTwoProducts.map((product, index) =>{
                return (
                    <CategoryCard
                        key={index}
                        product={product}
                        favoritesItems={selFavorites}
                        cartItems={selCart}
                        handleFavoriteToggle={()=> dispatch(toggleFavorite(product))}
                        handleProductToCartToggle={()=>{
                            dispatch(setCurrentProductAndToggleModal(product))
                        }}
                    />
                )
            })}

            </ProductList>}


            {/*brand deals*/}
            <BrandDeals/>
            {/*brand deals END*/}


            <Heading>In The Limelight</Heading>

            {categorySaleProducts && <ProductList>
                {categorySaleProducts.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            product={product}
                            favoritesItems={selFavorites}
                            cartItems={selCart}
                            handleFavoriteToggle={()=> dispatch(toggleFavorite(product))}
                            handleProductToCartToggle={()=>{
                                dispatch(setCurrentProductAndToggleModal(product))
                            }}/>
                    )
                })}
            </ProductList>}

            {selCurrentModal && selCurrentProduct && renderAddToCartModal()}
        </>
    );
};