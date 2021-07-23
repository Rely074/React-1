import './App.css';
import React from "react";

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
                    <input className={"app__form-input"} placeholder="Введите сообщение" value={InputValue} onChange={MessageChange}/>
                    <button className={"app__button"}>Отправить</button>
                </form>
                <div className={"Message__border"}>
                    {MessageList.map((message,index) => (
                        <Message key={index} text={message.text} author={message.author}/>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
