import Fb from './icons/fb.svg?react'
import Insta from './icons/insta.svg?react'
import Twitter from './icons/twitterX.svg?react'
import In from './icons/In.svg?react'
import './FooterScocials.scss';
export default function FooterSocials() {
 return (
  <ul className="footer-socials">
        <li><a href="#!" target="_blank"><Fb /></a></li>
        <li><a href="#!" target="_blank"><Insta /></a></li>
        <li><a href="#!" target="_blank"><Twitter /></a></li>
        <li><a href="#!" target="_blank"><In /></a></li>
  </ul>
 );
};