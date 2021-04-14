import React from 'react';

import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { FaUser, FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';

const NewBookings = ({newBookings}) =>{
return(
    <div className='AppMain'>
          <h2>New bookings:</h2>
          <Timeline varinat="simple" minEvents={3} placeholder>
          { newBookings.map((newBooking,i) =>{
          const date = new Date(newBooking.time)
          const duration = newBooking.duration / (60 * 1000)
          
            return <TimelineEvent
              key={i}
                color='#87a2c7'
                icon={FaRegCalendarCheck}
                title={newBooking.userId}
                subtitle={date.toString()}
              />
             
          })}
          </Timeline>       
  </div>
  );
}
export default NewBookings;