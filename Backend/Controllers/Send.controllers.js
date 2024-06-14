import { ApiError } from "../Utils/ApiError.js";
import { User } from "../Models/user.models.js";

const login = async(req,res)=>{
    try {
        const {userName, pass} = req.body;
        if(!userName && !pass){
            // throw new ApiError(400, "Username or passkey is required");
            return res.status(400).json({message:'unsuccessful'})
        }
        const user = await User.findOne({
            $and: [{ userName }, { pass }],
         })
         if(!user){
            return res.status(400).json({message:'unsuccessful'})
            // throw new ApiError(404, "user does not exist");
        }
        const inputDate = user.inputDate
        const inputMonth = user.inputMonth
        // Process the data as needed
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        }
        const data ={
            userName,
            inputDate,
            inputMonth,
        }

        return res
        .status(200)
        .cookie("userName",userName,options)
        .cookie("inputDate",inputDate,options)
        .cookie("inputMonth",inputMonth,options)
        .json({ 
            message: 'Successfull',
            data: data,

        });
    } catch (error) {
        
    }
}

const sendData = async (req, res) => {
    try {
       
        

      // Access cookies from the request object
      const userName = req.cookies.userName;
      console.log(userName)
      const inputDate = req.cookies.inputDate;
      console.log(inputDate)
      const incomingInputMonth = parseInt(req.cookies.inputMonth);
      console.log(incomingInputMonth)
      let monthName;
      switch(incomingInputMonth) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
    }
      const inputMonth = monthName;
      const data = {
        userName,
        inputDate,
        inputMonth,
      };
  
      // Send the data as a JSON response
      console.log(data);
      return res
      .status(200)
      .json({data : data});
    } catch (error) {
      console.error('Error in sendData:', error);
      // Send an error response if something goes wrong
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export { 
    login,
    sendData

   };
  