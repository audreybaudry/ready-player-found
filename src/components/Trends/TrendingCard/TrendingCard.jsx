import PropTypes from "prop-types";
import "./TrendingCard.scss";

function TrendingCard({ tendances, focusCard, setFocusCard }) {
  //      DISPOSITION DESKTOP // CHANGE : CARD CLICKED GO TO FOCUS
  const handleChange = () => {
    if (!focusCard.title.includes(tendances.title)) {
      setFocusCard(tendances);
    }
  };

  return (
    <div onClick={handleChange} role="presentation" onKeyDown={handleChange}>
      <div
        className={`${tendances.class} trending_card_container`}
        role="presentation"
        onKeyDown={handleChange}
      >
        <div className="image_container">
        <img
          className="trending_card_image"
          src={tendances.image}
          alt={tendances.title}
        />
        </div>
        <div className="trending_text">
        <h3 className="trending_title">{tendances.title}</h3>
        <p className="trending_info">{tendances.info}</p>
        </div>
      </div>
    </div>
  );
}

TrendingCard.propTypes = {
  tendances: PropTypes.shape({
    class: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  focusCard: PropTypes.string.isRequired,
  setFocusCard: PropTypes.string.isRequired,
};

export default TrendingCard;
