import "../css/EmployeeCard.css";

interface Employee {
  id: number;
  name: string;
  address: string;
  tel: string;
}

interface EmployeeProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeProps) {
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
            <button className="btnEdit">
              <div className="gear-icon"></div>
            </button>
          </div>
          <div>
            <button className="btnDelete">
              <div className="trash-icon"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
