import './FooterItem.scss';
export default function FooterItem({children}) {
 return (
  <div className="footer-holder__item">
      {children}
  </div>
 );
};