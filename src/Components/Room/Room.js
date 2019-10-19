import React from 'react'
import defaultImg from '../../images/room-1.jpeg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Room.scss';

const Room = ({room}) => {
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg } alt="SingleRoom" />
                <div className="price-top">
                    <h6> ${price} </h6>
                    <p> per night </p>
                </div>
                <NavLink to={`/rooms/${slug}`} className="btn-primary room-link">Features</NavLink>
            </div>
            <p className="room-info"> {name} </p>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}
export default Room;
