import React, { useEffect, useState } from "react";
import '../styles/App.css'
import api from '../services/api'; //Importo todo el documento api, no únicamente la funcón de getDataApi
import ListPerson from "./Characters/ListPerson"; //Únicamente se importa ListPerson ya que Person va incluido en este 
import { Route, Routes } from 'react-router-dom';
import DetailPerson from "./Characters/DetailCharacter/DetailPerson.jsx";
import FilterStatus from "./Characters/FilterStatus.jsx";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import Notfound from "./Notfound/Notfound";
import Footer from "./Footer/Footer";
import ContactForm from "./Form/ContactForm";
import LocationsPage from "./Locations/LocationsPage";
import Received from "./Received/Received";


function App () {
    //Variable de estado, se crea porque se van a modificar los datos de api
    const [ listPerson, setListPerson] = useState([]) //Se le pasa un array ya que será un array de objetos.

    const [status, setStatus] = useState("");


    //Se crea la variable de estado form que utilizaremos para almacenar los datos del formulario; es un objeto con cada una de las propiedades del formulario.
    //La función setForm se va a encargar de actualizar la variable de estado y actualización del componente. LA utilizaremos en la función handleForm.
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        });


    const [submit, setSubmit] = useState(false)


    //Aqui es donde utilizaremos los datos obtenidos de "api"
    //UseEfect se encarga de controlar un bloque de código, si no ponemos el segundo parámetro se ejecuta cada vez que se renderiza.
    useEffect(() => {
        api().then ((data) => setListPerson(data)); //Se le pasa setListPerson porque quiero modificar la variable de estado con los datos que me vienen de la API.

    },[]) //Este array vacío permite que solo se ejecute una vez, cuando se carga la página 


    //Creo la función manejadora del evento, que cambia a la variable de estado, recibe el value seleccionado (vivo, muerto o totos) y modifica a la variable de estado con ese value, lo suyo es que en el componente donde se encuentre la variable de estado, se encuentre también la función que modifique la variable.
    const handleStatus = (value) =>{
        setStatus (value);
    }

    //El filtro se realiza sobre la lista, lo creo que app porque es donde se encuentra la lista de los personajes. Element.status tiene que incluir el valor de la variable de estado. Si el status incluye lo que está guardado en la variable de status, esto 
    const filteredData = listPerson.filter((element) => {
        //Se hace un condicional en el que si status es extrictamente igual a all le devuelve a todos los personajes (todos los elementos del array) y si no devuelve aquellos que tengan el status seleccionado.
        if (status === "All"){
            return true; 
        }
        else {
           return element.status.includes(status);
           //Tambien podría utilizarse element.status === status;
           //En ternario sería --> return status === "All" ? true : element.status === status;
        }
    } );
    
    //Función que se ejecuta cada vez que el usuario modifica el contenido de un campo del formulario. Actualiza la variable de estado para reflejar los cambios realizados por el usuario.
    const handleForm = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.value,
        });
        };
    

     //Función que se ejecuta cada vez que el usuario modifica el contenido de un campo del formulario. Actualiza la variable de estado para reflejar los cambios realizados por el usuario.
    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('formData', JSON.stringify(form))
        setForm({name:"", email:"", message:""})
    //alert ("Recibido!!")
        setSubmit(true)
        };
    useEffect(() => {
            if (submit) {
              setTimeout(() => {
                setSubmit(false);
              }, 3000);
            }
          }, [submit]);
        

    //Los parámetros que tiene Routes es el Path (la URL) y el componente que va a usar
    //En caso de que la ruta sea esta, muestrame este componente 
    //Pongo listPerson para mandarle las propiedas a DetailPerson mediante props
    //En route tengo que utilizar siempre path y element y en link tengo que utilizar siempre el to
    //Para que el filtro aparezca únicamente en la ruta del Home, tengo que crear un div y meter alli los diferentes elemntos, solo debe tener constancia de que hay un solo hijo.
    //El path * permite que cualquier ruta que no esté definida aparezca el mensaje de error, lo suyo es crear un componente.
    return (
    <>
    <Header></Header>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
         path='/characters' 
         element={
        <>
        <FilterStatus handleStatus={handleStatus} status={status}/>
        <ListPerson list={filteredData}  />
        </>}/>
        <Route  path='/character/detail/:id' element={<DetailPerson listPerson={listPerson} /> }/>
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="*" element={ <Notfound />}/>
        <Route path="/contact" element={!submit ? (<ContactForm form={form} handleForm={handleForm} handleSubmit={handleSubmit}/>) : ( <Received /> )}/>

    </Routes>
    <Footer></Footer>
    </>
    );
}

export default App; 