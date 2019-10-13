import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HeroRoom from '../HeroRoom/HeroRoom';
import Services from '../Services/Services';
import FeaturedRoom from '../FeaturedRoom/FeaturedRoom';
const Home = () => {
    return (
        <>
        <HeroRoom hero="HeroDefault">
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <NavLink to="/rooms" className="btn-primary">Our Rooms</NavLink>
            </Banner>
        </HeroRoom>
        <Services />
        <FeaturedRoom />
        </>
    )
}

export default Home;

