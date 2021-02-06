import React, { useState } from 'react';
import { FiPlus  } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer,  } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/create-orphanage.css';

export default function OrphanagesMap() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    
    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[-23.6258523,-46.5741696]}
              style={{ width: '100%', height: 280 }}
              zoom={16}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
               {/* <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> */}

                { position.latitude !== 0 
                  ? <Marker interactive={false} icon={mapIcon} position={[-23.6258523,-46.5741696]} />
                  : null }                
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name"/>
            </div>

            <div className="input-block">
              <label htmlFor="name">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300}/>
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>
          
              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>
            
            <div className="input-block">
              <label htmlFor="name">Instruções</label>
              <textarea id="instructions"/>
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours"/>
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}