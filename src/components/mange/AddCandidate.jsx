import React from "react";
import styles from "./addCandidate.module.scss";
import { useSelector,useDispatch } from "react-redux";
import { setCandidateName, setDepartment, setGPA, setDescription, setImage, addCandidate } from "../../features/competitor/competitorSlice";
const AddCandidate = () => {
const {competitors} = useSelector((store) => store.competitor);
console.log(competitors)
const dispatch=useDispatch();
const handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(addCandidate())
    // console.log("data added")
}

//image handeler
const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    dispatch(setImage(reader.result)); 
  };

  reader.readAsDataURL(file);
};


  return (
    <div className={styles.container}>
        <div>
            <h1>Add Candidate</h1>
            <form onSubmit={handelSubmit}>
                <label>Candidate Name</label>
                <input type="text" placeholder="Enter candidate name" onChange={(e) => dispatch(setCandidateName(e.target.value))} />
                <label> Department</label>
                <input type="text" placeholder="Enter department" onChange={(e) => dispatch(setDepartment(e.target.value))} />
                <label>required GPA</label>
                <input type="text" placeholder="Enter required GPA" onChange={(e) => dispatch(setGPA(e.target.value))} />
                <label> Description</label>
                <textarea name="Description" id="Description" onChange={(e) => dispatch(setDescription(e.target.value))}></textarea>
              <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
            />



                <button type="submit">Add Candidate</button>
            </form>

        </div>

    </div>
  )
}

export default AddCandidate