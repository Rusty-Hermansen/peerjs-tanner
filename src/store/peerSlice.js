import { createSlice } from "@reduxjs/toolkit";
import Peer from "peerjs";

const peerSlice = createSlice({
    name: "peers",
    initialState: {
        peers: [], 
        peer : "",
        connections : [],
        messages : [],
    },

    reducers: {
        AddNewPeer(state, action){
            state.peers=[...state.peers, action.payload]
            console.log(state.peers)
        },
        AddNewConnection(state, action){
            state.connections=[...state.connections, action.payload.peer]
            console.log(state.connections)
        },
        AddNewMessage(state, action){
            state.messages=[...state.messages, action.payload]
        },
        SetPeerID(state, action) {
            state.peer = action.payload
            console.log(state.peer)
        }
        
    }
})

export const peerActions = peerSlice.actions;
export default peerSlice;

