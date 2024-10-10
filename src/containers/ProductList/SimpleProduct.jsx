import React, {useContext} from "react";
import './SimpleProduct.scss'
import Button from "../../components/Button/Button.jsx";
import {CURRENCY_SYMBOL} from "../../helpers/variables.js";
import cn from "classnames";
import {ContextFlexGrow} from  '../../context/context.jsx'

export default function SimpleProduct({product, action, buttonText}) { //name, image, buttonText, action, code, price
    function handleClick() {
        action({product});
    }
    const {flexGrow} = useContext(ContextFlexGrow)
    return (

        <>
            <div className={cn("simple-product", {"grow": flexGrow === true})}>
                <img src={`/public/products/${product.image}`} alt={product.name} loading="lazy"/>
                <p><strong>{product.name}</strong></p>
                <p>Price: {`${CURRENCY_SYMBOL}${product.price}`}</p>
                <Button classNames="button button-small" onClick={handleClick}>{buttonText}</Button>
            </div>
        </>
    );
};
