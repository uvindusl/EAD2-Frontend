import "../css/Footer.css";
import Garfieldpic from "../../src/assets/Garfieldpic.png";
import instagram from "../../src/assets/instagram.png";
import facebook from "../../src/assets/facebook.png";
import twitter from "../../src/assets/twitter.png";

function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div className="col">
          <img className="garpic" src={Garfieldpic} alt="Garfield" />
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
            <img className="logo" src={instagram} alt="instagram" />
            <a className="custom-a" href="#">
              Instagrame
            </a>
            <br></br>
            <img className="logo" src={facebook} alt="facebook" />
            <a className="custom-a" href="#">
              Facebook
            </a>
            <br></br>
            <img className="logo" src={twitter} alt="twitter" />
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
