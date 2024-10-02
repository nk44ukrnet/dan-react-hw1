import './SimpleProduct.scss'
import Button from "../../components/Button/Button.jsx";
import {CURRENCY_SYMBOL} from "../../helpers/variables.js";

export default function SimpleProduct({product, action, buttonText}) { //name, image, buttonText, action, code, price
    function handleClick() {
        action({product});
    }

    return (
        <>
            <div className="simple-product">
                <img src={`/public/products/${product.image}`} alt={product.name} loading="lazy"/>
                <p><strong>{product.name}</strong></p>
                <p>Price: {`${CURRENCY_SYMBOL}${product.price}`}</p>
                <Button classNames="button button-small" onClick={handleClick}>{buttonText}</Button>
            </div>
        </>
    );
};
