import "./index.css";
const Header: React.FunctionComponent<any> = () => {
  return (
    <>
      <div className="page-header">
        <div className="logo">
          <p>Logo</p>
        </div>
        <a id="menu-icon" className="menu-icon">
          <i className="fa fa-bars"></i>
        </a>

        <div id="navigation-bar" className="nav-bar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Services</a>
          <a href="#">Profile</a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
        </div>

        <div className="header-right">
          <button>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Header;
