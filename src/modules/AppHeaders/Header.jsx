import { RiFacebookFill } from "react-icons/ri";
import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <RiFacebookFill />
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-twitter" aria-hidden="true"></i>
                <RxTwitterLogo />
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <RxInstagramLogo />
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">M Umer Farooq</h1>
            <h6 className="header-mono">Full Stack MERN | Developer</h6>
            <button className="btn btn-primary btn-rounded">
              <i className="ti-printer pr-2"></i>Print Resume
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
