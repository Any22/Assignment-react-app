import React from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { FaUser, FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';
// import Booking from './Booking';

const Bookings = ({bookings}) =>{
     return(
        <div className='AppMain'>
          <h2>Existing bookings:</h2>
          
           
             <Timeline  minEvents={5} placeholder>
               { bookings.map((booking,i) =>{
                 const date = new Date(booking.time);
                 const duration = booking.duration / (60 * 1000)
          
              return <TimelineEvent
              key={i}
                color='#87a2c7'
                icon={FaRegCalendarCheck}
                title={booking.userId}
                subtitle={booking.time}
              />
               })}
           </Timeline>
      
         
          
      
</div>

  );

}
export default Bookings;