import UpdateEmployee from "../components/UpdateEmployee";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import "../css/AddEmployee.css";

function UpdateEmployeePage() {
  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-area">
        <h2>Update Employee</h2>
        <div className="login-container1">
          <UpdateEmployee />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateEmployeePage;
