import React from "react";
import "./NavBar.css";
import Item from "./components/Item";
import {
  HOME_BASE_URL,
  RESUME_BASE_URL,
  SERVICES_BASE_URL,
  BLOG_BASE_URL,
  CONTACT_BASE_URL,
} from "components/Routes/URLMap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: HOME_BASE_URL
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div className="navbar">
        {[
          {
            path: HOME_BASE_URL,
            name: "Home",
            active: true,
          },
          {
            path: RESUME_BASE_URL,
            name: "Resume",
          },
          {
            path: SERVICES_BASE_URL,
            name: "Services",
          },
          {
            path: BLOG_BASE_URL,
            name: "Blog",
          },
          {
            path: CONTACT_BASE_URL,
            name: "Contact",
          },
        ].map((item) => (
          <Item
            onClick={() => {
              this.handleItemClick(item.path)
            }}
            path={item.path}
            active={item.path === activeItem}
          >
            {item.name}
          </Item>
        ))}
      </div>
    );
  }

  handleItemClick(newActiveItem) {
    this.setState({
      activeItem: newActiveItem
    })
  }
}



export default NavBar;
