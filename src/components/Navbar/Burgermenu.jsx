import "./Burgermenu.scss";
import PropTypes from "prop-types";

function Burgermenu({ isOpen, toggleMenu }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        role="presentation"
        onClick={toggleMenu}
      >
        <div className="burger_icon">
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>
        {isOpen && (
          <div className="menu">
            <div className="title_menu">
              <a
                className="title"
                href="#trending"
                onClick={() => scrollToSection("trends")}
              >
                Tendances
              </a>
              <a
                className="title"
                href="#streaming"
                onClick={() => scrollToSection("stream")}
              >
                Streaming
              </a>
              <a
                className="title"
                href="#category"
                onClick={() => scrollToSection("categ")}
              >
                Catégories
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Burgermenu.propTypes = {
  isOpen: PropTypes.string.isRequired,
  toggleMenu: PropTypes.string.isRequired,
};

export default Burgermenu;
