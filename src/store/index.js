import {configureStore } from "@reduxjs/toolkit";
import peerSlice from "./peerSlice";

const store = configureStore({
    reducer: {peers: peerSlice.reducer}
})

export default store;



