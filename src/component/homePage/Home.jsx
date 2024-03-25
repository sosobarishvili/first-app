import { NavLink } from "react-router-dom"
import './style.css'

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="current-assignment">
        <NavLink to={"/todolist"} className="home-navlink-text">Click here to see current assignment <span className="current-assignment">Todo List</span></NavLink>
      </div>
    </div>
  )
}

export default Home