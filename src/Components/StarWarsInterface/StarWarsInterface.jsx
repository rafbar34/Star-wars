import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {FilmCard} from "../FilmCard/FilmCard";
import {auth} from '../../firebase'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import { useUserAuth } from "../../UserAuthContext/UserAuthContext";
export function StarWarsInfo() {
  
  const [filmsLoading,setFilmsLoading]=useState(false)
  const [films, setFilms] = useState([]);
  
  const [user,setUser] = useState({});
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)

  })

  const {users} =useUserAuth();
  console.log(users);
  const urlFilms = "https://swapi.dev/api/films/";

  const logout = async () =>{
    await signOut(auth)
}

  useEffect(() => {
    
    const getDataFilms = async () => {
      const response = await axios.get(urlFilms);
      setFilms(response.data.results);
      return response;
    };
    setFilmsLoading(true)
    getDataFilms();
    setFilmsLoading(false)
  }, [urlFilms]);
 
  return (
    <div className="h-3/4 bg-gray-600 flex flex-col justify-start  items-center  bg-contain bg-[url('https://i.pinimg.com/564x/99/2b/6a/992b6a27c718d09791fd28c1607cab40.jpg')]">
     
     
       <div className="w-full flex"><button onClick={logout} className="bg-gray-300 h-10 w-24 m-2 rounded-lg" >Log Out</button>
        <h3 className="text-white">Hello! {user?.email}</h3></div>
      <div className="  w-5/6  flex flex-col  justify-center  items-center   ">
        {!filmsLoading ? films.map(({title,characters,planets,vehicles,episode_id}) => 
            <FilmCard key={episode_id} title={title} planets={planets} vehicles={vehicles} characters={characters}/>
        ) : <p>Loading...</p>}

      
      </div>
     
    </div>
  );
}