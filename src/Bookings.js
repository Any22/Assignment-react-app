import React from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { FaUser, FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';
// import Booking from './Booking';

const Bookings = ({bookings}) =>{
     return(
        <div className='AppMain'>
          <h2>Existing bookings:</h2>
          
          { bookings.map((booking,i) =>{
          const date = new Date(booking.time);
          // const date= date.getDate();
           const duration = booking.duration / (60 * 1000)
           return(
             <div key={i} className="AppBooking">
            <Timeline  maxEvents={1} placeholder='true'>
              <TimelineEvent
                color='#87a2c7'
                icon={FaRegCalendarCheck}
                title="user1"
                subtitle={booking.time}
                width={booking.duration}
                // subtitle={booking.time}
                // subtitle={booking.userId}
              />
               <TimelineEvent
                color='#9c2919'
                
                icon={FaRegCalendarCheck}
                title='user1'
                subtitle={booking.duration}
              />
              
        {/* <TimelineEvent
          color='#9c2919'
         
          icon={FaUser}
          title='time3'
          subtitle={booking.time}
        />  */}
        </Timeline>
        
        </div>
        ); //end of  inner return 
        } ) }    
</div>

  );

}
export default Bookings;