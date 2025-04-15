import React, { useContext, useState } from "react";
import { Context } from "../main";
import { TiHome } from "react-icons/ti";
import { AiFillMessage } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleNavigate = (path) => {
    navigateTo(path);
    setShow(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const menuItems = [
    { icon: <TiHome />, label: "Home", onClick: () => handleNavigate("/") },
    { icon: <FaUserDoctor />, label: "Doctors", onClick: () => handleNavigate("/doctors") },
    { icon: <MdAddModerator />, label: "Add Admin", onClick: () => handleNavigate("/admin/addnew") },
    { icon: <IoPersonAddSharp />, label: "Add Doctor", onClick: () => handleNavigate("/doctor/addnew") },
    { icon: <AiFillMessage />, label: "Messages", onClick: () => handleNavigate("/messages") },
    { icon: <FiLogOut />, label: "Logout", onClick: handleLogout },
  ];

  const iconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "24px",
    cursor: "pointer",
  };

  const iconStyle = {
    color: "#b0b0b0",
    fontSize: "28px",
    marginBottom: "4px",
  };

  const labelStyle = {
    color: "#b0b0b0",
    fontSize: "14px",
    textAlign: "center",
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex", flexDirection: "column", padding: "20px" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {menuItems.map((item, index) => (
            <div key={index} style={iconContainerStyle} onClick={item.onClick}>
              <div style={iconStyle}>{item.icon}</div>
              <span style={labelStyle}>{item.label}</span>
            </div>
          ))}
        </div>
      </nav>

      <div
        style={!isAuthenticated ? { display: "none" } : { display: "flex", padding: "10px" }}
      >
        {/* <GiHamburgerMenu
          onClick={() => setShow(!show)}
          style={{ color: "#b0b0b0", fontSize: "24px", cursor: "pointer" }}
        /> */}
      </div>
    </>
  );
};

export default Sidebar;
