import './SimpleProduct.scss'
import Button from "../../components/Button/Button.jsx";
import {CURRENCY_SYMBOL} from "../../helpers/variables.js";

export default function SimpleProduct({name, image, buttonText, action, code, price}) {
    function handleClick() {
        action(code);
    }

    return (
        <>
            <div className="simple-product">
                <img src={`/public/products/${image}`} alt={name} loading="lazy"/>
                <p><strong>{name}</strong></p>
                <p>Price: {`${CURRENCY_SYMBOL}${price}`}</p>
                <Button classNames="button button-small" onClick={handleClick}>{buttonText}</Button>
            </div>
        </>
    );
};
