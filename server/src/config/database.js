import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB ${conn.connection.host}')
  } catch (error) {

  }
}


//const ex-user = await userModel.findOne({email})
//if(ex-user){
//  return res.status(200).send({message: Already registered please login},
//    success: true,)
//}
//register user
// const hashedPassword = await hashedPassword(password)
// const user = new userModel({username, password:hashedPassword, email, }).save()

// resizeBy.status(201)