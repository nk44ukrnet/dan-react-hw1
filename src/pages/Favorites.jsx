import Container from "../containers/Container/Container.jsx";
import Heading from "../components/Heading/Heading.jsx";
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
    toggleFavorite,
    clearCurrentProductAndResetModal,
} from "../store/index.js";

import {
    selectorFavorites,
    selectorCurrentProduct,
} from "../store/selectors.js";
import FlowSwitcher from "../components/FlowSwitcher/FlowSwitcher.jsx";

export default function Favorites() {

    const dispatch = useDispatch();

    const selFavorites = useSelector(selectorFavorites);
    const selCurrentProduct = useSelector(selectorCurrentProduct);

    function renderConfirmModal(){
        return (
            <>
                <ModalWrapper onClick={()=>{
                    dispatch(clearCurrentProductAndResetModal())
                }}>
                    <ModalBody>
                        <ModalClose onClick={()=>{
                            dispatch(clearCurrentProductAndResetModal())
                        }} />
                        <ModalHeader>
                            Do you want to remove product from favorites?
                        </ModalHeader>
                        <ModalFooter
                            firstText="Yes"
                            secondaryText="Cancel"
                            firstClick={()=>{
                                dispatch(toggleFavorite(selCurrentProduct))
                                dispatch(clearCurrentProductAndResetModal())
                            }}
                            secondaryClick={()=>{
                                dispatch(clearCurrentProductAndResetModal())
                            }}

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
                <FlowSwitcher />
                <ProductList>
                    {selFavorites && selFavorites.map((item, index) => {
                        return (
                            <SimpleProduct
                                key={index}
                                product={item}
                                buttonText="Remove From Favorites"
                                action={()=>{dispatch(setCurrentProductAndToggleModal(item))}}
                            />
                        )
                    })}
                </ProductList>
                {selFavorites.length === 0 && <p>No products in favorites.</p>}
                {selCurrentProduct && renderConfirmModal()}
            </Container>
        </>
    );
};