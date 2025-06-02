import "./styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="tabs" to="/">Home</Link>
      <Link className="tabs" to="/items">Items</Link>
      <Link className="tabs" to="/categories">Categories</Link>
    </div>
  );
}
