const mongoose = require('mongoose')

const Bookmark = mongoose.model('Bookmark', {
    
    link:{
         type:String,
         required: true
     },
     title:{
         type:String,
         required: true
     },
     publisher:{
         type:String,
         required: true
     },
     createdAt: {
            
                type:Number, default: new Date().getTime()
         },
    updatedAt: 
            {type:Number, default: new Date().getTime()
         },
    tags:[],
        
     
 
})

module.exports = Bookmark