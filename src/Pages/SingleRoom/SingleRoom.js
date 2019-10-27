import React, { Component } from 'react'
import { RoomContext } from '../../Context';
import HeroRoom from '../../Components/HeroRoom/HeroRoom';
import { NavLink } from 'react-router-dom';
import defaultImg from '../../images/room-1.jpeg';
import Banner from '../../Components/Banner/Banner';
import './SingleRoom.scss';

export default class SingleRoom extends Component {
    static contextType = RoomContext;
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    render() {
        const { getRoomBySlug } = this.context;
        const room = getRoomBySlug(this.state.slug);
        // that is if the user write incorrect room slug  
        if (!room) {
            return (
                <div className="error">
                <h3> no such room could be found...</h3>
                <NavLink to="/rooms" className="btn-primary">
                  back to rooms
                </NavLink>
              </div>
            ); 
        }      

        const { name, images, description, capacity, size, price, extras, breakfast, pets } = room; 
        // const { mainImg , ...restImages } = images; // mainImg = images[0]
        
        return (
            <>
                <HeroRoom hero="HeroSingle" backgroundImg={ images[0] || defaultImg}>
                    <Banner title={`${name} Room`}>
                        <NavLink to="/rooms" className="btn-primary"> Back To Rooms</NavLink>
                    </Banner>   
                </HeroRoom>
                <section className="single-room">
                    <div className="single-room-images">
                        { images.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{ description }</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${ price }</h6>
                            <h6>Size: { size } SQFT</h6>
                            <h6>Max Capacity: { capacity > 1 ? `${capacity} People` : `${capacity} Person`}</h6>
                            <h6>{ pets ? "Pets Allowed" : "No Pets Allowed" }</h6>
                            <h6>{ breakfast && "Free breakfast included" } </h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        { extras.map( (item, index) => 
                             <li key={index}> - { item } </li>
                        )}
                    </ul>
                </section>
            </>
        )
    }
}
