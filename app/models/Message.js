import mongoose from "mongoose";


const MessageSchema = mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email : {
        type: String
    },
    budget :{
        type: String
    },
    discription :{
        type: String
    },
    date: {
        type: Date,
        default: Date.now, 
      },
    

})

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema)

export default Message ;