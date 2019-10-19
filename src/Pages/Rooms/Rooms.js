import React from 'react'
import HeroRoom from '../../Components/HeroRoom/HeroRoom'
import { NavLink } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import RoomsBckImg from '../../images/room-2.jpeg';
import RoomsContainer from '../../Components/RoomsContainer/RoomsContainer';
const Rooms = () => {
    return (
        <>
            <HeroRoom hero="HeroRooms" backgroundImg={RoomsBckImg}>
                <Banner title="Our Rooms" subtitle="">
                    <NavLink to="/" className="btn-primary">Return Home</NavLink>
                </Banner>
            </HeroRoom>
            <RoomsContainer />
        </>
    )
}

export default Rooms;
