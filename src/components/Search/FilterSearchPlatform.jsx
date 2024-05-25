import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterSearchPlatform.scss"

function FilterSearchPlatform({ setResultsSearchByName, allGamesResults }) {
  //      Declaration of state for the selected category and the filtered elements
  const [selectedPlatform, setSelectedPlatform] = useState("");

  //      Function to handle the change of selected category
  const handleSelectChange = (event) => {
    const platform = event.target.value;
    setSelectedPlatform(platform);
    if (platform.includes("option")) {
      setResultsSearchByName(allGamesResults);
    } else {
      const filtered = allGamesResults.filter((item) =>
        item.platforms.some(
          (platformObj) => platformObj.platform.name === platform
        )
      );
      setResultsSearchByName(filtered);
    }
  };

  return (
    <>
      <label htmlFor="platform-select" style={{ color: "white" }}>
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

FilterSearchPlatform.propTypes = {
  setResultsSearchByName: PropTypes.string.isRequired,
  allGamesResults: PropTypes.string.isRequired,
};

export default FilterSearchPlatform;
