import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageSwitch = (e) => setLanguage(e.target.value);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-warning" to="/products">
          ShopHub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#headerNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="headerNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
               <NavLink className="nav-link text-light" to="/products">
                Items
              </NavLink>          
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-light" to="/">
                Reach Us
              </NavLink>          
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-light" to="/">
                Info
              </NavLink>          
            </li>            
          </ul>

          <div className="d-flex align-items-center gap-3">
            {/* language dropdown */}
            <select
              className="form-select form-select-sm w-auto bg-light"
              value={language}
              onChange={handleLanguageSwitch}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>

            {}
            <NavLink className="btn btn-warning text-dark" to="/cart">
              <i className="bi bi-basket3" /> Basket
            </NavLink>
            <NavLink className="btn btn-outline-light position-relative" to="/">
            <i className="bi bi-person-circle" /> Sign In
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}
