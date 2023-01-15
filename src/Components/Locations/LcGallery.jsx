import React from 'react';
import "./LcGallery.css"

export default function LcGallery({ listLocation }) {
    return (
      <div className="card-wrapper-location">
        {listLocation.map((item) => (
          <figure key={item.id}>
            <li className="card-location">
            <img className="cardImage-location" src="https://kokuroimport.com/med/img/productos/34/14/GORRA_NAVE_ESPACIAL_RICK_&_MORTY_2.jpg" alt={item.name} />
  
              <figcaption className="card-info-name-location">{item.name}</figcaption>
            </li>
          </figure>
        ))}
      </div>
    );
  }