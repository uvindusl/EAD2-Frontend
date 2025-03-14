import "../css/EmployeeCard.css";

function EmployeeCard() {
  return (
    <div>
      <div className="employee-card">
        <div className="employee-card__avatar">
          <div className="person-icon"></div>
        </div>
        <div className="employee-card__info">
          <h4>John Doe</h4>
          <p>472908312313</p>
          <p>Ragama</p>
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
