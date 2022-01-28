import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {peerActions} from './store/peerSlice';
import Connections from './components/Connections';
import MessageBoard from './components/MessageBoard';
import Messenger from './components/Messenger'


function App() {
  const dispatch = useDispatch();
  const [peer, setPeer]= useState(useSelector(state => state.peers.peer));
  const [connections, setConnections]= useState(useSelector(state=>state.peers.connections));

  peer.on("connection", (con)=>{
    dispatch(peerActions.AddNewConnection(con))
  })

  connections.forEach(c => {
    c.on('data', (message)=>{
      dispatch(peerActions.AddNewMessage(message))
    })
  });


 


  return (
  <div>
    <Connections/>
    <MessageBoard/>
    <Messenger/>
  </div>
  );
}

export default App;
