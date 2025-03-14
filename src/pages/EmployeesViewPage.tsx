import EmployeeCard from "../components/EmployeeCard";
import "../css/EmployeeViewPage.css";
import Footer from "../components/Footer";
import NavBar from "../components/navBar";

function EmployeesViewPage() {
  return (
    <div>
      <NavBar />
      <div className="employeeCard-container">
        <div>
          <EmployeeCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployeesViewPage;
