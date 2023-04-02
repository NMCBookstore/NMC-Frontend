import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice';
import prodDetailSlice from '../features/prodDetailSlice';

const store = configureStore({
    reducer: { 
        user: authSlice,
        prod: prodDetailSlice
      },
})

export default store;