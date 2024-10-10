import React, {useContext} from "react";
import Heading from "../components/Heading/Heading.jsx";
import Container from "../containers/Container/Container.jsx";
import {CURRENCY_SYMBOL} from "../helpers/variables.js";
import ProductList from "../containers/ProductList/ProductList.jsx";
import SimpleProduct from "../containers/ProductList/SimpleProduct.jsx";
import ModalWrapper from "../components/Modal/ModalWrapper.jsx";
import ModalBody from "../components/Modal/ModalBody.jsx";
import ModalClose from "../components/Modal/ModalClose.jsx";
import ModalHeader from "../components/Modal/ModalHeader.jsx";
import ModalFooter from "../components/Modal/ModalFooter.jsx";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {
    setCurrentProductAndToggleModal,
    toggleCartProduct,
    clearCurrentProductAndResetModal
} from "../store/index.js";

import {
    selectorCart,
    selectorCurrentProduct,
} from "../store/selectors.js";

import FlowSwitcher from "../components/FlowSwitcher/FlowSwitcher.jsx";


export default function Cart() {

    const dispatch = useDispatch();

    const selCart = useSelector(selectorCart);
    const selCurrentProduct = useSelector(selectorCurrentProduct);


    function renderConfirmModal() {
        return (
            <>
                <ModalWrapper onClick={() => {
                    dispatch(clearCurrentProductAndResetModal())
                }}>
                    <ModalBody>
                        <ModalClose onClick={() => {
                            dispatch(clearCurrentProductAndResetModal())
                        }}/>
                        <ModalHeader>
                            Do you want to remove product from cart?
                        </ModalHeader>
                        <ModalFooter
                            firstText="Yes"
                            secondaryText="Cancel"
                            firstClick={() => {
                                dispatch(toggleCartProduct(selCurrentProduct))
                                dispatch(clearCurrentProductAndResetModal())
                            }}
                            secondaryClick={() => {
                                dispatch(clearCurrentProductAndResetModal())
                            }}
                        />
                    </ModalBody>
                </ModalWrapper>
            </>
        )
    }

    function calcTotal() {
        let total = selCart.reduce((acc, item) => acc + item.price, 0);
        return `(Total: ${CURRENCY_SYMBOL}${total})`;
    }

    return (
        <>
            <Container>
                <Heading>Products in your cart {selCart.length > 0 && calcTotal()}</Heading>

                <FlowSwitcher/>

                <ProductList>
                    {selCart && selCart.map((item, index) => (
                        <SimpleProduct
                            key={index}
                            product={item}
                            buttonText="Remove From Cart"
                            action={() => {
                                dispatch(setCurrentProductAndToggleModal(item))
                            }}
                        />
                    ))}
                </ProductList>

                {selCart && selCart.length > 0 && <>
                    <hr/>
                    <Link className="button button-red button-small" to="/checkout">Proceed to checkout</Link></>}
                {selCart.length === 0 && <p>No products in cart.</p>}
                {selCurrentProduct && renderConfirmModal()}
            </Container>
        </>
    )
        ;
};