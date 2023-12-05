import {configureStore} from '@reduxjs/toolkit';
import { changeColor } from './changeColor';

const store = configureStore({
    reducer:{
        'changeColor' : changeColor.reducer
    }
})
export default store;

