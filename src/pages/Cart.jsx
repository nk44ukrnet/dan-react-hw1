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

import {useDispatch, useSelector} from "react-redux";
import {
    setCurrentProductAndToggleModal,
    clearCurrentProduct,
    toggleHomeModalCart, toggleCartProduct,
} from "../store/index.js";

import {
    selectorCart,
    selectorHomeModalCart,
    selectorCurrentProduct,
} from "../store/selectors.js";

export default function Cart() {

    const dispatch = useDispatch();

    const selCart = useSelector(selectorCart);
    const selHomeModalCart = useSelector(selectorHomeModalCart);
    const selCurrentProduct = useSelector(selectorCurrentProduct);


    function renderConfirmModal(){
        return (
            <>
                <ModalWrapper onClick={()=>{
                    dispatch(clearCurrentProduct())
                    dispatch(toggleHomeModalCart())
                }}>
                    <ModalBody>
                        <ModalClose onClick={()=>{
                            dispatch(clearCurrentProduct())
                            dispatch(toggleHomeModalCart())
                        }} />
                        <ModalHeader>
                            Do you want to remove product from cart?
                        </ModalHeader>
                        <ModalFooter
                            firstText="Yes"
                            secondaryText="Cancel"
                            firstClick={()=>{
                                dispatch(toggleCartProduct(selCurrentProduct))
                                dispatch(clearCurrentProduct())
                                dispatch(toggleHomeModalCart())
                            }}
                            secondaryClick={()=>{
                                dispatch(clearCurrentProduct())
                                dispatch(toggleHomeModalCart())
                            }}
                        />
                    </ModalBody>
                </ModalWrapper>
            </>
        )
    }

    function calcTotal(){
        let total = selCart.reduce((acc, item) => acc + item.price, 0);
        return `(Total: ${CURRENCY_SYMBOL}${total})`;
    }

 return (
  <>
      <Container>
          <Heading>Products in your cart {selCart.length > 0 && calcTotal()}</Heading>
            <ProductList>
                {selCart && selCart.map((item, index) => (
                    <SimpleProduct
                    key={index}
                    name={item.name}
                    image={item.image}
                    buttonText="Remove From Cart"
                    action={()=>{
                        dispatch(setCurrentProductAndToggleModal(item))
                    }}
                    code={item.code}
                    price={item.price}
                    />
                ))}
            </ProductList>
          {selCart.length === 0 && <p>No products in cart.</p>}
          {selCurrentProduct && renderConfirmModal()}
      </Container>
  </>
 );
};