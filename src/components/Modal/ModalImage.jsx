import './ModalImage.scss';
export default function ModalImage({src = "https://picsum.photos/276/140", alt = ""}) {
 return (
  <>
      <img src={src} alt={alt} className="modal-image" width="276" height="140" loading="lazy"/>
  </>
 );
};