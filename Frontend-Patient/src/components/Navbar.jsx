import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const location = useLocation(); // <-- For highlighting active link

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleBMIClick = () => {
    if (isAuthenticated) {
      navigateTo("/bmi");
    } else {
      toast.info("Please login to calculate your BMI");
      navigateTo("/login");
    }
    setShow(!show);
  };

  const gotoLogin = async () => {
    navigateTo("/login");
    setShow(!show);
  };

  return (
    <>
      <nav className="container">
        <div className="logo">
          <img
            src="/logo.png"
            alt="logo"
            className="logo-img"
            style={{ width: "420px", height: "100px", marginLeft: "-100px" }}
            onClick={() => navigateTo("/")}
          />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
              onClick={() => setShow(!show)}
            >
              Home
            </Link>
            <Link
              to="/appointment"
              className={location.pathname === "/appointment" ? "active-link" : ""}
              onClick={() => setShow(!show)}
            >
              Appointment
            </Link>
            <Link
              to={isAuthenticated ? "/bmi" : "#"}
              className={location.pathname === "/bmi" ? "active-link" : ""}
              onClick={handleBMIClick}
            >
              Calculate BMI
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
              onClick={() => setShow(!show)}
            >
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="logoutBtn btn" onClick={gotoLogin}>
              Login
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
