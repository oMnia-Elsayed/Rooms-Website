import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Hero from '../HeroRoom/HeroRoom';

export default function Home() {
    return (
        <Hero hero="HeroDefault">
            <Banner maintitle="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <NavLink to="/rooms" className="btn-primary">Our Rooms</NavLink>
            </Banner>
            <div>xsh</div>
        </Hero>
    )
}

