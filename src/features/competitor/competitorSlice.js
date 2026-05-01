import { createSlice } from "@reduxjs/toolkit";
const initialState={
        // competitors:JSON.parse(window.localStorage.getItem('competitors'))||competitors,
        currentCompetitor:null,
        CandidateName:"",
        Department:"",
        GPA:"",
        Description:"",
        Image:"",
        votCount:0,
    
    }


const competitor=createSlice({
     name:"competitor",
     initialState,
     reducers:{
        setCurrentCompetitor:(state,action)=>{
        state.currentCompetitor=action.payload;
       
        },
        setInCreament:(state)=>{
            state.votCount=state.votCount + 1
     
        },
        setDiCreament:(state)=>{
            state.votCount=state.votCount - 1
           
        },
       setCandidateName:(state,action)=>{
            state.CandidateName=action.payload
        },
        setDepartment:(state,action)=>{
            state.Department=action.payload
        },
        setGPA:(state,action)=>{
            state.GPA=action.payload
        },
        setDescription:(state,action)=>{
            state.Description=action.payload
        },
     setImage:(state,action)=>{
            state.Image=action.payload
        },
       deleteCandidate: (state, action) => {
        const id = action.payload;

        state.competitors = state.competitors.filter(
            (comp) => comp.id !== id
        );

        localStorage.setItem(
            "competitors",
            JSON.stringify(state.competitors)
        );
        },

   addCandidate: (state) => {
  const newCandidate = {
    id: Date.now(),
    name: state.CandidateName,
    department: state.Department,
    gpa: state.GPA,
    vision: state.Description,
    image: state.Image,
    votes: 0,
  };

  state.competitors.push(newCandidate);

  localStorage.setItem(
    "competitors",
    JSON.stringify(state.competitors)
  );

  // reset form
  state.CandidateName = "";
  state.Department = "";
  state.GPA = "";
  state.Description = "";
  state.Image = "";
},


        addToCompetitors: (state, action) => {
  const compIndex = state.competitors.findIndex(
    comp => comp._id === action.payload
  );

  if (compIndex === -1) return;

  state.competitors[compIndex].votes =
    Number(state.competitors[compIndex].votes || 0) +
    Number(state.votCount);
},

        reset:(state)=>{
            state.currentCompetitor=null,
            state.votCount= 0
        }
     }
})
export default competitor.reducer
export const{setCurrentCompetitor,setInCreament,setDiCreament,addToCompetitors,reset,setCandidateName,setDepartment,setGPA,setDescription,setImage,addCandidate,deleteCandidate}=competitor.actions