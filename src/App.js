import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import './App.css'
// import Loading from './Loading';
import Bookings from './Bookings.js';
 import NewBookings from './NewBookings.js';



const apiUrl = 'http://localhost:3001'

export const App = () => {
  const [loading,setLoading]=useState(false);
  const [bookings, setBookings] = useState([]);
  const [newBookings,setNewBookings]=useState([]);

  const fetchthelist = async() =>{
    // setLoading(true);

   try {
     const response = await fetch(`${apiUrl}/bookings`);
     const bookings = await response.json();
     console.log(bookings);
    // setLoading(false);
     setBookings(bookings);
    }
    catch(error){
      setLoading(false);
      console.log(error);
    }
  

  };
  useEffect(() => {
    fetchthelist();
   
  }, [])

function csvJSON(csv){
   
    let result = [];
    let lines=csv.split("\n");
    let headers=lines.shift();
  
    for(let i=0;i<lines.length-1;i++){  
      let csvObj = {};
      let currentline=lines[i].split(",");
        
        csvObj["time"] = Date.parse(currentline[0].trim());
        csvObj["duration"] = parseInt(currentline[1].trim());
        csvObj["userId"] = currentline[2].trim();
        result.push(csvObj);
    }
    return result;
  }

  const onDrop = (files) => {
      console.log(files);
      let reader = new FileReader();
      reader.onload = function(event) {
      let bookingsCsv = event.target.result;
      let newBookings = csvJSON(bookingsCsv);
      newBookings.sort(function(a, b){return a.time - b.time});
      console.log(newBookings);
      setLoading(true);
      setNewBookings(newBookings);
    };
    reader.readAsText(files[0]);
    
  }
  

  if(!loading){
    return (
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
      <div className='App-main'>
          <Bookings bookings={bookings} /> 
      </div>
     
    </div>
  );
}

  return(
    <div>
      <NewBookings newBookings={newBookings}/>
    </div>
  );
  
  
    
      
      
}
        
export default App;
  
  
  


