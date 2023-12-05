import React from 'react';

export const ServiciosPage = () => {
  return (
    <>
      <div className="pagina">
        <h1>Servicios</h1>
        <section className="servicios">
          <article className="servicio">
            <h2>Desarrollo WEB</h2>
            <p>Desarrollo de aplicaciones WEB a medida</p>
          </article>
          <article className="servicio">
            <h2>Desarrollo de Videojuegos</h2>
            <p>Desarrollo de videojuegos de escritorio y móvil</p>
          </article>
          <article className="servicio">
            <h2>Desarrollo Móvil</h2>
            <p>Desarrollo de aplicaciones móviles</p>
          </article>
        </section>
      </div>
    </>
  );
}
