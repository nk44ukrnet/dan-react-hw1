import {CURRENCY_SYMBOL} from "../../helpers/variables.js";
import HeartIcon from "/public/heart.svg?react";
import CartIcon from "/public/cart.svg?react";
import './ProductCard.scss'
import PropTypes from "prop-types";

export default function ProductCard(props) {
    if (!props.product) return;
    const {product = '', favoritesItems = [], cartItems = [], handleFavoriteToggle, handleProductToCartToggle} = props;
    const {brand, image, name, price} = product;

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
        <div className="product-card">
            <img src={`/public/products/${image}`} alt={name} loading="lazy" className="product-card__image"/>
            <div className="product-card__cell">
                <div className="product-card__text">
                    <p className="product-card__title">{name}</p>
                    <p className="product-card__brand">{brand} Brand</p>
                </div>
                <div className="product-card__price">{CURRENCY_SYMBOL}{price}</div>
            </div>
            <div className="product-card__abs">
                <button type="button" className={`action-btn ${extraFavCSSCLass}`} onClick={handleOnFavClick}>
                    <HeartIcon/>
                </button>
                <button type="button" className={`action-btn ${extraCartCSSCLass}`} onClick={handleOnCartCLick}>
                    <CartIcon/>
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
    favoritesItems: PropTypes.array,
    cartItems: PropTypes.array,
    handleFavoriteToggle: PropTypes.func,
    handleProductToCartToggle: PropTypes.func,
}