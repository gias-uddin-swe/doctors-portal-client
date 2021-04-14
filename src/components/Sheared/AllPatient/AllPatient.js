import React, { useEffect, useState } from "react";

const AllPatient = () => {
  const [patient, setPatient] = useState([]);
  console.log(patient);

  useEffect(() => {
    fetch("http://localhost:5000/allPatient")
      .then((res) => res.json())
      .then((data) => setPatient(data));
  }, []);
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
          {patient.map((pd, index) => (
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

export default AllPatient;
