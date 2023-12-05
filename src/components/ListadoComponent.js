import React from 'react';
import { Link } from 'react-router-dom';
import { ProyectoService } from '../services/proyecto-service';

export const ListadoComponent = (props) => {
  var limite = props.limite;
  var _proyectoService = new(ProyectoService);

  return (
    <>
      <section className="contenedor-proyectos">
        {
          _proyectoService.getProyectos().slice(0, limite).map((proyecto) => {
            return (
              <article className="proyecto" key={proyecto.id}>
                <div>
                  <img src={"/img/" + proyecto.imagen}/>
                </div>
                <span>{proyecto.categoria}</span>
                <h2><Link to={"/proyecto/" + proyecto.id}>{proyecto.nombre}</Link></h2>
                <h3>{proyecto.tecnologias}</h3>
              </article>
            );
          })
        }
      </section>
    </>
  );
}
