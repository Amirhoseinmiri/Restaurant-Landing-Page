/* eslint-disable jsx-a11y/anchor-is-valid */

import {
  CommentRounded,
  HiveOutlined,
  Home,
  Info,
  PhoneRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "About",
      icon: <Info />,
    },
    {
      text: "Testimonials",
      icon: <CommentRounded />,
    },
    {
      text: "Contact",
      icon: <PhoneRounded />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRounded />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiveOutlined onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
