import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Navbar.scss";

function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const navbarRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    setNavbarHeight(navbarRef.current.offsetHeight);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight - 15,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar_top">
      <div className="navbar_mobile">
        <Link to="./" type="button">
          <img
            className="home_logo_mobile"
            src="/public/button/home.png"
            alt="home"
          />
        </Link>

        <Link to="./" type="button">
          <img
            className="logo_burgermenu"
            src="/public/logo/logo-final.png"
            alt=""
          />
        </Link>

        <div className="search_menuburger">
          <button type="button" onClick={toggleSearch}>
            <img
              className="search_logo"
              src="/public/button/rechercher.png"
              alt="rechercher"
            />
            <div className="mobile_search_bar">
              <Search />
            </div>
          </button>
        </div>
      </div>

      <div className="navbar" ref={navbarRef}>
        <div className="logo_titre_navbar">
          <div className="imglogo_navbar">
            <img
              className="image_navbar_logo"
              src="../public/logo/logo-final.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="anchor_filter_navbar">
          <div className="anchor_navbar">
            <ul>
              <li>
                <Link to="./" type="button">
                  <img
                    className="home_logo"
                    src="/public/button/home.png"
                    alt="home"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="./#trending"
                  onClick={() => scrollToSection("trending")}
                >
                  Tendances
                </Link>
              </li>
              <li>
                <Link
                  to="./#streaming"
                  onClick={() => scrollToSection("streaming")}
                >
                  Streaming
                </Link>
              </li>
              <li>
                <Link
                  to="./#category"
                  onClick={() => scrollToSection("category")}
                >
                  Catégories
                </Link>
              </li>
              <li>
                <button type="button" onClick={toggleSearch}>
                  <img
                    className="search_logo"
                    src="/public/button/rechercher.png"
                    alt="rechercher"
                  />
                </button>
              </li>
            </ul>
            <div className="search_navbar">{isSearchVisible && <Search />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
