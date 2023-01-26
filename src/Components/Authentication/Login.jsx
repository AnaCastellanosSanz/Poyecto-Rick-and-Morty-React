import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/Login.scss"


//El componente "Login" recibe una propiedad llamada "loginUser" que se utiliza para iniciar sesión con los datos del usuario. El componente mantiene el estado de un formulario de inicio de sesión con dos campos: "email" y "password", utilizando el hook "useState".

const Login = ({loginUser}) => {
    const INITIAL_STATE = {
        email:"",
        password:""
    };
    const [formUser, setFormUser] = useState({INITIAL_STATE});

    //La función "handleInput" se utiliza para actualizar el estado del componente cada vez que el usuario ingresa o modifica algún valor en los campos del formulario.
    const handleInput = (ev) => {
      const {id, value} =ev.target;
      setFormUser({...formUser, [id]: value});

    };
    //La función "useNavigate" de "react-router-dom" es utilizada para navegar a través de la aplicación. El componente finalmente renderiza un formulario HTML con dos campos de entrada y un botón de envío que permite al usuario iniciar sesión.
    const navigate = useNavigate();

    //La función "onSubmit" se activa cuando el usuario hace clic en el botón "Login" y se encarga de evitar que la página se recargue,recoge los datos del usuario del formulario y los pasa como parámetro a la función "loginUser" y navega al componente "Locations" en la aplicación.
    const onSubmit = (ev) => {
      ev.preventDefault(); //Para que no se renderice
      const {email, password} = formUser;
      loginUser({email, password});
      navigate('/locations');
    };
    //Devuelvo los datos del formulario
  return (
    <div className='formLogin'>
    <form onSubmit={onSubmit} className='formulario'>
      <label htmlFor='email'>Email</label>
      <input type="text" id='email' value={formUser.email} onChange={handleInput}></input>
      <label htmlFor='password'>Password</label>
      <input type='text' id='password' value={formUser.password} onChange={handleInput}></input>
      <button type='submit' className='buttonLogin'>Login</button>
    </form>

    </div>
  )
}

export default Login