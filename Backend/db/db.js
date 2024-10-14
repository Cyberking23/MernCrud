import mongoose from "mongoose"

const DbConnection = async() =>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('Mongo is connected')
    }catch(e){
        console.log(e)
    }
}

export default DbConnection