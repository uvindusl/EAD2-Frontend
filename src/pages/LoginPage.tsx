import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/navBar";
import "../css/LoginPage.css";

function LoginPage() {
  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-area">
        <div className="login-container">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
