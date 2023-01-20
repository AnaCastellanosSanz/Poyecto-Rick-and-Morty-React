import { Link } from "react-router-dom";
import "../../styles/Header.scss";


function Header({ authenticated, logoutUser}){
    //Link SIEMPRE va con seguido de to que indica las diferentes rutas que en este caso tendrá el header.
    // El .click se utiliza para que se desplique el menu en la versión móvil.
    return  (
    
        <section class="top-nav">
      <div>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
      </label>
      <ul class="menu">
      <li><Link onClick={() => {document.getElementById("menu-toggle").click()}} to='/'>HOME</Link></li>
        <li><Link onClick={() => {document.getElementById("menu-toggle").click()}} to='/characters'>CHARACTERS</Link></li>
        <li><Link onClick={() => {document.getElementById("menu-toggle").click()}}  to='/locations'>LOCATIONS</Link></li>
        <div className="logIn">
        {authenticated ? (
              <li className='log'>
            <p className='logout' onClick={logoutUser}>LOGOUT</p>
            </li>) : (<Link to="/login" className='login'>LOGIN</Link>)}
        </div>
      </ul>
    </section>
    )
}
export default Header;