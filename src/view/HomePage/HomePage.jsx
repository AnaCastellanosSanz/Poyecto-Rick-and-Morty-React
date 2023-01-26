import { themeContext } from "../../Components/App.jsx";
import { useContext } from "react";
import "../../styles/HomePage.css"

function HomePage() {
    const theme = useContext(themeContext);
    const imageUrlDark = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif";
    const imageUrlLight = "https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif";
    const imageUrl = theme === "light" ? imageUrlLight : imageUrlDark;

    return (
        <div className="heroImages">
            <img src={imageUrl} alt="imagen" />
        </div>
    );
}

export default HomePage;