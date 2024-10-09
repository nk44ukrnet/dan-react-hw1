import Heading from "../components/Heading/Heading.jsx";
import ProductListMinimal from "../containers/ProductList/ProductListMinimal.jsx";
import Container from "../containers/Container/Container.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectorCart} from '../store/selectors.js';
import {CURRENCY_SYMBOL} from "../helpers/variables.js";
import './Checkout.scss';
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";
import {useFormik} from 'formik'
import {checkoutValidation} from './CheckoutValidation.js'
import { PatternFormat } from 'react-number-format';
import { emptyCart } from '../store/index.js'
import {useState} from "react";
import {Link} from "react-router-dom";


export default function Checkout() {
    const selCart = useSelector(selectorCart);
    const dispatch = useDispatch();

    const [cartMessage, setCartMessage] = useState(null);

    function calcTotal() {
        let total = selCart.reduce((acc, item) => acc + item.price, 0);
        return `(Total: ${CURRENCY_SYMBOL}${total})`;
    }

    const initialFormData = {
        firstName: '',
        lastName: '',
        age: '',
        delivery: '',
        phone: '',
    }
    const formik = useFormik({
        initialValues: initialFormData,
        validationSchema: checkoutValidation,
        onSubmit: (values, { resetForm }) => {
            console.log('form information: ',values);
            console.log('Products purchased: ', selCart)
            setCartMessage('Thanks for shopping in our store. List of products and data that you entered from from is logged to the console. Have a safe and pleasant day!')

            dispatch(emptyCart());
            resetForm();
        }
    })

    return (
        <>
            <Heading>Checkout {selCart && selCart.length > 0 && calcTotal()}</Heading>

            <Container>
                {selCart && selCart.length > 0 && <div className="checkout-holder">
                      <div>
                        <form onSubmit={formik.handleSubmit}>
                            <Input
                                labelText="First Name"
                                name="firstName"
                                errorMessage={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : null}
                                {...formik.getFieldProps("firstName")}
                            />
                            <Input
                                labelText="Last Name"
                                name="lastName"
                                errorMessage={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : null}
                                {...formik.getFieldProps("lastName")}
                            />
                            <Input
                                labelText="Age"
                                name="age"
                                type="number"
                                errorMessage={formik.errors.age && formik.touched.age ? formik.errors.age : null}
                                {...formik.getFieldProps("age")}
                            />
                            <Input
                                labelText="Delivery Address"
                                name="delivery"
                                errorMessage={formik.errors.delivery && formik.touched.delivery ? formik.errors.delivery : null}
                                {...formik.getFieldProps("delivery")}
                            />
                            <PatternFormat
                                labelText="Phone Number"
                                name="phone"
                                type="string"
                                customInput={Input}  // Custom input component
                                format="+38(###)###-##-##"  // Mask format
                                mask="_"  // Mask character
                                allowEmptyFormatting
                                value={formik.values.phone}  // Formik value
                                onValueChange={(values) => formik.setFieldValue('phone', values.formattedValue)}  // Update Formik value with formatted phone
                                errorMessage={formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}  // Show Formik error message if any
                            />
                            <Button classNames="button button-small-v2" type="submit">Checkout</Button>
                        </form>
                    </div>
                    <ProductListMinimal/>
                </div>}
                {cartMessage && <h2>{cartMessage}</h2>}
                {selCart && selCart.length === 0 && !cartMessage && <p>No products in the cart. <Link to="/">Start shopping</Link></p>}
            </Container>
        </>
    );
};