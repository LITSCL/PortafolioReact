import React from 'react';

export const ContactoPage = () => {
  return (
    <>
      <div className="pagina">
        <h1>Contacto</h1>
        <form action="#">
          <input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Correo"/>
          <input type="text" placeholder="Nombre"/>
          <textarea placeholder="Motivo de contacto"></textarea>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    </>
  );
}
