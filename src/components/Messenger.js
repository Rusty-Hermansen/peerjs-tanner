import {useState} from 'react';
import MessageBoard from './MessageBoard';


const Messenger = (props) => {
    const [message, setMessage] = useState();

      const onSubmitHandler= (e) => {
        e.preventDefault();
        props.SetMessages([...props.messages, message])
        props.connections.forEach(c => c.send(`${props.peer.id}: ${message}`));
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Enter your message here:</label>
                <input onChange={(e)=> setMessage(e.target.value)} type="text"/>
                <button type="submit">Send Message!</button>
            </form>
            <MessageBoard messages={props.messages}/>
            
        </div>
    )
}

export default Messenger;