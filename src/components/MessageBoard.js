import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const MessageBoard = () => { 
    const [peer, setPeer]= useState(useSelector(state => state.peers.peer))
    const [messages, setMessages]= useState(useSelector(state=>state.peers.messages));


    return(
        <ul>
        {
            messages.map(m => <li>{m}</li>)
        }
    </ul>

    )

}


export default MessageBoard;