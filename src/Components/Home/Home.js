import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroRoom from '../HeroRoom/HeroRoom';
import Banner from '../Banner/Banner';

export default function Home() {
    return (
        <>
        <HeroRoom hero="HeroDefault">
        </HeroRoom>
            <Banner maintitle="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <NavLink to="/rooms" className="btn-primary">Our Rooms</NavLink>
            </Banner>
            </>
    );
}

