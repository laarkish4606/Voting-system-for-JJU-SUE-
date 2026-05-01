import React, { useState } from "react";
import styles from "./addCandidate.module.scss";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const AddCandidate = () => {

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    gpa: "",
    vision: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };
  // console.log(formData)
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const dataToSend = new FormData();

    dataToSend.append("name", formData.name);
    dataToSend.append("department", formData.department);
    dataToSend.append("gpa", formData.gpa);
    dataToSend.append("vision", formData.vision);
    dataToSend.append("img", formData.image); 

    const { data } = await axios.post(
      "/api/admin/add-candidate",
      dataToSend
    );

    console.log(data);
    toast.success("Candidate added successfully");
    navigate("/election");

  } catch (error) {
    const message =
      error.response?.data?.message || " please make sure to fill all fields";
   setLoading(false);
    toast.error(message);


  }
};


    

  return (
    <div className={styles.container}>
        <div>
            <h1>Add Candidate</h1>
            <form onSubmit={handleSubmit}>
                <label>Candidate Name</label>
                <input type="text" placeholder="Enter candidate name" onChange={handelInputChange} name="name" />
                <label> Department</label>
                <input type="text" placeholder="Enter department" onChange={handelInputChange} name="department" />
                <label>required GPA</label>
                <input type="text" placeholder="Enter required GPA" onChange={handelInputChange} name="gpa" />
                <label> Vision</label>
                <textarea name="vision" id="vision" onChange={handelInputChange}></textarea>
              <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            />

           <button type="submit" >{loading ? "Adding..." : "Add Candidate"}</button>
            </form>

        </div>

    </div>
  )
}

export default AddCandidate;