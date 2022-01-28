import { createSlice } from "@reduxjs/toolkit";
import Peer from "peerjs";

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const peerSlice = createSlice({
    name: "peers",
    initialState: {
        peers: [], 
        peer : new Peer(makeid(5)),
        connections : [],
        messages : [],
    },

    reducers: {
        AddNewPeer(state, action){
            state.peers=[...state.peers, action.payload]
        },
        AddNewConnection(state, action){
            state.connections=[...state.connections, action.payload]
        },
        AddNewMessage(state, action){
            state.messages=[...state.messages, action.payload]
        },
        
    }
})

export const peerActions = peerSlice.actions;
export default peerSlice;

