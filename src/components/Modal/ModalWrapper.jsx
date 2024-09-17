import './ModalWrapper.scss';

export default function ModalWrapper({children, onClick}) {
    return <div className="modal-wrapper" onClick={onClick}>{children}</div>
}