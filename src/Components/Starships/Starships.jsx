import React, { useState, useEffect } from "react";
import axios from "axios";

export function Starships({ apiLinkShips }) {
  const [starships, setstarships] = useState([]);
  useEffect(() => {
    const getDataStarships = async () => {
      const response = await axios.get(apiLinkShips);
      setstarships(response.data);
      return response;
      
    };

    getDataStarships();
  }, [apiLinkShips]);

  return (
    <div className="bg-gray-800 bg-opacity-60 rounded-xl p-2 ">
      {[starships].map(({ name, model, passengers }) => {
        return (
          <div>
            <p className="text-lg mb-3">starships</p>
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
