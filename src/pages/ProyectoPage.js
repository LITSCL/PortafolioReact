import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProyectoService } from '../services/proyecto-service';

export const ProyectoPage = () => {
  var {id} = useParams();
  var [proyectoState, setProyectoState] = useState({});
  var _proyectoService = new(ProyectoService);

  useEffect(() => {
    var proyectos = _proyectoService.getProyectos();
    setProyectoState(proyectos.filter(proyecto => proyecto.id == id)[0]);
  }, []);

  return (
    <>
      <div className="pagina">
        <h1>Detalle Proyecto</h1>
        <div className="detalle-proyecto">
          <div>
            <img src={"/img/" + proyectoState.imagen}/>
          </div>
          <h1>{proyectoState.nombre}</h1>
          <strong>{proyectoState.tecnologias}</strong>
          <p>{proyectoState.descripcion}</p>
          <a href={"https://" + proyectoState.url} target="_blank">Ir al proyecto</a> {/*El atributo "target" con valor "_blank", permite que se abra el enlace en una pestaña nueva.*/}
        </div>
      </div>
    </>
  );
}