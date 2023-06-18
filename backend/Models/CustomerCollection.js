import mongoose from "mongoose";

const customerStructure = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String, 
    pass: String,
    confirmPass: String
});

const customerSignupModel = mongoose.model("Customer", customerStructure);

export default customerSignupModel;