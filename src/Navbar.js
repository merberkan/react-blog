import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links"></div>
            {/* Link kullanmamızın sebebi sayfayı yenilemiyor. Bir yere request atmıyor. Direk component değiştiriyor. */}
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
        </nav>
    );
}

export default Navbar;