import React from 'react'
import HeroRoom from '../HeroRoom/HeroRoom'
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Rooms = () => {
    return <HeroRoom hero="HeroRooms">
        <Banner title="Our Rooms" subtitle="">
                <NavLink to="/" className="btn-primary">Return Home</NavLink>
            </Banner>
        </HeroRoom>
}

export default Rooms;
