const mongoose=require("mongoose")
const config=require("config")
const connect=()=>{
    mongoose.connect(config.get("MONGO_URI"))
    .then(()=>console.log('mongodb connected'))
    .catch((err)=> console.log(err))

}
module.exports=connect