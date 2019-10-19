import React, { Component } from 'react'
import Title from '../Title/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import './Services.scss';
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis! '
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis! '
            },
            {
                icon: <FaShuttleVan />,
                title: "Free ShuttleVan",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis! '
            }, {
                icon: <FaBeer />,
                title: "Stronggest Beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corporis! '
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
