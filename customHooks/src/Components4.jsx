import React from 'react';
import useCurrentLocation from './useCurrentLocation';

function LocationComponent() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getCurrentLocation}>Ottieni posizione</button>

      {loading && <p>Caricamento...</p>}
      {error && <p>{error}</p>}
      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default LocationComponent;
