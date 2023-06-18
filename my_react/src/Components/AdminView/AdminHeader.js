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
      </div>
    </header>
  );
}

export default AdminHeader;
