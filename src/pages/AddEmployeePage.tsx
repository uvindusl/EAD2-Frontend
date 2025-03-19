import AddEmployee from "../components/AddEmployee";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";
import "../css/AddEmployee.css";

function AddEmployeePage() {
  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-area">
        <h2>Add New Employee</h2>
        <div className="login-container1">
          <AddEmployee />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddEmployeePage;
