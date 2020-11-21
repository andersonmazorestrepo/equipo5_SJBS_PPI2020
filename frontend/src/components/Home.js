import React, { useEffect, useState } from "react";
import { Link, withRouter} from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div className="text-center mb-4 py-5">
      <h2 className="text-center mb-4 py-2 bg-primary text-white" >Mapa</h2>
      <p>Latitud: {state.latitude}</p>
      <p>Longitud: {state.longitude}</p>

      <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
      >
        Abrir mapa
      </Link>
    </div>
  );
};

export default Home;