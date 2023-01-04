import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';

//import obj to make api call
import { shazamCoreApi } from './services/shazamCore';

//boilerplate code for redux configuration
export const store = configureStore({
  reducer: {
    //reducer api config
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  //default middleware 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
