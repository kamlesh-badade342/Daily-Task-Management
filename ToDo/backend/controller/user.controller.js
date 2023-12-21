const UserServices = require("../services/user.services");
const jwt = require("jsonwebtoken");
// cosnt UserService 
exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        console.log(email)
        const successRes = await UserServices.registerUser(email,password);
        res.json({status:true,success:"User Registed Successsfully"})
    }
    catch(error){
        throw error;
    }
}

exports.login = async(req,res,next)=>{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }

        let user = await UserServices.checkUser(email);

        if (!user) {
            throw new Error('User does not exist');
        }
        // console.log(email)
        // console.log(password)
        const isPasswordCorrect = await user.comparePassword(password);
          console.log(isPasswordCorrect)
        if (!isPasswordCorrect) {
            throw new Error(`Username or Password does not match`);
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: user._id, email: user.email };
        
        const token = await UserServices.generateAccessToken(tokenData,"secret","1h")
        res.status(200).json({ status: true, success: "sendData", token: token });
    } 
    catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}


