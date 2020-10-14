import React from 'react';

import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/logo-marker.svg';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/ophernages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />
          <h2>Choose an orphanage on the map</h2>
          <p>Many children are waiting for your visit :)</p>
        </header>

        <footer>
          <strong>Passos</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;