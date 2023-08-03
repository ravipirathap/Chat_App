 import {MultiChatWindow,MultiChatSocket ,useMultiChatLogic} from "react-chat-engine-advanced"
 
 
 const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic('fcac444e-362b-4040-b547-e2605f0c92ca',props.user.username,props.user.secret);
    return <div style = {{height:"100vh"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height:"100vh"}}/>
    </div>
 }

 export default ChatsPage