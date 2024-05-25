import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterCategoryPlatform.scss";

function FilterCategoryPlatform({ setGames, allGames }) {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  //      Function to handle the change of selected category
  const handleSelectChange = (event) => {
    const platform = event.target.value;
    setSelectedPlatform(platform);
    if (platform.includes("option")) {
      setGames(allGames);
    } else {
      const filtered = allGames.filter((item) =>
        item.platforms.some(
          (platformObj) => platformObj.platform.name === platform
        )
      );
      setGames(filtered);
    }
  };

  return (
    <>
      <label className="filter_platform_select" htmlFor="platform-select">
        Choisir une plateforme :
      </label>

      <select
        name="platforms"
        id="platform-select"
        value={selectedPlatform}
        onChange={handleSelectChange}
      >
        <option value="option">--Choisir une option--</option>
        <option value="PC">PC</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="Wii">Wii</option>
        <option value="Xbox One">Xbox One</option>
        <option value="Xbox Series S/X">Xbox Series S/X</option>
        <option value="PlayStation 3">PlayStation 3</option>
        <option value="PlayStation 4">PlayStation 4</option>
        <option value="PlayStation 5">PlayStation 5</option>
      </select>
    </>
  );
}

FilterCategoryPlatform.propTypes = {
  setGames: PropTypes.string.isRequired,
  allGames: PropTypes.string.isRequired,
};

export default FilterCategoryPlatform;
