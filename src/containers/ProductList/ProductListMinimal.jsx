import './ProductListMinial.scss';
import {CURRENCY_SYMBOL} from "../../helpers/variables.js";
import {useDispatch, useSelector} from "react-redux";
import {
    toggleCartProduct,
} from "../../store/index.js";
import {selectorCart} from '../../store/selectors.js'

export default function ProductListMinimal() {
    const dispatch = useDispatch();
    const selCart = useSelector(selectorCart);

    return (
        <>
            <div className="product-list-min">
                {selCart && selCart.map((item) => {
                    return (
                        <div className="product-list-min__item" key={`cart-min-list-${item.code}`}>
                            <img src={`/products/${item.image}`} alt={item.name} loading="lazy"/>
                            <p className="product-list-min__title">{item.name}</p>
                            <p className="product-list-min__price">{`${CURRENCY_SYMBOL}`}{item.price}</p>
                            <button className="action-btn" onClick={() => {
                                dispatch(toggleCartProduct(item))
                            }}>&times;</button>
                        </div>
                    )
                })}
            </div>
        </>
    );
};