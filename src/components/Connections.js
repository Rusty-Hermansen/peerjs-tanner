import { useState, useEffect } from 'react'
import { peerActions } from '../store/peerSlice';
import { useSelector, useDispatch } from 'react-redux';

const Connections = ({ peer }) => {

    const [connections, SetConnections] = useState([]);
    const [newConnection, setNewConnection] = useState("");
    const [messages, SetMessages] = useState([]);
    const [message, SetMessage] = useState();
    const [isFowarding, SetIsForwarding] = useState(false);

    const [recipients, setRecipients]= useState("");
    let counter = 0;

    peer.on("connection", (conn) => {
        console.log(`Recieved connection from: ${conn.peer}`)
        SetConnections([...connections, conn])
        conn.on('data', (data) => {
            console.log(`Received message: ${data}`)
            SetMessages([...messages, data])
        })
    });

    // useEffect(() => {
    //     connections.forEach(c => {
    //         c.on('data', (data) => {
    //             console.log(`Received message: ${data}`)
    //             SetMessages([...messages, `${data}`])
    //         })
    //     })
    // },[connections])

    const onSubmitConnectionHandler = (e) => {
        e.preventDefault();
        const conn = peer.connect(newConnection)
        conn.on('data', (data)=>{
            SetMessages([...messages, `${conn.peer}: ${data}`])
        })
        SetConnections([...connections, conn])
    }

    const onSubmitMessageHandler = (e) => {
        e.preventDefault();
        if(recipients.trim().length >0){
            const trim = recipients.split(',')
            trim.forEach(t => connections[t-1].send(message))
        }
        else{
            connections.forEach(c=> c.send(message))
        }
        SetMessages([...messages, `${peer.id}: ${message}`])
        connections.forEach(c => c.send(`${peer.id}: ${message}`));

    }

    const onSubmitForwardHandler = (e) => {
        e.preventDefault();

    }
    
    const ForwardHandler = (message) => {
        if(recipients.trim().length >0){
            const trim = recipients.split(',')
            trim.forEach(t => connections[t-1].send(message))
        }
        else{
            connections.forEach(c=> c.send(message))
        };
    }
    
    const Forward = (message) => {
        // return(
        //     <form onSubmit={onSubmitForwardHandler}>
        //         <input type="hidden" value={message} />
        //         <label>ID to Forward to:</label>
        //         <input type="text" onChange={(e) => SetForwardee(e.target.value)} />
        //     </form>
        // )
    }
    const recipientHandler = (e) => {
        setRecipients(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmitConnectionHandler}>
                <label>New Connection ID:</label>
                <input type="text" onChange={(e) => setNewConnection(e.target.value)} />
                <button type="submit">Add new connection</button>
            </form>
            <ul>
                {connections.map(c => <li key={c.peer}>
                    <div>
                        {c.peer}
                    </div>
                </li>)}
            </ul>
            <div>
                <label>Enter Recipients:</label>
                <input type="text" value={recipients} onChange={recipientHandler}/>
                <p>This message will be sent to the following recipients: {recipients.trim().length > 0 ? recipients: "All"}</p>
            </div>
            <div>
                <form onSubmit={onSubmitMessageHandler}>
                    <label>Enter your message here:</label>
                    <input onChange={(e) => SetMessage(e.target.value)} type="text" />
                    <button type="submit">Send Message!</button>
                </form>
                <ul>
                    <div>
                       
                             {messages.map((m, i) =><span>
                                 <li key={i}>{i+1}) {m}</li>
                                 <button onClick={() => ForwardHandler(m)}>Forward</button>
                             </span>  
                             )}
                     
                        
                     
                    </div>
                </ul>
            </div>
        </>

    )
}
export default Connections;