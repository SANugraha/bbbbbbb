import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logoPPID from "../../assets/logoPPID.png";
import styles from "./NavbarMain.module.css";
const NavbarMain = () => {

  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([ true, false, false, false, false ]);
  const [expand, setExpand] = useState(false);

  const closeNav = ()=>{
    setExpand(false);
  }

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map((x) => (x = false));
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));

  };



  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#0A1931",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={()=>{setExpand(prevState => !prevState)}}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img
              src={logoPPID}
              height="50" // Atur tinggi logo agar pas di navbar
              className="d-inline-block align-top"
              alt="Logo PPID KAB SEMARANG" 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M4 7h22M4 15h22M4 23h22"/>
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px"}}
                onClick={() => {handleActiveNav(0); closeNav()}}
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {handleActiveNav(1); closeNav()}}
              >
                About us
              </NavLink>

              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link to="/services" style={{textDecoration:'none'}} className={styles.dropicon} onClick={() => {handleActiveNav(2); closeNav()}}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}>
                      Services
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/sMediaService" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>Social Media Marketing</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>Quality Assurance</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>Cloud and IoT Based Solutions</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>IT Consultancy</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>AI Solutions</NavLink></NavDropdown.Item>
              </NavDropdown>

              
              <NavLink
                to="/contactUs"
                className={` ${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {handleActiveNav(3); closeNav()}}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/berita"
                className={` ${styles.nav_text} nav-link ${activeNav[4] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {handleActiveNav(4); closeNav()}}
              >
                Berita
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
