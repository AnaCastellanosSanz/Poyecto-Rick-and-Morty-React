import React from "react";
import { Link } from "react-router-dom";
import './person.css'

//Recibo por props oneElement que proviene de ListPerson.
//Person va a ser cada uno de los li 
//La propiedad que tiene Link es to, que permite que al hacer click obtenga la ruta de donde quieres ir cuando clickes en el personaje. El to va a contener una parte estática y una parte dinámica y hay que ponerlo como en Javascript. OJO HAY QUE PONER LAS COMILLAS FRANCESAS SI NO NO FUNCIONA.
function Person ({ oneElement }) {
     return (
    <div className="card-wrapper">
    <li className="card"> 
    <Link to = {`/character/detail/${oneElement.id}`}>
        <img src={oneElement.img} alt={oneElement.name} className="cardImage" />
        <h2 className="card-info-name">{oneElement.name} </h2>
    </Link>
    </li>
    </div>)
};

export default Person;