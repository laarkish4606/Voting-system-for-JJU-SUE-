import { createSlice } from "@reduxjs/toolkit";
import competitors from "../../assets/competitors.json"

const initialState={
        competitors:JSON.parse(window.localStorage.getItem('competitors'))||competitors,
        currentCompetitor:null,
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
        addToCompetitors:(state,action)=>{
         
           let compIndex=state.competitors.findIndex(comp=> comp.id ===
            action.payload
           )
         
           state.competitors[compIndex].votes=
           Number(state.competitors[compIndex].votes)+Number(state.votCount)

        //    the way of storing data in to local storage 
           window.localStorage.setItem('competitors',JSON.stringify(state.competitors)
           )
        

        },
        reset:(state)=>{
            state.currentCompetitor=null,
            state.votCount= 0
        }
     }
})
export default competitor.reducer
export const{setCurrentCompetitor,setInCreament,setDiCreament,addToCompetitors,reset}=competitor.actions