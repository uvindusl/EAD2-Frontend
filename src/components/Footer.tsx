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
            <p>+94 76-5506968</p>
          </div>
        </div>
        <div className="col">
          <div className="row1">
            <h4>Follow Us</h4>
          </div>
          <div className="row2">
            <a className="custom-a" href="#">
              Instagrame
            </a>
            <br></br>
            <a className="custom-a" href="#">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <p>&copy; Garfield's Cheesy Haven</p>
    </footer>
  );
}

export default Footer;
