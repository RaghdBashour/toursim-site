import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <a href='/' style={{ marginTop: '5px' }}><img src='/assets/logo3.png' alt="alwadi_home" /></a>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/places">Places to go</Link>
                    </li>
                    <li>
                        <Link to='/events'>events</Link>
                    </li>
                    <li>
                        <Link to='/guides'>guides</Link>
                    </li>
                    <li>
                        <Link to='/About'>about</Link>
                    </li>
                    <li>
                        <Link to='/Filter'>filter</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
