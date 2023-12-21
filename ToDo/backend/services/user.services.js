
// const UserModel = require('../mode/user')
const jwt = require("jsonwebtoken");
const UserModel = require('../model/user.model')
class UserService{
    static async registerUser(email,password){
        try{
            // console.log(email)
            const createUser = new UserModel({email,password});
            return await createUser.save();
        }
        catch(err){
            throw err;
        }
    }

    static async checkUser(email){
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}

module.exports = UserService;