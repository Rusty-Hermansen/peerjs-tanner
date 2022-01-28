import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peerActions } from '../store/peerSlice';


const Messenger = () => {
    const dispatch = useDispatch();
    const [connections, setConnections] = useState(useSelector(state=>state.peers.messages))
    const [message, setMessage] = useState();
    const [peer, setPeer] = useState(useSelector(state=>state.peers.peer.id))

      const onSubmitHandler= (e) => {
          e.preventDefault();
        dispatch(peerActions.AddNewMessage(message))
        connections.forEach(c => c.send(message.concat(":", peer.id)));
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Enter your message here:</label>
                <input onChange={(e)=> setMessage(e.target.value)} type="text"/>
                <button type="submit">Send Message!</button>
            </form>
        </div>
    )
}

export default Messenger;