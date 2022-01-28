import { useState, useEffect} from 'react'
import { peerActions } from '../store/peerSlice';
import { useSelector, useDispatch } from 'react-redux';

const Connections = () => {

   
    const [connections, setConnections] = useState(useSelector(state => state.peers.peers));
    const [newConnection, setNewConnection] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(peerActions.AddNewPeer(newConnection))
    }


    return(
        <> 
        <ul>
            {
                connections.map(c => <li>{c.id}</li>)
            }
        </ul>

        <form onSubmit={onSubmitHandler}>
            <label>New Connection ID:</label>
             <input type="text" onChange={(e)=> setNewConnection(e.target.value)}/>
             <button type="submit">Add new connection</button>
        </form>
           
        </>
       
    )
}
export default Connections;