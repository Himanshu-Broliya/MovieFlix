import {createSlice} from '@reduxjs/toolkit'

const CheckBoxSlice = createSlice({
    name:"checkbox",
    initialState:{
        checkBoxValue:null,
        newMovies:null
    },
    reducers:{
        getCheckBoxValue: (state,action) =>{
            state.checkBoxValue = action.payload;
        },
        getNewMovies: (state,action) =>{
            state.newMovies = action.payload;
        }
    }
})

export const {getCheckBoxValue, getNewMovies} = CheckBoxSlice.actions;

export default CheckBoxSlice.reducer;