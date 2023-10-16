import { Link } from "react-router-dom";
import {
  HomeOutlined,
  PeopleOutlineOutlined,
  LocalGroceryStoreOutlined,
  InventoryOutlined,
  ListAltOutlined,
  GridViewTwoTone,
  NoteAltOutlined,
  Subject,
  CalendarMonth,
  Settings,
  Layers,
  BarChartOutlined,
  SummarizeOutlined,
} from "@mui/icons-material";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">main</span>
        <Link to="/" className="listItem">
          <HomeOutlined />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="listItem">
          <PeopleOutlineOutlined />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">lists</span>
        <Link to="/users" className="listItem">
          <PeopleOutlineOutlined />
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to="/products" className="listItem">
          <LocalGroceryStoreOutlined />
          <span className="listItemTitle">Products</span>
        </Link>
        <Link to="/" className="listItem">
          <InventoryOutlined />
          <span className="listItemTitle">Orders</span>
        </Link>
        <Link to="/" className="listItem">
          <ListAltOutlined />
          <span className="listItemTitle">Posts</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">general</span>
        <Link to="/" className="listItem">
          <GridViewTwoTone />
          <span className="listItemTitle">Elements</span>
        </Link>
        <Link to="/" className="listItem">
          <NoteAltOutlined />
          <span className="listItemTitle">Note</span>
        </Link>
        <Link to="/" className="listItem">
          <Subject />
          <span className="listItemTitle">Forms</span>
        </Link>
        <Link to="/" className="listItem">
          <CalendarMonth />
          <span className="listItemTitle">Calendar</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">Maintenance</span>
        <Link to="/" className="listItem">
          <Settings />
          <span className="listItemTitle">Settings</span>
        </Link>
        <Link to="/" className="listItem">
          <Layers />
          <span className="listItemTitle">Backups</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">analytics</span>
        <Link to="/" className="listItem">
          <BarChartOutlined />
          <span className="listItemTitle">Charts</span>
        </Link>
        <Link to="/" className="listItem">
          <SummarizeOutlined />
          <span className="listItemTitle">Logs</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
