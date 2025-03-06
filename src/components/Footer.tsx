import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div className="col">
          <img
            className="garpic"
            src="../src/assets/Garfieldpic.png"
            alt="Garfield"
          />
        </div>
        <div className="col">
          <div className="row1">
            <h4>Contact Us</h4>
          </div>
          <div className="row2">
            <a className="custom-a" href="mailto:garfields@gmail.com">
              garfields@gmail.com
            </a>
            <br></br>
            <br></br>
            <p>+94 76-5506968</p>
            <p>
              Independence Arcade Commercial Complex, Independence Ave, Colombo
              00700, Sri Lanka
            </p>
          </div>
        </div>
        <div className="col">
          <div className="row1">
            <h4>Follow Us</h4>
          </div>
          <div className="row2">
            <img
              className="logo"
              src="../src/assets/instagram.png"
              alt="facebook"
            />
            <a className="custom-a" href="#">
              Instagrame
            </a>
            <br></br>
            <img
              className="logo"
              src="../src/assets/facebook.png"
              alt="facebook"
            />
            <a className="custom-a" href="#">
              Facebook
            </a>
            <br></br>
            <img
              className="logo"
              src="../src/assets/twitter.png"
              alt="facebook"
            />
            <a className="custom-a" href="#">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <p>&copy; 2025 Garfield's Cheesy Haven</p>
    </footer>
  );
}

export default Footer;
