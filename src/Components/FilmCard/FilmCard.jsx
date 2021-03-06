import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Character } from "../Character/Character";
import { Starships } from "../Starships/Starships";
import { Planets } from "../Planets/Planets";

const swiperProps={
  navigation: true,
  modules: [Navigation],
  className: "mySwiper w-3/4 h-2/3 m-1 text-center flex"
};

export function FilmCard({ title, characters, planets, starships,episodeId }) {

  return (
    <div className="layout-cards h-auto w-5/6 flex flex-col justify-items-start items-start  m-10 p-1 text-white bg-opacity-25   bg-clip-padding  rounded-lg">
      <h2 className="movie self-center m-1 p-2 text-xl">Film title : {title}</h2>

      <Swiper
        {...swiperProps}
      >
        {characters.map((character) => <SwiperSlide key={character+episodeId}>
            <Character apiLinkCharacter={character} />
          </SwiperSlide>
        
        
        )}
      </Swiper>

      <Swiper
         {...swiperProps}
      >
        {starships.map((starships) => (
          <SwiperSlide key={starships+episodeId}>
            <Starships apiLinkShips={starships} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        {...swiperProps}
      >
        {planets.map((planets) => (
          <SwiperSlide key={planets+episodeId}>
            <Planets apiLinkPlanets={planets} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
