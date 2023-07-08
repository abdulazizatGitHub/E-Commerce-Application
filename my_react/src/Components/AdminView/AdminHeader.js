import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import logo from '../../Assets/Images/myLogo.png';
import '../../Assets/CSS/AdminHeader.css';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineEye } from 'react-icons/hi';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function AdminHeader() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [ showSessionData, setShowSessionData ] = useState(false);

  const session = JSON.parse(localStorage.getItem('admin'));

  const handleAdminSession = () => {
    if(session) {
        setShowSessionData(!showSessionData);
    } else {
        window.location.href = '/Login';
    }
}

const handleLogout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    setShowSessionData(false);
    window.location.href = '/Login';
}

  const handleSearchToggle = () => {
    setIsSearchVisible((prevState) => !prevState);
  };

  return (
    <header className="adminHeader">
      <img className="brandLogo" src={logo} alt="BrandLogo" />
      <div className="admin-menu">
        <ul className="Menu">
          <Link to="/Admin/AddProduct" className="menu-link">
            <FaPlus /> Add Product
          </Link>
          <Link to="/Admin/ViewProduct" className="menu-link">
            <HiOutlineEye /> View Product
          </Link>
          <Link className="menu-link">
            <RiInboxArchiveLine /> Inbox
          </Link>
        </ul>
        <div className="search-bar">
          <button className="search-button" onClick={handleSearchToggle}>
            <BiSearch className="search-logo" />
          </button>
          <input
            type="text"
            className={`search-input ${isSearchVisible ? 'show' : ''}`}
            placeholder="Search"
          />
        </div>
        <div className='display-session' onClick={handleAdminSession}></div>
      </div>
      {session && showSessionData && (
                <div  className='session'>
                    <p>Status: Login</p>
                    <p>UserName: {session.firstName} {session.lastName} </p>
                    <p>{session.email} </p>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>
            )
            }
    </header>
  );
}

export default AdminHeader;
