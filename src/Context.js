import React, { Component } from 'react'

const MyContext = React.createContext();

export default class RoomProvider extends Component {
    state = {};
    render() {
        return (
        <MyContext.Provider value="hello">
            {this.props.children}
        </MyContext.Provider>
        );
    }
}

const RoomConsumer = MyContext.Consumer;

export { RoomProvider , RoomConsumer , MyContext };
