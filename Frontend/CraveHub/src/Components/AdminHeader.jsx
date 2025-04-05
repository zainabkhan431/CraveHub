/* eslint-disable react/prop-types */
import './AdminHeader.css'; // Import the CSS file

const AdminHeader = ({ heading }) => {
  return (
    <header className="adminheader">
      <div className="adminheader-container">
        <h1 className="adminheader-title">{heading}</h1>
      </div>
    </header>
  );
};

export default AdminHeader;
