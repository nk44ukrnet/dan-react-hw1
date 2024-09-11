import './ModalHeader.scss';
export default function Modal({children}) {
 return (
  <div className="modal">
      {children}
  </div>
 );
};