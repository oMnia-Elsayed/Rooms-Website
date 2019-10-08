import React from 'react';
import './HeroRooms.scss';
export default function HeroRoom({childern, hero}) {
    return (
        <header className={hero}>
            {childern}
        </header>
    )
}
