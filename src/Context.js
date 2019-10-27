import React, { Component } from 'react'
import items from './data';
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        featuredRooms: [],
        sortedRooms: [],
        loading: true,
        type: 'All',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    
    componentDidMount() {
        let rooms = this.formatData(items); // to format data in our own format
        let featuredRooms = rooms.filter(room => room.featured === true );
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    // the hole items in a specific format but we need it in our own format
    formatData(items) {
        let tempItems = items.map( item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        }) ;
        return tempItems;
    }

    // get Room by slug that is passed to URL
    getRoomBySlug = slug => {
        let allRooms = [...this.state.rooms];
        const room = allRooms.find(r => r.slug === slug);
        return room;
    }

    handleChange = event => {
        // const type = event.target.type;
        const name = event.target.name;
        const value = event.target.type ==="checkbox" ? event.target.checked : event.target.value;
        this.setState({
            [name]: value,
        },
        this.filterRooms
        )
    }

    filterRooms = () => {
        let { rooms,type, capacity, price, minSize,
            maxSize, breakfast, pets} = this.state; 

        let tempRooms = [...rooms];

        //transform value from string to number
        capacity = parseInt(capacity);
        price = parseInt(price);

        //filter by type
        if( type !== 'All'){
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        //filter by capacity
        if( capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

        //filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        //filter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        //filter by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }


        //change State
        this.setState({
            sortedRooms: tempRooms,
        })
    }
    render() {
        return (
        <RoomContext.Provider value={{
            state: {...this.state},
            getRoomBySlug: this.getRoomBySlug,
            handleChange: this.handleChange,
            filterRooms: this.filterRooms,
        }
            }>
            {this.props.children}
        </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

// higher order component
export function withRoomComsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            { value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider , RoomConsumer , RoomContext };
