import '../../Assets/CSS/Login.css';
import { useState } from 'react';
import { changePassword, sendOTP } from '../../Services/API';
import { useLocation } from 'react-router-dom';

function ForgotPassword() {
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('email');
    
    const [otpEmail, setOtpEmail] = useState('');
    const [showResetForm, setShowResetForm] = useState(false);
    const [ backendOTP, setBackendOTP ] = useState('')
    const [ resetFormData, setResetFormData ] = useState({
        otp: 0,
        password: '',
        cpassword: ''
    })
    const { otp, password, cpassword } = resetFormData;

    const handleInputChange = (e) => {
        setResetFormData({...resetFormData, [e.target.name]: e.target.value});
    }
    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        
        try {
            const enteredOTP = parseInt(otp, 10); // Convert otp to a number
            if(enteredOTP === backendOTP) {
                await changePassword(email, resetFormData);
            } else {
                alert("Incorrect otp");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOtpEmail = (e) => {
        setOtpEmail(e.target.value);
    }

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setShowResetForm(true);
        console.log(otpEmail);
        try {
            const result = await sendOTP(email,otpEmail);
            setBackendOTP(result.data);
        } catch (error) {
            console.log(error);
        }
        setOtpEmail('');
    }

    return (
        <div className='background'>
            {!showResetForm ? (
                <form className="forgot_form_container">
                    <div className="title_container">
                        <p className="title">Forgot Your Password</p>
                        <span className="subtitle">Enter an email to receive OTP and reset your password.</span>
                    </div>
                    <div className="input_container">
                        <label className="input_label" htmlFor="email_field">Email</label>
                        <input onChange={handleOtpEmail} placeholder="name@mail.com" title="Input title" name="email" type="text" className="input_field" id="email_field" />
                    </div>
                    <button onClick={handleSendOTP} title="Send OTP" type="submit" className="sign-in_btn">
                        <span>Send OTP</span>
                    </button>
                </form>
            ) : (
                <form className="reset_form_container">
                    <div className="title_container">
                        <p className="title">Forgot Your Password</p>
                        <p>{backendOTP}</p>
                    </div>
                    <div className="input_container">
                        <label className="input_label" htmlFor="otp_field">OTP</label>
                        <input onChange={handleInputChange} autoFocus placeholder="Enter OTP" title="Input title" name="otp" type="text" className="reset_input_field" id="otp_field" />
                    </div>
                    <div className="input_container">
                        <label className="input_label" htmlFor="new_password_field">New Password</label>
                        <input onChange={handleInputChange} placeholder="Enter new password" title="Input title" name="password" type="password" className="reset_input_field" id="new_password_field" />
                    </div>
                    <div className="input_container">
                        <label className="input_label" htmlFor="new_password_field">Confirm New Password</label>
                        <input onChange={handleInputChange} placeholder="Enter new password" title="Input title" name="cpassword" type="password" className="reset_input_field" id="new_password_field" />
                    </div>
                    <button onClick={handleUpdatePassword} title="Reset Password" type="submit" className="reset_password_btn">
                        <span>Change Password</span>
                    </button>
                </form>
            )}
        </div>
    );
}

export default ForgotPassword;
