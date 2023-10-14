import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2>Inventory App</h2>

      <ul className={styles.navLink}>
        <li>
          {" "}
          <NavLink to={"/"}>Inventory</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/sales"}>Sales</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
