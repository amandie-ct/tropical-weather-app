import {configureStore } from '@reduxjs/toolkit';
import { setCityDets } from './cityDets';

export default configureStore({
    setDetails: {
        setDets: setCityDets
    }
});