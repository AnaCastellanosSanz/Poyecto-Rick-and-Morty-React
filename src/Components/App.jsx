import React, { useEffect, useState, createContext } from "react";
import '../styles/App.css'
import api from '../services/api'; //Importo todo el documento api, no únicamente la funcón de getDataApi
import ListPerson from "../view/Characters/ListPerson.jsx"; //Únicamente se importa ListPerson ya que Person va incluido en este 
import { Route, Routes } from 'react-router-dom';
import DetailPerson from "../view/Characters/DetailCharacter/DetailPerson.jsx";
import FilterStatus from "./FilterCharacter/FilterStatus.jsx";
import Header from "./Header/Header";
import HomePage from "../view/HomePage/HomePage.jsx";
import Notfound from "./Notfound/Notfound";
import Footer from "./Footer/Footer";
import ContactForm from "./Form/ContactForm";
import Received from "./Received/Received";
import LocationsPage from "../services/LocationsPage";
import Login from './Authentication/Login.jsx';
import RequiredAuth from '../auth/RequiredAuth.js';
import { login } from '../auth/auth.js'
import ReactSwitch from "react-switch";




//Creamos un contexto para que pueda ser utilizado por  los demás componentes sin necesidad de props y establecemos el valor inicial en dark. 
export const themeContext = createContext('dark')


function App () {

    //DATOS DE LA API
    //Variable de estado, se crea porque se van a modificar los datos de api
    const [ listPerson, setListPerson] = useState([]) //Se le pasa un array ya que será un array de objetos.


    //FILTER
    const [status, setStatus] = useState("");


    //FORM
    //Se crea la variable de estado form que utilizaremos para almacenar los datos del formulario; es un objeto con cada una de las propiedades del formulario.
    //La función setForm se va a encargar de actualizar la variable de estado y actualización del componente. La utilizaremos en la función handleForm.
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        });


    const [submit, setSubmit] = useState(false)


     //DATOS DE LA API 

    //Aqui es donde utilizaremos los datos obtenidos de "api"
    //UseEfect se encarga de controlar un bloque de código, si no ponemos el segundo parámetro se ejecuta cada vez que se renderiza.
    useEffect(() => {
        api().then ((data) => setListPerson(data)); //Se le pasa setListPerson porque quiero modificar la variable de estado con los datos que me vienen de la API.

    },[]) //Este array vacío permite que solo se ejecute una vez, cuando se carga la página 



    //FILTER

    //Creo la función manejadora del evento, que cambia a la variable de estado, recibe el value seleccionado (vivo, muerto o totos) y modifica a la variable de estado con ese value, lo suyo es que en el componente donde se encuentre la variable de estado, se encuentre también la función que modifique la variable.
    const handleStatus = (value) =>{
        setStatus (value);
    }

    //El filtro se realiza sobre la lista, lo creo que app porque es donde se encuentra la lista de los personajes. Element.status tiene que incluir el valor de la variable de estado. Si el status incluye lo que está guardado en la variable de status,

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
    


    //FORM

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
        setSubmit(true)
        };
    useEffect(() => {
            if (submit) {
              setTimeout(() => {
                setSubmit(false);
              }, 3000);
            }
          }, [submit]);
        



        //AUTENTIFICADOR

        const [user, setUser] = useState(null);
        const authenticated = user != null;
        const loginUser = ({email, password}) => 
        setUser(login({ email, password }));
        const logoutUser = () => setUser(null);
        
        
        //Creamos un estado en el componente actual que se llama "theme" y establecemos su valor inicial en "dark". El hook "useState" devuelve un par de valores, el primero es el estado actual y el segundo es una función para actualizar el estado.
        //La función toggleTheme usa la función "setTheme" que recibió de useState para cambiar el tema actual, si el tema actual es "dark" se pone "light" y viceversa.
        const [theme, setTheme] = useState("dark");
        const toggleTheme = ()=>{
            setTheme(theme=>(theme==="dark"?"light":"dark"));
        }




    //Los parámetros que tiene Routes es el Path (la URL) y el componente que va a usar
    //En caso de que la ruta sea esta, muestrame este componente 
    //Pongo listPerson para mandarle las propiedas a DetailPerson mediante props
    //En route tengo que utilizar siempre path y element y en link tengo que utilizar siempre el to
    //Para que el filtro aparezca únicamente en la ruta del Home, tengo que crear un div y meter alli los diferentes elemntos, solo debe tener constancia de que hay un solo hijo.
    //El path * permite que cualquier ruta que no esté definida aparezca el mensaje de error, lo suyo es crear un componente.
    return (
    
    <themeContext.Provider value={theme}>
    <div className="mainDiv" id={theme}>
        {theme === "light" ? (
            <p>{theme} mode</p>
            ) : (
                <p>{theme} mode</p>
            )}
        <ReactSwitch 
            onChange={toggleTheme} 
            checked={theme==="light"}
            checkedIcon={false}
            uncheckedIcon={false}
            />

        <Header authenticated={authenticated} logoutUser={logoutUser}></Header>
        {authenticated ? <p className='usuario'>Bienvenidx: {user.username}</p> : <p className='usuario'>No User</p>}
         
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
            <Route path="/locations" 
            element={
                <>
                <RequiredAuth authenticated={authenticated} />
                <LocationsPage /> 
                </>} />
            <Route path="*" element={ <Notfound />}/>
            <Route path="/contact" element={!submit ? (<ContactForm form={form} handleForm={handleForm} handleSubmit={handleSubmit}/>) : ( <Received /> )}/>
            <Route path='/login' element={<Login loginUser={loginUser}></Login>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
    </themeContext.Provider>
    );
}

export default App; 