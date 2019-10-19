import React from 'react'
import HeroRoom from '../../Components/HeroRoom/HeroRoom'
import { NavLink } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';

const Error = () => {
    return <HeroRoom hero="HeroDefault">
            <Banner title="404" subtitle="Page Not Found">
                <NavLink to="/" className="btn-primary">Return Home</NavLink>
            </Banner>
        </HeroRoom>
}

export default Error;
