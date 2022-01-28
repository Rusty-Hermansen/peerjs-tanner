import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peerActions } from '../store/peerSlice';


const Messenger = ({peer}) => {
    const dispatch = useDispatch();
    const connections = useSelector(state=>state.peers.messages)
    const [message, setMessage] = useState();

      const onSubmitHandler= (e) => {
        e.preventDefault();
        dispatch(peerActions.AddNewMessage(message))
        connections.forEach(c => c.send(`${peer.id}: ${message}`));
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