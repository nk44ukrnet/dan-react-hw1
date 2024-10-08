import Heading from "../components/Heading/Heading.jsx";
import ProductListMinimal from "../containers/ProductList/ProductListMinimal.jsx";
import Container from "../containers/Container/Container.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectorCart} from '../store/selectors.js';
import {CURRENCY_SYMBOL} from "../helpers/variables.js";
import './Checkout.scss';
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";

export default function Checkout() {
    const selCart = useSelector(selectorCart);

    function calcTotal() {
        let total = selCart.reduce((acc, item) => acc + item.price, 0);
        return `(Total: ${CURRENCY_SYMBOL}${total})`;
    }

    return (
        <>
            <Heading>Checkout {selCart && selCart.length > 0 && calcTotal()}</Heading>

            <Container>
                <div className="checkout-holder">
                    <div>
                        <form>
                            <Input
                                labelText="First Name"
                                name="firstName"
                            />
                            <Input
                                labelText="Last Name"
                                name="lastName"
                            />
                            <Input
                                labelText="Age"
                                name="age"
                                type="number"
                            />
                            <Input
                                labelText="Delivery Address"
                                name="delivery"
                            />
                            <Input
                                labelText="Phone Number"
                                name="phone"
                            />
                            <Button classNames="button button-small-v2" type="submit">Checkout</Button>
                        </form>
                    </div>
                    <ProductListMinimal/>
                </div>
            </Container>
        </>
    );
};