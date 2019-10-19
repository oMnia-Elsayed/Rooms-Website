import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../../Context';
import Title from '../../Components/Title/Title';
import './RoomsFilter.scss';

// get all unique values
const getUniqueValues = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    
    const  {handleChange} = context;
    const { type, capacity, price, minPrice, maxPrice, minSize,
    maxSize, breakfast, pets } = context.state;

    let types = getUniqueValues(rooms,'type'); // for unique types
    // let types = [...new Set(rooms.map(item => item['type']))]

    types = ['All' , ...types]; // add 'All' to the types Array

    types = types.map((item , index) => {
        return <option value={item} key={index}>{ item }</option>
    });

    let people = getUniqueValues(rooms,'capacity'); // for guests number
    people = people.map((item,index) => {
        return <option value={item} key={index}> {item} </option>
    })
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* select Type */}
                <div className="form-group">
                    <label htmlFor="type"> Room Type </label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>

                {/* guests number */}
                <div className="form-group">
                    <label htmlFor="capacity"> Guests Number </label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>

                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="capacity"> Room Price ${price} </label>
                    <input type="range"  className="form-control" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange}  />
                </div>

                {/* Room Size */}
                <div className="form-group">
                    <label htmlFor="size"> Room Size </label>
                    <div className="size-inputs">
                        <input type="number"  className="size-input" id="size" name="minSize" value={minSize} onChange={handleChange}  />
                        <input type="number"  className="size-input" id="size" name="maxSize" value={maxSize} onChange={handleChange}  />
                    </div>
                </div>

                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
