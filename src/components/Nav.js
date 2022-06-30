import { Link } from 'react-router-dom';
import { FaAngleLeft, FaCog } from 'react-icons/fa';

const Nav = () => (
  <nav>
    <Link to="/">
      <FaAngleLeft size={42} />
    </Link>
    <h4>Air Quality Tracker</h4>
    <FaCog size={28} />
  </nav>
);

export default Nav;
