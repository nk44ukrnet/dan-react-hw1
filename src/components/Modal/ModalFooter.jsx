import Button from "../Button/Button.jsx";

export default function ModalFooter({firstText, secondaryText, firstClick, secondaryClick}){
return (
    <div className="modal-footer">
        {firstText & <Button onClick={firstClick}>{firstText}</Button>}
        {secondaryText & <Button onClick={secondaryClick}>{secondaryText}</Button>}
    </div>
)
}