import customerSignupModel from '../Models/CustomerCollection.js';

export const addCustomer = async (req, res) =>
{

    try {
        const firstName = req.body.firstName;
        const firstNameInStringFormat = firstName.toString();    

        const lastName = req.body.lastName;
        const lastNameInStringFormat = lastName.toString(); 

        const email = req.body.email;
        const emailInStringFormat = email.toString();
    
        const pass = req.body.pass;
        const passInStringFormat = pass.toString(); 

        const confirmPass = req.body.confirmPass;
        const confirmPassInStringFormat = confirmPass.toString(); 

        const newCustomer = new customerSignupModel({
            firstName: firstNameInStringFormat,
            lastName: lastNameInStringFormat,
            email: emailInStringFormat,
            pass: passInStringFormat,
            confirmPass: confirmPassInStringFormat
        });
        
        await newCustomer.save();
        res.json({response: true});

    } catch (error) {
        console.log("Not saved...", error);
        res.json({response: false});
    }
}

// export const addGoogleCustomer = async (req, res) =>
// {
//     const result = req.body;
//     console.log(result);
//     // const email = req.body.email;
//     // const password = req.body.pass;

//     // const newCustomer = new customerSignupModel({
//     //     email: email,
//     //     pass: password
//     // });

//     // try {
//     //     await newCustomer.save();
//     //     res.json(newCustomer);
//     // } catch (error) {
//     //     console.log("Not saved...", error);
//     // }
// }

export const getCustomer = async (req, res) =>
{
    const {email, password } = req.body;   
    try {
        const customerLogin = await customerSignupModel.findOne({ email });
        
        const token = await customerLogin.generateAuthToken(customerLogin._id);

        if( customerLogin.pass === password )
        {
            const isAdmin = customerLogin.email === "admin@gmail.com";

            res.json({success: true, customerLogin, token, isAdmin});
        }
        else{
            res.json({success: false})
        }
    } catch (error) {
        console.log("Not found any data...");
        res.json({success: false});
    }
}



















// const createToken = async () =>
// {
//     const token = await jwt.sign({_id:"648f3fa74a1d5b761f9d8f37"}, "mynameisabdulazizandiamastudent");

//     const userVarification = await jwt.verify(token, "mynameisabdulazizandiamastudent");
// }
// createToken();