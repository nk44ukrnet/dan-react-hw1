import propTypes from "prop-types";
import cn from 'classnames';
import './Header.scss';
export default function Header({className, children}) {
 return (
  <header className={cn(`header`, className)}>
   {children}
  </header>
 );
};

Header.propTypes = {
 className: propTypes.string,
 children: propTypes.any,
}