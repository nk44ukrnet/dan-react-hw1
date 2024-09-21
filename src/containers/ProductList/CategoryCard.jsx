import './CategoryCard.scss';
import RightArrowIcon from '/public/arrow-right.svg?react';
import HeartIcon from "/public/heart.svg?react";
import CartIcon from "/public/cart.svg?react";
import PropTypes from "prop-types";

export default function CategoryCard(props) {
    if (!props.product) return;

    const {product = '', favoritesItems = [], cartItems = [], handleFavoriteToggle, handleProductToCartToggle} = props;

    const {category, image, name} = product;

    let extraFavCSSCLass = '';

    if (favoritesItems && favoritesItems.length > 0) {
        const hasProductWithCurrentFavoriteCode = favoritesItems.some(prod => prod.code === product.code);


        if (hasProductWithCurrentFavoriteCode) {
            extraFavCSSCLass = ' active ';
        }
    }


    let extraCartCSSCLass = '';

    if (cartItems && cartItems.length > 0) {
        const hasProductWithCurrentCartCode = cartItems.some(prod => prod.code === product.code);
        if (hasProductWithCurrentCartCode) {
            extraCartCSSCLass = ' active ';
        }
    }

   function handleOnFavClick(){
       handleFavoriteToggle(product)
   }
    function handleOnCartCLick(){
        handleProductToCartToggle(product)
    }

    return (
        <div className="category-card">
            <img src={`/public/products/${image}`} alt={name} loading="lazy" className="category-card-image"/>
            <div className="category-card__inner">
                <div className="category-card__texts">
                    <p className="category-card__title">{category.map(cat => `${cat} `)}</p>
                    <p className="category-card__subtitle">Explore Now!</p>
                </div>
                <RightArrowIcon/>
            </div>
            <div className="category-card__abs">
                <button type="button" className={`action-btn ${extraFavCSSCLass}`} onClick={handleOnFavClick}><HeartIcon/></button>
                <button type="button" className={`action-btn ${extraCartCSSCLass}`} onClick={handleOnCartCLick}><CartIcon/></button>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    product: PropTypes.object,
    favoritesItems: PropTypes.array,
    cartItems: PropTypes.array,
    handleFavoriteToggle: PropTypes.func,
    handleProductToCartToggle: PropTypes.func,
}