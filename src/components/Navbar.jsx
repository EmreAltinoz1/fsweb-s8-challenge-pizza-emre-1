import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
          <ul>
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/siparis">Sipariş Ver</Link></li>
            <li><Link to="/onay">Onay</Link></li>
          </ul>
        </nav>
    );
}

export default Navbar;