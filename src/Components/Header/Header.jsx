import { Link } from "react-router-dom";
import "./Header.css";


function Header(){
    //Link SIEMPRE va con seguido de to que indica las diferentes rutas que en este caso tendrá el header
    return <header className="class-header">
       
        <nav className="class-header__nav">
            <Link to="/" className="class-header__link">Home</Link>
            <Link to="/characters" className="class-header__link">Characters</Link>
            <Link to="/locations" className="class-header__link">Locations</Link>
        </nav>
        
    </header>
}

export default Header;