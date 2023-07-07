import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
const customerStructure = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String, 
    pass: String,
    confirmPass: String,
    tokens:[{
        token: String
    }]
});

//generating tokens
customerStructure.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    } catch (error) {
        console.log("Error: " + error);
    }
}



const customerSignupModel = mongoose.model("Customer", customerStructure);

export default customerSignupModel;