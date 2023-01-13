import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPerson.css"


// Esta parte es el detalle de cada uno de los personajes que aparecen al clicar 
function DetailPerson( { listPerson } ) {
    // Utiliza la función "useParams" de React Router para obtener el id del personaje actual de la URL.
    const params = useParams(); 
    const foundPerson = listPerson.find((element) => element.id ===          
    parseInt(params.id)
    );

    return <article className="personDetail">
    
        <img src={foundPerson.img} alt="" className="personDetail__image"  />
        <div className="personDetail__info">
            <h3 className="personDetail__name"> Name: {foundPerson.name}  </h3>
            <p className="personDetail__status"> Status: {foundPerson.status} </p>
            <p className="personDetail__location"> Location: {foundPerson.location} </p>
            <p className="personDetail__gender"> Gender: {foundPerson.gender} </p>
            <Link to="/characters" className="Back"> - Back - </Link>
        </div>
    </article>
    
}



export default DetailPerson;