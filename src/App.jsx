import Button from "./components/Button/Button";
import './App.scss';
import ModalWrapper from "./components/Modal/ModalWrapper.jsx";
import ModalBody from "./components/Modal/ModalBody.jsx";
import ModalImage from "./components/Modal/ModalImage.jsx";
import ModalHeader from "./components/Modal/ModalHeader.jsx";
import ModalText from "./components/Modal/ModalText.jsx";
import ModalFooter from "./components/Modal/ModalFooter.jsx";
import ModalClose from "./components/Modal/ModalClose.jsx";
import {useState} from "react";


function App() {

    const [fistModal, setFistModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);

    function handleToggleFirstModal() {
        return setFistModal(!fistModal);
    }
    function handleToggleSecondModal() {
        return setSecondModal(!secondModal);
    }

    function handleModalOverlayClick(e, targetFunction ){
        if(e.target.classList.contains("modal-wrapper")) {
            targetFunction();
        }
    }

    function handleModalFirstCLick(){
        console.log('first button clicked')
    }
    function handleModalSecondaryClick(){
        console.log('secondary button clicked')
    }

    return (
        <>
            <div className="buttons-holder">
                <Button type="button" classNames="button" onClick={handleToggleFirstModal}>Open First Modal</Button>
                <Button type="button" classNames="button" onClick={handleToggleSecondModal}>Open Second Modal</Button>
            </div>

            {fistModal && <ModalWrapper onClick={(e)=> handleModalOverlayClick(e, handleToggleFirstModal)}>
                <ModalBody>
                    <ModalClose onClick={handleToggleFirstModal} />
                    <ModalImage/>
                    <ModalHeader>Product Delete!</ModalHeader>
                    <ModalText>By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.</ModalText>
                    <ModalFooter
                        firstText="NO, CANCEL"
                        secondaryText="YES, DELETE"
                        firstClick={handleModalFirstCLick}
                        secondaryClick={handleModalSecondaryClick}
                    />
                </ModalBody>
            </ModalWrapper>}

            {secondModal && <ModalWrapper onClick={(e)=> handleModalOverlayClick(e, handleToggleSecondModal)}>
                <ModalBody>
                    <ModalClose onClick={handleToggleSecondModal} />
                    <ModalHeader>Add Product “NAME”</ModalHeader>
                    <ModalText>Description for you product</ModalText>
                    <ModalFooter
                        firstText="ADD TO FAVORITE"
                    />
                </ModalBody>
            </ModalWrapper>}

        </>
    )
}

export default App
