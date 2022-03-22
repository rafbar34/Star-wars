import React, { useState, useEffect } from "react";
import axios from "axios";
import { FilmCard } from "../FilmCard/FilmCard";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
// import { useRecoilState } from "recoil";
// import { infoAtomState } from "../../atoms/InfoUserAtom";
export function StarWarsInfo() {
 
  const [filmsLoading, setFilmsLoading] = useState(false);
  const [films, setFilms] = useState([]);

  // const [user, setUser] = useRecoilState(infoAtomState);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
    
  //   });
  // }, [setUser]);
//wystepuję błąd z powodu biblioteki recoil. Używając useState działa.
    //TypeError: Cannot assign to read only property 'currentUser' of object '#<AuthImpl>'
  // po błędnym logowaniu nie wraca z powrotem do strony login
  
  const [user, setUser] = useState();
    
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  
  })
  
  const urlFilms = "https://swapi.dev/api/films/";

  const logout = async () => {
    await signOut(auth);
    
  };

  useEffect(() => {
    const getDataFilms = async () => {
      const response = await axios.get(urlFilms);
      setFilms(response.data.results);
      return response;
    };
    setFilmsLoading(true);
    getDataFilms();
    setFilmsLoading(false);
  }, [urlFilms]);

  return (
    
    <div className="layout h-full  bg-gray-600 flex flex-col justify-start  items-center  bg-contain bg-[url('https://i.pinimg.com/564x/99/2b/6a/992b6a27c718d09791fd28c1607cab40.jpg')]">
<<<<<<< HEAD
      <div className="   flex  ">
=======
      <div className="   flex ">
>>>>>>> aafc34692d9e559baa2d6d517f6e35bce8698564
        <button
          onClick={logout}
          className="logoutBtn bg-gray-300 h-10 w-24 m-2 rounded-lg"
        >
          Log Out
        </button>
        <h3 className="text-white">Hello! {user?.email}</h3>
      </div>
      <div className="  w-5/6  flex flex-col  justify-center  items-center   ">
        {!filmsLoading ? (
          films.map(({ title, characters, planets, starships, episode_id }) => (
            <FilmCard
              key={episode_id}
              episodeId={episode_id}
              title={title}
              planets={planets}
              starships={starships}
              characters={characters}
            />
          ))
        ) : (
          <p className="h-1/2">Loading...</p>
        )}
      </div>
    </div>
  );
}
