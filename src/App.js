import './App.css';
import React from "react";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const Message =(props) => {
    return <p className={"App-message"}>{props.author}: {props.text}</p>
}

const Authors ={
    Denis:"Denis",
    BOT:"Bot",
}

function App() {
    const [MessageList, setMessageList] = React.useState([])
    const [InputValue, setInputValue] = React.useState('')

    React.useEffect(()=>{
        if(MessageList.length &&
            MessageList[MessageList.length-1].author !== Authors.BOT) {
            setTimeout(()=>{
                setMessageList((currentMessageList) =>
                    [...currentMessageList, {author:Authors.BOT, text:"Я Бот"},
                    ])
            },1500)
        }
    },[MessageList])

    const MessageChange = (e) =>{
        setInputValue(e.target.value)
    }

    const MessageSubmit = (e) => {
        e.preventDefault()
        setMessageList((currentMessageList) =>
            [...currentMessageList, {author:Authors.Denis, text:InputValue},
            ])
        setInputValue("")
    }

    return (
        <div className="App">
            <header className="App-header">
                {/*<Message text ={"Chat"}  />*/}
                <form className="app__form" onSubmit={MessageSubmit}>
                    <TextField id="standard-secondary" label="Ваше сообщение" color="secondary" autoFocus className={"app__form-input"} placeholder="Введите сообщение" value={InputValue} onChange={MessageChange}/>
                    <Button variant="contained" color="primary" >Отправить</Button>
                </form>
                <div className={"Message__border"}>
                    {MessageList.map((message,index) => (
                        <Message key={index} text={message.text} author={message.author}/>
                    ))}
                </div>

                <div className={"chatMenu"}>
                    <List className={"messageList"}>
                        <ListItem className={"chatFirst"} id={"1"}>
                            Чат 1
                        </ListItem>
                        <ListItem className={"chatSecond"} id={"2"}>
                            Чат 2
                        </ListItem>
                        <ListItem className={"chatThree"} id={"3"}>
                            Чат 3
                        </ListItem>
                    </List>
                </div>

            </header>
        </div>
    );
}

export default App;
