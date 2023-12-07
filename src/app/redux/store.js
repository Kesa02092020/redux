import {configureStore} from '@reduxjs/toolkit';
//import { changeColor } from './changeColor';
import { todoslice } from './todoslice';

const store = configureStore({
    reducer:{
        //'changeColor' : changeColor.reducer,
        Todo:todoslice.reducer
    }
})
export default store;

console.log(store.getState())