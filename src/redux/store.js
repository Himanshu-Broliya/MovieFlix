import {configureStore} from '@reduxjs/toolkit'
import CheckBoxSlice from './CheckBoxSlice';



const store = configureStore({
    reducer:{
        checkbox : CheckBoxSlice,
    }
})

export default store;