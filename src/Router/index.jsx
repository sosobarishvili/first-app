import { Routes, Route } from "react-router-dom"
import CardList from "../component/list project/cardList";
import Counter from "../component/others/counter";
import CheckBox from "../component/others/checkbox";
import Product from "../component/list project/Product";
import TodoForm from "../component/TodoAssignment/TodoForm";
import Home from "../component/homePage/Home";

const Tabs = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/checkbox" element={<CheckBox />} />
      <Route path="/wishlist" element={<CardList />} />
      <Route path="wishlist/:productid" element={<Product />} />
      <Route path="todolist" element={<TodoForm />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default Tabs;