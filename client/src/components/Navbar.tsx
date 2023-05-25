import { Link } from "react-router-dom";

interface NavbarProps {
  user: any; // Replace 'any' with the appropriate type for the 'user' prop
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {

  const logout = () => {
  };

  return (
    <div className="navbar">
      <span className="logo"><Link className="link" to="/">Pong Arcade</Link></span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src="" alt="" className="avatar" />
          </li>
          <li className="listItem">Idil</li>
          <li className="listItem" onClick={logout}>Logout</li>
        </ul>
        ) : (
        <Link className="link" to="login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
