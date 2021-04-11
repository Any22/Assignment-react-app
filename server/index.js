const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const fs = require('fs')
const app = express()
app.use(cors()) // so that app can access


const bookings = JSON.parse(fs.readFileSync('./server/bookings.json')).map(
  (bookingRecord) => ({
    time: Date.parse(bookingRecord.time),
    duration: bookingRecord.duration * 60 * 1000, // mins into ms
    userId: bookingRecord.user_id,
  }),
)

app.get('/bookings', (_, res) => {
  res.json(bookings)
})


// app.post('/saveData',  (req,_) =>{
//     // console.log("Using Body-parser: ", req.body.time);
//     req.stringify(req.body.time);
//     req.stringify(req.body.duration);
//     req.stringify(req.body.userId);
//     console.log(req.body.time);
//   })
app.listen(3001);
console.log("The server is listening on Port :3001");