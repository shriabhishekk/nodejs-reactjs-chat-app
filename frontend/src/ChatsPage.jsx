import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps= useMultiChatLogic(
        'b1b791ab-5211-4712-a5a3-88c2b0c5b73b',
    props.user.username, 
    props.user.secret);
    

return (
    <div style={{ height: "100vh"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {... chatProps} style={{height:'100%'}}/>
    </div>
)
}

export default ChatsPage