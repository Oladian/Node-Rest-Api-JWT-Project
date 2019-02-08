const eventModel = require('../models/events');

module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  eventModel.findById(req.params.eventId, function(err, eventInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Event found!!!", data:{events: eventInfo}});
   }
  });
 },

getAll: function(req, res, next) {
  let eventList = [];

  eventModel.find({}, function(err, events){
   if (err){
    next(err);
   } else{
    for (let event of events) {
      eventList.push({id: event._id, name: event.name, event_date: event.event_date, place: event.place});
    }
    res.json({status:"success", message: "Events list found!!!", data:{events: eventList}});
       
   }

});
 },

updateById: function(req, res, next) {
  eventModel.findByIdAndUpdate(req.params.eventId,{name:req.body.name}, function(err, eventInfo){

if(err)
    next(err);
   else {
    res.json({status:"success", message: "Event updated successfully!!!", data:null});
   }
  });
 },

deleteById: function(req, res, next) {
  eventModel.findByIdAndRemove(req.params.eventId, function(err, eventInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Event deleted successfully!!!", data:null});
   }
  });
 },

create: function(req, res, next) {
  eventModel.create({ name: req.body.name, event_date: req.body.event_date, place: req.body.place }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Event added successfully!!!", data: null});
      
    });
 },

}