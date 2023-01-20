import "../../styles/Notfound.css"
import React from "react"
import notfound from "../../images/error404.png"


function Notfound () {
    return (
        <div>
            <p className="notFound-text"> Página no encontrada error 404 </p>
            <img  src={notfound}className="notFound-img" alt="NotFound"></img>
        </div>
    )

}

export default Notfound;