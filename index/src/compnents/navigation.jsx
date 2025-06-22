const Navigation= () =>{
return(
 <nav className="container">
     {/* Logo */}
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        {/* Navigation Menu */}
        <ul className="nav-links">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Login Button */}
        <button className="login-btn">Login</button>
      </nav>
)
}
export default Navigation;