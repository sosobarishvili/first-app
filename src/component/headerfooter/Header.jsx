import { Link, NavLink } from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <ul>
          <li> <NavLink to={"/"}>home</NavLink></li>
          <li> <NavLink to={'/counter'}>Counter</NavLink></li>
          <li> <NavLink to={'/checkbox'}>checkbox</NavLink></li>
          <li><NavLink to={"/wishlist"}>wishlist</NavLink></li>
          <li> <NavLink to={"/todolist"}>todolist</NavLink> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;