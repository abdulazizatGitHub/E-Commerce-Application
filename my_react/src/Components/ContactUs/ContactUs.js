import '../../Assets/CSS/ContactUs.css';
import contact from '../../Assets/Images/contactus.png';
import Footer from '../ProductPage/Footer';
function ContactUs()
{
    return(
        <div className='contact-page'>
            <div className='contact-container'>
            <span className='left-div'>
                <img className='contact-logo' src={contact} alt='' />
                <div className='contact-info'>
                <h6>HOW CAN WE HELP?</h6>
                <p>When ever you need us we are here for you just select a topic to get in touch with us.</p>
                <h6>We'd love to hear from you</h6>
                </div>
            </span>
            <form className="contact-form">
               <div className='contact-form_div'>
               <span className='contact-form_selection'>
                <label>Reason of contact</label>
                <select>
                    <option>Please Select</option>
                    <option>Complain</option>
                    <option>Suggestion</option>
                    <option>Feedback</option>
                    <option>Enquiry</option>
                    <option>Delay Order</option>
                    <option>Other</option>
                </select>
                </span>
                <span className='contact-form_name'>
                    <label>Full Name</label>
                    <div className='contact-name_div'>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name" />
                    </div>
                </span>
                <span className='contact-form_phone'>
                    <label>Phone No</label>
                    <div><input type="text" placeholder="0300-000" /></div>
                </span>
                <span className='contact-form_email'>
                    <label>E-mail</label>
                    <div><input type="email" placeholder="watchgallery@gmail.com" /></div>
                </span>
                <span className='contact-form_comment'>
                    <label>Comment</label>
                   <div> <textarea rows={5} cols={50} /></div>
                </span>
               </div>
               <span className='contact-btn_container'><button className='contact-btn' type='submit'>SUBMITT</button></span>
            </form>
        </div>
        <Footer />
        </div>
    )
}
export default ContactUs;