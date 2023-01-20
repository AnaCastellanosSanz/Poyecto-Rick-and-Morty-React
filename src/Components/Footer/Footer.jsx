import { Link } from "react-router-dom";
import "../../styles/Footer.css"


function Footer (){
    return <footer className="class-footer">
        <div className="footer_mainDiv">
            <div className="footer_Div">
                <a href="https://www.rickandmorty.com/" className="footer_link">Visita su Página Oficial</a>
                <Link to="/contact" className="footer_link">Déjanos tu comentario</Link>
            </div>
            <div className="second_div">
                <a href="https://twitter.com/RickandMorty"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="https://facebook.com/rickandmorty"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://instagram.com/rickandmorty"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
        </div>  
    </footer>

}
export default Footer;