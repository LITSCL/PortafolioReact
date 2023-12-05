import React from 'react';
import { Link } from 'react-router-dom';
import { ListadoComponent } from '../components/ListadoComponent';

export const IndexPage = () => {
  return (
    <>
      <div className="pagina">
        <h1>Hola, me llamo <strong>Daniel Álvarez</strong>, soy Desarrollador de Software, me dedico al desarrollo web, de escritorio, de videojuegos y móvil.</h1>
        <h2>Poseo conocimientos en JS; PHP; JAVA. <Link to="/contacto">Concatate conmigo</Link></h2>
        <section className="ultimos-proyectos">
          <h2>Algunos de mis proyectos</h2>
          <p>Estos son algunos de mis proyectos personales:</p>
        </section>
        <div className="proyectos">
          <ListadoComponent limite={4}></ListadoComponent>
        </div>
      </div>
    </>
  );
}
