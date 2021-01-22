import React from "react";

function EmployeeDetail(props) {
  return (
    <>
      <td><img alt={`${props.name.last}  ${props.name.first}`} className="img-fluid" src={props.picture.medium} style={{ margin: "0 auto" }} /></td>
      <td>{props.name.first} {props.name.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob.date}</td>
    </>
  );
}

export default EmployeeDetail;
