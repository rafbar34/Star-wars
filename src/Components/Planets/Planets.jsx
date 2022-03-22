import React, { useState, useEffect } from "react";
import axios from "axios";

export function Planets({ apiLinkPlanets }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const getDataPlanets = async () => {
      const response = await axios.get(apiLinkPlanets);
      setPlanets(response.data);
      return response;
    };

    getDataPlanets();
  }, [apiLinkPlanets]);

  return (
    <div className="planets bg-gray-800 bg-opacity-60 rounded-xl p-2">
      {[planets].map(({ name, diameter, population, terrain,url },index) => {
        return (
          <div className="text-center" key={url+index}>
            <p className="text-lg mb-3">Planets</p>
            <p>
              <b>Name</b> {name}
            </p>
            <p>
              <b>Diameter</b> {diameter}
            </p>
            <p>
              <b>Population</b> {population}
            </p>
            <p>
              <b>Terrain</b> {terrain}
            </p>
          </div>
        );
      })}
    </div>
  );
}
