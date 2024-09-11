import Button from "./components/Button/Button";
import './App.scss';
import ModalWrapper from "./components/Modal/ModalWrapper.jsx";
import ModalBody from "./components/Modal/ModalBody.jsx";


function App() {
    
    return (
        <>
            <div className="buttons-holder">
                <Button type="button" classNames="button">Open First Modal</Button>
                <Button type="button" classNames="button">Open Second Modal</Button>
            </div>
            <ModalWrapper>
                <ModalBody>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae deserunt expedita explicabo fugiat fugit ipsa magnam nulla placeat quam quis, quisquam quo soluta tenetur ullam unde veniam? Aspernatur atque dignissimos fugit. Adipisci consequatur, cupiditate deleniti hic molestiae nam nihil, odit quisquam recusandae repudiandae, suscipit voluptatibus? Culpa dolorum recusandae vitae.
                </ModalBody>
            </ModalWrapper>
        </>
    )
}

export default App
