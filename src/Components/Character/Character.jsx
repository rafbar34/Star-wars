import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export function Character({ apiLinkCharacter }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getDataCharacter = async () => {
      const response = await axios.get(apiLinkCharacter);
      setCharacters(response.data);
      return response;
    };

    getDataCharacter();
  }, [apiLinkCharacter]);

  return (
    <div className="bg-gray-800 bg-opacity-60 rounded-xl p-2 ">
      {[characters].map(({ name, mass, height, eye_color }) => {
        return (
          <div className="text-center">
            <p className="text-lg mb-3">Characters</p>
            <p>
              <b>Name</b> {name}
            </p>
            <p>
              <b>Mass</b> {mass}
            </p>
            <p>
              <b>Height</b> {height}
            </p>
            <p>
              <b>Eye color</b> {eye_color}
            </p>
          </div>
        );
      })}
    </div>
  );
}
