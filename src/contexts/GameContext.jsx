import { createContext, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Api from "../services/Api";

const GameContext = createContext();

export function GameProvider({ children }) {
  const openGameWebsite = useCallback(async (gameId) => {
    // useCallback ia a hook who stock the argument et resend it
    // async allow the execution of the script when the website is loaded
    try {
      // try allow to wrap the code to protect him if an error occured when the execution of the code
      const response = await Api.getWebSite(gameId);
      // await allow to wait that the value of the fonction is available, the execution of Api.getWebSite(gameId) can take time
      const game = response.data;
      if (game.website) {
        window.open(game.website, "_blank");
        // window open allow to open on a new web tab the website
      } else {
        console.error("No website available for this game.");
      }
    } catch (error) {
      console.error("Error fetching game website:", error);
    }
  }, []);

  const contextValue = useMemo(
    // useMemo is a hook who allow to stock the result of an another hook
    () => ({
      openGameWebsite,
    }),
    [openGameWebsite]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGame = () => useContext(GameContext);
