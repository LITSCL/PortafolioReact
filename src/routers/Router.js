import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'; //La librería "react-router-dom" permite definir rutas y mostrarlas sin recargar la página.
import { FooterLayout } from '../layouts/FooterLayout';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { ContactoPage } from '../pages/ContactoPage';
import { CurriculumPage } from '../pages/CurriculumPage';
import { ProyectoPage } from '../pages/ProyectoPage';
import { IndexPage } from '../pages/IndexPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PortafolioPage } from '../pages/PortafolioPage';
import { ServiciosPage } from '../pages/ServiciosPage';

export const Router = () => {
  return (
    <BrowserRouter>
      {/*Header y navegación.*/}
      <HeaderLayout></HeaderLayout>

      {/*Contenido central.*/}
      <section className="contenido">
      <Routes>
          <Route path="/" element={<IndexPage></IndexPage>}></Route>
          <Route path="/portafolio" element={<PortafolioPage></PortafolioPage>}></Route>
          <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>}></Route>
          <Route path="/servicios" element={<ServiciosPage></ServiciosPage>}></Route>
          <Route path="/contacto" element={<ContactoPage></ContactoPage>}></Route>
          <Route path="/proyecto/:id" element={<ProyectoPage></ProyectoPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </section>

      {/*Pie de página.*/}
      <FooterLayout></FooterLayout>
    </BrowserRouter>
  );
}
