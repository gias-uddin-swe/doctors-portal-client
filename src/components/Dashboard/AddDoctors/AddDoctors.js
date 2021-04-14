import React, { useState } from "react";

const AddDoctors = () => {
  const [info, setInfo] = useState({});
  const [file, setFIle] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFIleChange = (e) => {
    const newFile = e.target.files[0];
    setFIle(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
      formData.append("email", info.email);

    fetch("http://localhost:5000/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="text-center">
      <h1>Add Doctors</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            onBlur={handleBlur}
            type="email"
            class="form-control"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            onBlur={handleBlur}
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
          />
        </div>
        <div class="form-check">
          <input onChange={handleFIleChange} type="file" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Upload Image
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;
