import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
  return (
    <div className="header">
      <h1>Trend Mağaza</h1>
      <HeaderCartButton onShowCart={onShowCart}/>
    </div>
  );
};

export default Header;
