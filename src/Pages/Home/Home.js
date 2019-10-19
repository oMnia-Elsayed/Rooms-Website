import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import HeroRoom from '../../Components/HeroRoom/HeroRoom';
import Services from '../../Components/Services/Services';
import FeaturedRoom from '../../Components/FeaturedRoom/FeaturedRoom';
import homeBckImg from '../../images/defaultBcg.jpeg';
const Home = () => {
    return (
        <>
        <HeroRoom hero="HeroDefault" backgroundImg={homeBckImg}>
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

