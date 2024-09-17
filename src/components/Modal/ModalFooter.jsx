
import './ModalFooter.scss';
export default function ModalFooter({firstText, secondaryText, firstClick, secondaryClick}){
return (
    <div className="modal-footer">
        {firstText && <button type="button" className="modal-button" onClick={firstClick}>{firstText}</button>}
        {secondaryText && <button type="button" className="modal-button modal-button--outline"
                 onClick={secondaryClick}>{secondaryText}</button>}
    </div>
)
}