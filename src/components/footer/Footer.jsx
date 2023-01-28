import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mr Mogollon</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/i-am-sergio"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://youtube.com"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="uil uil-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; sergio15Dev. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
