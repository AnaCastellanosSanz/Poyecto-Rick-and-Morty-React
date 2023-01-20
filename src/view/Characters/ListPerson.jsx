import Person from "./Person.jsx";
import React from "react";
import "../../styles/ListPerson.css"

//El listado está en app para enviar datos de un componente a otro utilizamos props.
function ListPerson ({ list }) {
   

    const personLi = list.map((oneElement) => {
     //Como no sé cuantos li voy a recibir, debo mapear de nuevo, el map devuele un elemento único que a su vez devuelve un li en el que se encuentra un título (h2) y una imágen. (CADA LI SE ENCUENTRA EN PERSON ES POR ELLO QUE RETORNO PERSON)
     return <div>
     <Person oneElement={oneElement} key={oneElement.id}/>
     </div>
     //Aqui es donde envío la props cada vez que llame a Person (De esta manera obtengo los datos de oneElement. La Key viene porque en la consola aparece un error de que se necesita poner una key para identificar cada elemento, se tiene que poner al hijo directo del map.

});
        
        return <ul className="cardAll"> {personLi}</ul>;
};
export default ListPerson;