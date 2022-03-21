import React, { useState, useEffect } from "react";
import axios from "axios";

export function Vehicles({ apiLinkVehicles }) {
  const [vehicle, setvehicle] = useState([]);
  useEffect(() => {
    const getDataVehicle = async () => {
      const response = await axios.get(apiLinkVehicles);
      setvehicle(response.data);
      return response;
      console.log(response);
    };

    getDataVehicle();
  }, [apiLinkVehicles]);

  return (
    <div className="bg-gray-800 bg-opacity-60 rounded-xl p-2 ">
      {[vehicle].map(({ name, model, passengers }) => {
        return (
          <div>
            <p className="text-lg mb-3">Vehicles</p>
            <p>
              <b>Name</b> {name}
            </p>
            <p>
              <b>Model</b> {model}
            </p>
            <p>
              <b>Passengers </b>
              {passengers}
            </p>
          </div>
        );
      })}
    </div>
  );
}
