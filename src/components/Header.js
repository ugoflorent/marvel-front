import logo from "../img/logo.png";

const Header = ({ search }) => {
  return (
    <header>
      <div className="header">
        <img src={logo} alt="logo" />
        <button>Characters</button>
        <button>Comics</button>
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
