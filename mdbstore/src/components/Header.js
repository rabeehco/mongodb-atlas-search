import ImgLogo from "../assets/logo.png";
import Search from "./Search";

export default function Header() {
  let linkStyle = {color: "#00684a"};
  let activeLinkStyle = {backgroundColor: "#00684a"};

  return (
    <div className="header">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={ImgLogo} className="header-logo" alt="" />
          <span className="fs-4">Content Catalog Demo</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a style={linkStyle} href="." className="nav-link">Home</a></li>
          <li className="nav-item"><a style={activeLinkStyle} href="." className="nav-link active" aria-current="page">Search and Shop</a></li>
          <li className="nav-item"><a style={linkStyle} href="." className="nav-link">Contact</a></li>
          <li className="nav-item"><a style={linkStyle} href="https://mongodb.com/developer" className="nav-link">Blog</a></li>
        </ul>

      </header>
      <Search />

      <div className="row">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark-green">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">MongoDB Store</h1>
            <p className="lead my-3">Learn how to leverage Atlas Search to add search capabilities to your e-commerce application.</p>
          </div>
        </div>
      </div>
    </div>
  )
}