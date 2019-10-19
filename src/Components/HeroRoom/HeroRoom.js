import React from "react";
import './HeroRooms.scss';

const HeroRoom = ({ children, hero , backgroundImg }) => {
  return <header className={hero}>
    <div className="heroContent">
    <img src={backgroundImg} alt="Room Image"/>
    {children}

    </div>
  </header>;
};


export default HeroRoom;