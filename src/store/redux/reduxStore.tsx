import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/guest-message-slice";

const store = configureStore({
  reducer: {
    guest_messages: messageReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;