import { useState, useEffect} from 'react'
import { peerActions } from '../store/peerSlice';
import { useSelector, useDispatch } from 'react-redux';

const Connections = ({peer}) => {

   
    const connections = useSelector(state => state.peers.peers);
    const [newConnection, setNewConnection] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(peerActions.AddNewPeer(newConnection))
    }

    const ConnectHandler = (id) => {
        const conn = peer.connect(id)
        dispatch(peerActions.AddNewConnection(conn))
    }


    return(
        <> 
        <ul>
            {connections.map(c => <li key={c}>
                <div>
                    {c}
                    <button onClick={() => ConnectHandler(c)} >Connect</button>
                </div>
            </li>)}
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