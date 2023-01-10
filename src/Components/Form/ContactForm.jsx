import React from "react";
import "./Form.css"
import Form from "./Form.png"

//Recibe la variable de estado y la función.
function ContactForm({form, handleForm}) {
  return (
    <div className="div_Form">
      <img src={Form} alt="imagen"/>
      <form className="form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleForm} required />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleForm} required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" value={form.message} onChange={handleForm} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;