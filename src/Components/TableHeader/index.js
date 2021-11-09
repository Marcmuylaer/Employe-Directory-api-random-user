import React, { useEffect, useContext } from "react";
import TableRow from "../TableRow";
import EmployeeContext from "../../utils/EmployeeContext";

function TableHeader(props) {
  const employees = useContext(EmployeeContext);
  console.log(employees);

  useEffect(() => {
    console.log("im rendering");
  }, [employees]);

  return (
    <table className="table">
      <tr className="tableHead">
        <th>Photo</th>
        <th>Name </th>
        <th>Email</th>
        <th>Phone</th>
        <th>Age</th>
      </tr>
      {employees.map((employee, i) => (
        <TableRow
          key={i}
          image={employee.picture.thumbnail}
          name={`${employee.name.first} ${employee.name.last}`}
          email={employee.email}
          phone={employee.phone}
          age={employee.dob.age}
        />
      ))}
    </table>
  );
}

export default TableHeader;

// <span className="btn" onClick={props.handleSort}>sort</span>
