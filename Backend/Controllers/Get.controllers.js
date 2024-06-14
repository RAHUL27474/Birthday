import { User } from "../Models/user.models.js";

const getData =async(req,res)=>{
    const { userName, inputDate, inputMonth, pass } = req.body;
    console.log('Received data:', { userName, inputDate, inputMonth });

    const user = await User.create({
        userName,
        inputDate,
        inputMonth,
        pass
    })
        user._id = pass;
    if(!pass){
        const id = userName + inputDate.toString() + inputMonth.toString()
        user._id = id;
    }

    

    const createdUser = await User.findById(user._id).select(
        " -_id "
    )
    // Process the data as needed
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("userName",userName,options)
    .cookie("inputDate",inputDate,options)
    .cookie("inputMonth",inputMonth,options)
    .json({ message: 'Data received successfully',createdUser });
}

export {
    getData
}