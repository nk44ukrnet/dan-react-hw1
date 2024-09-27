import Heading from "../components/Heading/Heading.jsx";
import Container from "../containers/Container/Container.jsx";
import {CURRENCY_SYMBOL} from "../helpers/variables.js";
import ProductList from "../containers/ProductList/ProductList.jsx";
import SimpleProduct from "../containers/ProductList/SimpleProduct.jsx";
import {useState} from "react";
import ModalWrapper from "../components/Modal/ModalWrapper.jsx";
import ModalBody from "../components/Modal/ModalBody.jsx";
import ModalClose from "../components/Modal/ModalClose.jsx";
import ModalHeader from "../components/Modal/ModalHeader.jsx";
import ModalFooter from "../components/Modal/ModalFooter.jsx";

export default function Cart({cartItems, handleCartItemRemove}) {
    const [confirmModal, setConfirmModal] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null);

    function handleModalOpen(e) {
        setConfirmModal(true);
        setCurrentProduct(e);

    }
    function handleModalClose(){
        setConfirmModal(false);
        setCurrentProduct(null);
    }

    function handleConfirm(code){
        handleCartItemRemove({code});
        handleModalClose();
    }

    function renderConfirmModal(){
        return (
            <>
                <ModalWrapper onClick={handleModalClose}>
                    <ModalBody>
                        <ModalClose onClick={handleModalClose} />
                        <ModalHeader>
                            Do you want to remove product from cart?
                        </ModalHeader>
                        <ModalFooter
                            firstText="Yes"
                            secondaryText="Cancel"
                            firstClick={()=>{handleConfirm(currentProduct)}}
                            secondaryClick={handleModalClose}
                        />
                    </ModalBody>
                </ModalWrapper>
            </>
        )
    }

    function calcTotal(){
        let total = cartItems.reduce((acc, item) => acc + item.price, 0);
        return `(Total: ${CURRENCY_SYMBOL}${total})`;
    }
 return (
  <>
      <Container>
          <Heading>Products in your cart {cartItems.length > 0 && calcTotal()}</Heading>
            <ProductList>
                {cartItems && cartItems.map((item, index) => (
                    <SimpleProduct
                    key={index}
                    name={item.name}
                    image={item.image}
                    buttonText="Remove From Cart"
                    action={handleModalOpen}
                    code={item.code}
                    price={item.price}
                    />
                ))}
            </ProductList>
          {cartItems.length === 0 && <p>No products in cart.</p>}
          {confirmModal && renderConfirmModal()}
      </Container>
  </>
 );
};