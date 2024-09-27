import Container from "../containers/Container/Container.jsx";
import Heading from "../components/Heading/Heading.jsx";
import ProductList from "../containers/ProductList/ProductList.jsx";
import SimpleProduct from "../containers/ProductList/SimpleProduct.jsx";
import {useState} from "react";
import ModalWrapper from "../components/Modal/ModalWrapper.jsx";
import ModalBody from "../components/Modal/ModalBody.jsx";
import ModalClose from "../components/Modal/ModalClose.jsx";
import ModalHeader from "../components/Modal/ModalHeader.jsx";
import ModalFooter from "../components/Modal/ModalFooter.jsx";

export default function Favorites({favoritesItems, handleRemoveFromFavorites}) {
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
        handleRemoveFromFavorites({code});
        handleModalClose();
    }


    function renderConfirmModal(){
        return (
            <>
                <ModalWrapper onClick={handleModalClose}>
                    <ModalBody>
                        <ModalClose onClick={handleModalClose} />
                        <ModalHeader>
                            Do you want to remove product from favorites?
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
    return (
        <>
            <Container>
                <Heading>List Of Your Favorite Products</Heading>
                <ProductList>
                    {favoritesItems && favoritesItems.map((item, index) => {
                        return (
                            <SimpleProduct
                                key={index}
                                name={item.name}
                                image={item.image}
                                buttonText="Remove From Favorites"
                                action={handleModalOpen}
                                code={item.code}
                                price={item.price}
                            />
                        )
                    })}
                </ProductList>
                {favoritesItems.length === 0 && <p>No products in favorites.</p>}
                {confirmModal && renderConfirmModal()}
            </Container>
        </>
    );
};