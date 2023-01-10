import { Link } from "react-router-dom";
import "./Footer.css"
function Footer (){
    return <footer className="class-footer">
        <div className="footer_Div">
            <a href="https://www.rickandmorty.com/" className="footer_link">Visita su Página Oficial</a>
            <Link to="/contact" className="footer_link">Déjanos tu comentario</Link>
        </div>
    </footer>

}

export default Footer;