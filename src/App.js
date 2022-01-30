import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {peerActions} from './store/peerSlice';
import Connections from './components/Connections';
import MessageBoard from './components/MessageBoard';
import Peer from 'peerjs'


function App() {

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

  const dispatch = useDispatch();
  const peer = new Peer(makeid(5))

  useEffect(()=> {
    dispatch(peerActions.SetPeerID(peer.id))
  }, [])

  return (
  <div>
    <h1>Peer ID: {peer.id}</h1>
    <Connections peer={peer}/>
  </div>
  );
}

export default App;
