import React from "react";
import {TextField} from "@material-ui/core";
import Input from "../input/input";


const Message =(props) => {
    return <p className={"App-message"}>{props.author}: {props.text}</p>
}

const Authors ={
    Denis:"Denis",
    BOT:"Bot",
}


const Chat = (props) => {
    const [messageList, setmessageList] = React.useState([])
    const [InputValue, setInputValue] = React.useState('')

    React.useEffect(()=>{
        if(messageList.length &&
            messageList[messageList.length-1].author !== Authors.BOT) {
            setTimeout(()=>{
                setmessageList((currentmessageList) =>
                    [...currentmessageList, {author:Authors.BOT, text:"Я Бот"},
                    ])
            },1500)
        }
    },[messageList])

    const MessageChange = (e) =>{
        setInputValue(e.target.value)
    }

    const MessageSubmit = (e) => {
        e.preventDefault()
        setmessageList((currentmessageList) =>
            [...currentmessageList, {author:Authors.Denis, text:InputValue},
            ])
        setInputValue("")
    }

    return (
        <div className="chat">
            {/*<Message text ={"Chat"}  />*/}
            <div className={"Message__border"}>
                {messageList.map((message, index) => (
                    <Message key={index} text={message.text} author={message.author}/>
                ))}
            </div>
            <Input/>
        </div>
)
};
export default Chat;