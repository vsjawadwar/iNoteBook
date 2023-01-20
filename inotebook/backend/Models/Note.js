const mongoose=require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
  //for preventing to access others node we will create user which will act like foreign key.
  user:{
    type:mongoose.Schema.Types.ObjectId
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  tag:{
    type: String,
    default:"General" 
  },
  date:{
    type: Date,
    default: Date.now
  },
});

module.exports=mongoose.model('note',notesSchema);