  let mongoose = require('mongoose');
mongoose.connect("mongodb://krikalyt:Krishna55958@ds215370.mlab.com:15370/krishnadb").then(res=>console.log('has been connected')).catch(res=>console.log('sorry unable to connect'));

const schema  = new mongoose.Schema({
   Name: {type : String, required: true},
   RollNo: {type:String, required:true},
   Address : {
     ContactNo :{type: Number, required:true},
     PermanentAddress: {type:String, required: false},
     TemporaryAddress: { type: String, required: false}
   },
   Semester1:{
      Physics:{
        Internal:{require:true, type: Number},
        External:{ required: true, type :Number},
        total: Number
      }
   }
});

const model = mongoose.model('students', schema);
const student = new model({
  Name: "Krishna Kumar Yadav",
  RollNo: 06,
  Address:{
    ContactNo:9621145321,
    PermanentAddress:"Saryan, Korantadih, Ballia, UP, India, 277501",
    TemporaryAddress: "Saryan, Korantadih, Ballia, UP, India, 277501"
  },
  Semester1:{
    Physics:{
      Internal: 25,
      External:40
    }
  }
})


//async data getting 
async function findone(){
  const studentsgot = await model.findOne({RollNo:06});
  somedatalikemob = studentsgot.Address.ContactNo;
  console.log(somedatalikemob);
}

findone();