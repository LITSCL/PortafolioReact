import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className="logo">
          <span>D</span>
          <h3>DANIEL ÁLVAREZ</h3>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => { return isActive ? "activo" : ""; }}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/portafolio" className={({isActive}) => { return isActive ? "activo" : ""; }}>Portafolio</NavLink>
            </li>
            <li>
              <NavLink to="/curriculum" className={({isActive}) => { return isActive ? "activo" : ""; }}>Curriculum</NavLink>
            </li>
            <li>
              <NavLink to="/servicios" className={({isActive}) => { return isActive ? "activo" : ""; }}>Servicios</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({isActive}) => { return isActive ? "activo" : ""; }}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
