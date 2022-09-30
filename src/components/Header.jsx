import '../assets/style/header/tittle.css'
import '../assets/style/header/navbar.css'
import '../assets/style/header/social.css'
import '../assets/style/header/header.css'
import '../assets/style/header/navbar.css'
import '../assets/style/header/tittle.css'
import '../assets/style/header/social.css'
import logo from '../assets/img/spotify-logo.png'
import 'https://kit.fontawesome.com/56c91e3d04.js'


function Header() {
  return (
    <header>
        <div className="item title">
            <img src={logo} alt=""/>
        </div>

        <div className="item menu">
            <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li className="center"><a href="#">Inicio</a></li>
                <li className="upward"><a href="#">Premiums</a></li>
                <li className="forward"><a href="#">Ayuda</a></li>
                <li className="forward"><a href="#">Descargar</a></li>
            </ul>
        </div>

        <div className="item social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
        </div>
    </header>
  );
}
export default Header;
