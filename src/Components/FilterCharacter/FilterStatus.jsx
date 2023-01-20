import "../../styles/FilterStatus.css"

//FilterStatus recibe por props a handleStatus, que se encuentra en App
//En cuanto al onChange recibe una call back que se llevará a cabo cuando reciba el cambio, cuando ocurra el evento se va a ejecutar handleStatus el cual recibe el valor seleccionado.
//Paso por props tambien status (viene del filtro de app) le paso el valor al evento de tal forma que al hacer un filtro de los personajes y clicar sobre uno de ellos al volver a la parte de characters, se me siguen manteniniendo los personajes que estaban guardados en la variable de estado, no all por defecto.
function FilterStatus ({ handleStatus, status }) {
    return <div className="filter">
        <label htmlFor="status"></label>
        <select className="filterStatus" name="" id="status" onChange={(ev) => handleStatus(ev.target.value)} value = {status}>
            <option value="All">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
        </select>
    </div>
}

export default FilterStatus;