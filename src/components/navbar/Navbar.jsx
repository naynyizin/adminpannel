import "./navbar.scss";
import {
  Search,
  GridView,
  CropFree,
  Settings,
  NotificationsNone,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo192.png" alt="" />
        <span>B100DY!</span>
      </div>
      <div className="icons">
        <Search className="icon" />
        <GridView className="icon" />
        <CropFree className="icon" />
        <div className="notification">
          <NotificationsNone />
          <span>3</span>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <span>Creepy</span>
        </div>
        <Settings />
      </div>
    </div>
  );
};

export default Navbar;
