import Hero from "../containers/Hero/Hero.jsx";
import Heading from "../components/Heading/Heading.jsx";
import ProductList from "../containers/ProductList/ProductList.jsx";
import CategoryCard from "../containers/ProductList/CategoryCard.jsx";
import BrandDeals from "../containers/BrandDeals/BrandDeals.jsx";
import ProductCard from "../containers/ProductList/ProductCard.jsx";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../store/index.js";
import {selectorCategoryOne, selectorFavorites} from "../store/selectors.js";

export default function Home(props) {
    const {
        // categoryOneProducts,
        categoryTwoProducts,
        categorySaleProducts,
        cartItems,
        favoritesItems,
        currentProduct,
        modalCart,
        handleFavoriteToggle,
        handleProductToCartToggle
    } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

     const categoryOneProducts = useSelector(selectorCategoryOne);
     const selFavorites = useSelector(selectorFavorites);
    console.log('favorites', selFavorites)
    if (!categoryOneProducts) {
        return 'Loading...'; // or perhaps return some sort of loading spinner
    }
    console.log(categoryOneProducts)
    console.log(categoryOneProducts)
    console.log(categoryOneProducts)
    console.log(categoryOneProducts)

    return (
        <>
            {/*HERO*/}
            <Hero/>
            {/*HERO END*/}

            <Heading>Categories For Men</Heading>

            {categoryOneProducts && <ProductList>
                {/*{categoryOneProducts.map((product, index) => {*/}
                {/*    return (*/}
                {/*        <CategoryCard*/}
                {/*            key={index}*/}
                {/*            product={product}*/}
                {/*            favoritesItems={favoritesItems}*/}
                {/*            cartItems={cartItems}*/}
                {/*            handleFavoriteToggle={handleFavoriteToggle}*/}
                {/*            handleProductToCartToggle={handleProductToCartToggle}/>*/}
                {/*    )*/}
                {/*})}*/}

                {/*{categoryOneProducts.map((product, index) =>{*/}
                {/*    return (*/}
                {/*        <CategoryCard*/}
                {/*        key={index}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})}*/}
                {categoryOneProducts.map((item,index)=>{
                    console.log(item)
                   return <div key={index}>{index}</div>
                })}
            </ProductList>}


            <Heading>Categories For Women</Heading>

            {categoryTwoProducts && <ProductList>
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

            {categorySaleProducts && <ProductList>
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
        </>
    );
};