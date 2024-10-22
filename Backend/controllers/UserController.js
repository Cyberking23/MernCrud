import UserModels from "../models/User.js";

export const CreateUser = async (req, res) => {
    try{
        const{name,lastname,email,phone}=req.body
    const NewUser= new UserModels({
        name,lastname,email,phone
    })
    await NewUser.save();
    res.status(200).json({success:true,Message:'User Created Successfully',NewUser})
    } catch(e){
        console.log(e)
    res.status(500).json({success:false,Message:'Internal server Error',NewUser})

    }
};

//Read Api

export const GetUser = async(req,res)=>{
    try{
        const user = await UserModels.find()
        if(!user){
            return res.status(404).json({success:false,message:'User not found'})
        }
        res.status(200).json({success:true,user})
    } catch(e){
        console.log(e)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

//Uptedate user

export const UpdateUser= async(req,res)=>{
    try{
        const UserId=req.params.id
        const UpdateUser = await UserModels.findByIdAndUpdate(UserId,req.body,{new:true})
        if(!UpdateUser){
            return res.status(404).json({success:false,message:'User not found'})
        }
        res.status(200).json({success:true,message:"User updated successfully",UpdateUser})

    }catch(e){
        console.log(e)
    }
}

// Obtener usuario por ID
// Obtener usuario por ID
export const GetUserById = async (req, res) => {
    try {
        const user = await UserModels.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


//Delte
export const DeleteUser = async(req,res)=>{
    try{
        const UserId = req.params.id;
        const DeletedUser = await UserModels.findOneAndDelete(UserId);
        if(!DeletedUser){ // Cambia a DeletedUser
            return res.status(404).json({success:false,message:"User not found"});
        }
        res.status(200).json({success:true,message:'User deleted successfully'});
    }catch(e){
        console.log(e);
        return res.status(500).json({success:false,message:"Internal Server Error"});
    }
}


