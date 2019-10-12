import React from 'react';
import './HeroRooms.scss';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

export default function HeroRoom({childern, hero}) {
    return <header className={hero}> {childern} 
            { console.log(childern)}
            <Banner maintitle="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <NavLink to="/rooms" className="btn-primary">Our Rooms</NavLink>
            </Banner> 
    </header>
}
