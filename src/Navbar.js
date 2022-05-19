const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/works">Works</a>
        </li>
        <li class="nav-item">
          <button type="button" className="btn btn-dark">Dark</button>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navbar;