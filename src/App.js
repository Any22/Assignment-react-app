import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';
import Bookings from './Bookings.js';


const apiUrl='http://localhost:3001';
 
function App() {
const [loading,setLoading]=useState(false); 
const [bookings,setBookings]=useState([]);
const fetchthelist = async () =>{
  
try {
    const response = await fetch(`${apiUrl}/bookings`);
    const bookings = await response.json();
    
    setBookings(bookings);
    console.log(bookings);
    
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
  fetchthelist();
  }, []);

  
  //loading file
  const onDrop = (files) => {
    console.log(files);
    setLoading(true);
    
  }
  

  if (!loading)
    return(
          <div className='App'>
          <div className='App-header'>
            <Dropzone accept='.csv' onDrop={onDrop}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drop some files here, or click to select files</p>
                </div>
              </section>
            )}
            </Dropzone>
          </div>
        </div>
      );
    
    return(
    <div className='App-main'>
      <Bookings bookings={bookings} />  
    </div>
  );    
   
    
} 
  

export default App;

    
  
  
  

// return(
//   <div className='App-main'>
//         <p>Existing bookings:</p>
//         {bookings.map((booking, i) => {
//           const date = new Date(booking.time)
//           const duration = booking.duration / (60 * 1000)
//           return (
//             <p key={i} className='App-booking'>
                
//               <span className='App-booking-time'>{date.toString()}</span>
               
//               <span className='App-booking-duration'>
//                 {duration.toFixed(1)}
//               </span>
                
//               <span className='App-booking-user'>{booking.userId}</span>
//             </p>
//           )
//         })}
//       </div>
// );

