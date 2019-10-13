import React from "react";
import './HeroRooms.scss';

const HeroRoom = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};


export default HeroRoom;