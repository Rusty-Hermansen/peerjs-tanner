import { useSelector } from "react-redux";
import { useState } from "react";


const MessageBoard = () => { 

    const messages = useSelector(state=>state.peers.messages);
    let counter = 0;

    return(
        <ul>
        {
            messages.map(m => <li key={counter+=1}>{m}</li>)
        }
    </ul>

    )

}


export default MessageBoard;