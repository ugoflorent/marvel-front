import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = ({ search }) => {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="logo" />
        <Link to="./">
          <button>Characters</button>
        </Link>
        <Link to="./comics">
          {" "}
          <button>Comics</button>
        </Link>
        <button>Favoris</button>
        <input
          className="header-input"
          type="text"
          placeholder="Rechercher des Characters"
          value={search}
        />
      </div>
    </header>
  );
};

export default Header;
