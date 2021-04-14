import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((pd, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{pd.name}</td>
              <td>{pd.email}</td>
              <td>{pd.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentShortList;
