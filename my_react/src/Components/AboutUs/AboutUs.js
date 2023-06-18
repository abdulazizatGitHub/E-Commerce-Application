import '../../Assets/CSS/AboutUs.css';
import logo from '../../Assets/Images/myLogo.png';
import brand from '../../Assets/Images/brand-img.png';
import vision from '../../Assets/Images/vision.jpg';
import myimage from '../../Assets/Images/myimg.png';
import Footer from '../ProductPage/Footer';
function AboutUs()
{
    return(
       <div>
             <div className="about-page">
            <div className="brand-detail">
                <span className='brand-img'>
                    <img src={logo} alt=''/>
                </span>
                <span className='brand-text'>
                    <h4>Welcome to WATCHGALLERY</h4>
                    <p>At WATCHGALLERY, we are passionate about bringing you the finest watches that combine style, craftsmanship, and functionality. Our mission is to provide watch enthusiasts with a curated collection of premium watches that cater to their individual tastes and preferences.</p>
                </span>
            </div>
            <div className="brand-story">
                <span className='story-detail'>
                    <h4>Our Story</h4>
                    <p>The story of WATCHGALLERY began with our founder, ABDUL AZIZ, who has always had a deep appreciation for the collection and precision of antique and beautiful watches. Inspired by his personal journey as a watch collector, he envisioned creating a platform where people could discover and acquire exceptional watches from renowned brands around the world.</p>
                </span>
                <span className='story-img'>
                    <img src= {brand} alt=''/>
                </span>
            </div>
            <div className='brand-vision'>
                <span className='vision-img'>
                    <img src= {vision} alt='' />
                </span>
                <span className='vision-detail'>
                    <h4>Our Vision</h4>
                    <p>At WATCHGALLERY, our vision is to be the ultimate destination for watch lovers. We offer a collection of curated selection of quality watches that combine style and value. Our commitment to authenticity, integrity, and exceptional customer experiences sets us apart.</p>
                </span>
            </div>
            <br />
            <h2>Our Team</h2>
            <div className='team-member_1'>
                <span className='member-1_img'>
                    <img src= {myimage} alt=''/>
                </span>
                <span className='team-member_detail'>
                    <h4>Meet Our Founder and Developer</h4>
                    <p>At WATCHGALLERY, we are proud to introduce our visionary founder and talented developer, ABDUL AZIZ . With a passion for watches and a deep understanding of technology, ABDUL AZIZ embarked on the journey to create a seamless online platform for watch enthusiasts worldwide.</p>
                </span>
            </div>
        </div>
        <Footer />
       </div>
    )
}
export default AboutUs;