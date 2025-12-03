import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img src="/assets/images/pmyncLogo.png" alt="PMYNC LOGO" width={75} />
        </li>
        <li>
          <img
            src="/assets/images/pmyncLogo2.png"
            alt="PMYNC LOGO 2"
            width={170}
          />
        </li>
        <li>
          <img src="/assets/images/emblem.png" alt="EMBLEM" width={100} />
        </li>
        <li>
          <img
            src="/assets/images/inlights.svg"
            alt="INLIGHTS"
            style={{ height: 27.5 }}
          />
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/members">Members</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <Link to="/contact" id="contactBtn">
            Contact Us{" "}
            <img src="/assets/images/anchorArrow.svg" width={20} alt="arrow" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
