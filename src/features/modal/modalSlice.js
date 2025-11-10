import{createSlice} from "@reduxjs/toolkit"

const initialState={
    isOpen:false,
}
const modalSilce=createSlice({
    name:"model",
    initialState,
    // function to handle the open and close modal 
    reducers:{
        handaleModal:(state)=>{
            state.isOpen=!state.isOpen
        }
    }

})

export default modalSilce.reducer
export const {handaleModal}=modalSilce.actions