import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import "./Categories.scss";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showAllCategs, setShowAllCategs] = useState(false);
  const [showArrowUp, setShowArrowUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setShowAllCategs(window.innerWidth > 650);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCategories = () => {
    Api.getCategories().then((resp) => { 
      setCategories(resp.data.results);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleShowAllCategs = () => {
    setShowAllCategs(true);
    setShowArrowUp(true);
  };

  const handleHideAllCategs = () => {
    setShowAllCategs(false);
    setShowArrowUp(false);
  };

  return (
    <div>
      <h2 id="category"> Catégories</h2>
      <div className="grid_categories_card">
        {!showAllCategs && (
          <>
            {categories.slice(0, 4).map((item) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                className="categories_card"
                key={`card-${item.name}`}
                onClick={() => {
                  navigate("/decouvrir/categorie", {
                    state: { CategoryId: item.id, CategoryName: item.name },
                  });
                }}
              >
                <img
                  className="image_categories"
                  src={item.image_background}
                  alt=""
                />
                <h4 className="categories_name">{item.name}</h4>
              </div>
            ))}
          
            <button
              className="button_up_down"
              type="button"
              onClick={handleShowAllCategs}
            >
              <img
                src="../public/button/arrow-down.png"
                alt="Logo"
                className="arrow_logo"
              />
            </button>
          </>
        )}
        {showAllCategs &&
          categories.map((item) => (
            <div
              className="categories_card"
              key={`card-${item.name}`}
              role="presentation"
              onClick={() => {
                navigate("/decouvrir/categorie", {
                  state: { CategoryId: item.id, CategoryName: item.name },
                });
              }}
            >
              <img
                className="image_categories"
                src={item.image_background}
                alt=""
              />
              <h4 className="categories_name">{item.name}</h4>
            </div>
          ))}
        {showArrowUp && (
          <button
            className="button_up_down"
            type="button"
            onClick={handleHideAllCategs}
          >
            <img
              src="../public/button/arrow-up.png"
              alt="Logo"
              className="arrow_logo"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Categories;
