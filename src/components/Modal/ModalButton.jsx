import './ModalButton.scss';
export default function ModalButton({firstText, secondaryText, ...restProps}){
    return <button {...restProps}>{firstText}{secondaryText}</button>
}