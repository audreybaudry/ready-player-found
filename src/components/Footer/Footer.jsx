import "./Footer.scss";

function Footer() {
  return (
    <div className="all">
      <div className="footer_all">
        <div className="mention_legal">
          <div id="first_store" className="all_store">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rawg.io/"
              aria-label="Rawg"
            >
              <img
                className="store_logo"
                id="rawg"
                src="/public/footer/Rawg_logo.png"
                alt=""
              />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://store.steampowered.com/?l=french"
              aria-label="steam"
            >
              <img
                className="store_logo"
                id="steam"
                src="/public/footer/Steam_icon_logo.png"
                alt=""
              />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.epicgames.com/site/fr/home"
              aria-label="epic_games"
            >
              <img
                className="store_logo"
                id="epic_games"
                src="/public/footer/Epic_Games_logo.png"
                alt=""
              />
            </a>
          </div>
          <div id="second_store" className="all_store">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.nintendo.com/fr-fr/Nintendo-eShop/Nintendo-eShop-1806894.html"
              aria-label="nintendo"
            >
              <img
                className="store_logo"
                id="nintendo_logo"
                src="/public/footer/nintendo_eshop_logo.png"
                alt=""
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.xbox.com/fr-FR/microsoft-store"
              aria-label="xbox"
            >
              <img
                className="store_logo"
                id="xbox_logo"
                src="/public/footer/Xbox_one_logo.png"
                alt=""
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://store.playstation.com/fr-fr/pages/latest"
              aria-label="playstation"
            >
              <img
                className="store_logo"
                id="playstation_logo"
                src="/public/footer/PlayStation_Store.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="logo_footer">
          <img
            className="imglogo_footer"
            src="/public/logo/logo-final.png"
            alt="logo_footer"
          />
          <p className="mention_rawg">2024 © RAWG, Behind The Games</p>
        </div>
        
        <div className="creator_footer">
          <ul>
            <li>Arnauld Montandon, Audrey Baudry</li>
            <li>Elias Ben Brahim, Morgan Pouilly</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
