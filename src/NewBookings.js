import React from 'react';

import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { FaUser, FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';

const NewBookings = ({newBookings}) =>{
return(
    <div className='AppMain'>
          <h2>New bookings:</h2>
          { newBookings.map((newBooking,i) =>{
          const date = new Date(newBooking.time);
          
           const duration = newBooking.duration / (60 * 1000)
           return(
             <div key={i} className="AppBooking">
            <Timeline  maxEvents={8} placeholder='true'>
              <TimelineEvent
                color='#87a2c7'
                icon={FaRegCalendarCheck}
                title="user1"
                subtitle={newBooking.time}
                width={newBooking.duration}
                // subtitle={booking.time}
                // subtitle={booking.userId}
              />
               <TimelineEvent
                color='#9c2919'
                icon={FaRegCalendarCheck}
                title='user2'
                subtitle={newBooking.time}
                width={newBooking.duration}
                />
                </Timeline>
        
        </div>
    
        ); //end of  inner return 
        } ) }    
</div>

  );
}
export default NewBookings;