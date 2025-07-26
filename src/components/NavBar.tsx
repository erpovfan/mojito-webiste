import React from "react";
import { navLinks } from "../../constants";

function NavBar() {
  return (
    <nav>
      <div>
        <a href="#home">
          <p>Velvet pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
