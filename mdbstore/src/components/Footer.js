import { Fragment } from "react"
import ImgLogo from "../assets/logo.png";

export default function Footer() {
  return (
    <Fragment>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="https://mongodb.com" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src={ImgLogo} className="footer-logo" alt="" />
          </a>
          <span className="text-muted">&copy; 2022 MongoDB inc.</span>
        </div>
      </footer>
    </Fragment>
  )
}