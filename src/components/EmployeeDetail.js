import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.name.last, props.name.first} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <p>Name: {props.name.first, props.name.last}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>D.O.B.: {props.dob.date}</p>
    </div>
  );
}

export default EmployeeDetail;
