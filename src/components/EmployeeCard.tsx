import { useNavigate } from "react-router-dom";
import "../css/EmployeeCard.css";

interface Employee {
  id: number;
  name: string;
  address: string;
  tel: string;
}

interface EmployeeProps {
  handleDeleteClick: (employeeId: number) => void;
  employee: Employee;
}

function EmployeeCard({ employee, handleDeleteClick }: EmployeeProps) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/updateemployee/${employee.id}`);
  };

  return (
    <div>
      <div className="employee-card">
        <div className="employee-card__avatar">
          <div className="person-icon"></div>
        </div>
        <div className="employee-card__info">
          <h4>{employee.name}</h4>
          <p>{employee.tel}</p>
          <p>{employee.address}</p>
        </div>
        <div className="btn-group">
          <div>
            <button className="btnEdit" onClick={handleEditClick}>
              <div className="gear-icon"></div>
            </button>
          </div>
          <div>
            <button
              className="btnDelete"
              onClick={() => handleDeleteClick(employee.id)}
            >
              <div className="trash-icon"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
