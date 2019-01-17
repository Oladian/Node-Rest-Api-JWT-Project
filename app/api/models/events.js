const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const EventSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 event_date: {
  type: Date,
  trim: true,
  required: true
 },
 place: {
     type: String,
     required: true
 }
},{versionKey:false});

module.exports = mongoose.model('Event', EventSchema)