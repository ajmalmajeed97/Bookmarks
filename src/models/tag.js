const mongoose = require('mongoose')

const Tag = mongoose.model('Tag', {
    
     title:{
         type:String,
         required: true
     },
     createdAt: {type:Number, default: new Date().getTime()},
     updatedAt:  {type:Number, default: new Date().getTime()}
     
    
     
         
     
 
})

module.exports = Tag