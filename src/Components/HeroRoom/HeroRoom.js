import React from "react";
import './HeroRooms.scss';

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};


export default Hero;