import React from 'react'
import RoomsFilter from '../RoomsFilter/RoomsFilter';
import RoomsList from '../RoomsList/RoomsList';
import { withRoomComsumer } from '../../Context';
import Loading from '../Loading/Loading';

function RoomsContainer({context}){

    const { loading , sortedRooms , rooms } = context.state;
    if(loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms = {rooms} />
            <RoomsList rooms = {sortedRooms} />
        </>
    )
}

export default withRoomComsumer(RoomsContainer);


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer >
//             {value => {
//                 const { loading , sortedRooms , rooms } = value;
//                 if(loading) {
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         RoomsContainer
//                         <RoomsFilter rooms = {rooms} />
//                         <RoomsList rooms = {rooms} />
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
//     )
// }
