import React, { useState } from 'react';
import { NavBar as Props } from './type';

function NavBar(props: Props) {
  const [show, toggleDropNav] = useState(false);
  const { brand, routes = [] } = props;

  return (
    <div className="navbar">
      <a href="/" className="navbar-brand">
        {brand}
      </a>
      <button className="navbar-toggler" type="button" onClick={() => toggleDropNav(!show)}>
        Toggle
      </button>
      <div className={show ? 'navbar-collapse show' : 'navbar-collapse'}>
        <ul className="navbar-nav">
          {routes.map(route => (
            <li key={route.key || route.link} className="navbar-item">
              <a href={route.link}>{route.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
