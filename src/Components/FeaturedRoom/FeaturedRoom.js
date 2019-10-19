import React, { Component } from 'react'
import { RoomContext } from '../../Context';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';
import Title from '../Title/Title';
import './FeaturedRoom.scss';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {featuredRooms, loading} = this.context.state;
        featuredRooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : featuredRooms}
                </div>
            </section>
        )
    }
}
