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
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length-1;i++){  
        var obj = {};
        var currentline=lines[i].split(",");
        
        obj[headers[0]] = Date.parse(currentline[0].trim());
        obj[headers[1]] = parseInt(currentline[1].trim());
        obj[headers[2]] = currentline[2].trim();
        result.push(obj);
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
  
  
  


