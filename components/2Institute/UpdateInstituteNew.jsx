import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const MyUpdateInsti = () => {
  let history = useHistory();
  
  const { institute_id } = useParams();
  console.log(institute_id);
  const [institute, setinstitute] = useState({
    instituteName : "",
    address : "",
    emailId: "",
    contactNum : ""
     
  });

  const { instituteName, address, emailId,contactNum } = institute;
  const onInputChange = e => {
    setinstitute({ ...institute, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadInstituteInfo();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateinstitute/${institute_id}`, institute);
    history.push("/instituteHomeNew");
  };

  const loadInstituteInfo = async () => {
      console.log(institute_id);
    const result = await axios.get(`http://localhost:8080/getInstituteById/${institute_id}`);
    setinstitute(result.data);
  };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Update Institute</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Institute  Name"
            name="instituteName"
            value={instituteName}
            onChange={e => onInputChange(e)}
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter EmailId"
            name="emailId"
            value={emailId}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter contact_num"
            name="contactNum"
            value={contactNum}
            onChange={e => onInputChange(e)}
          />
        </div>
          <button className="btn btn-warning btn-block">Update Institute</button>
        </form>
      </div>
    </div>
  );
};

export default MyUpdateInsti;