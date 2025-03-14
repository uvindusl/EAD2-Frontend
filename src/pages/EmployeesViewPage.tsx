import EmployeeCard from "../components/EmployeeCard";
import "../css/EmployeeViewPage.css";

function EmployeesViewPage() {
  return (
    <div>
      <div className="employeeCard-container">
        <div>
          <EmployeeCard />
        </div>
      </div>
    </div>
  );
}

export default EmployeesViewPage;
