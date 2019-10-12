import React from 'react'
import HeroRoom from '../HeroRoom/HeroRoom'
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Error = () => {
    return <HeroRoom hero="HeroDefault">
            {/* <Banner maintitle="404" subtitle="Page Not Found">
                <NavLink to="/" className="btn-primary">Return Home</NavLink>
            </Banner> */}
        </HeroRoom>
}

export default Error;
