import CloseIcon from './icons/close-icon.svg?react'
import './ModalClose.scss';

export default function ModalClose({onClick}) {
    return <button type="button" className="close-modal" onClick={onClick}>
        <CloseIcon/>
    </button>
}