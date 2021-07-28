import './App.css';
import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Chat from "../src/components/Chat/Chat"


function App() {
    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Чат 1' },
        { id: 'chat2', name: 'Чат 2' },
        { id: 'chat3', name: 'Чат 3' },
    ])
    const [currentChat, setCurrentChat] = React.useState(chats[0])
    const handleChangeChat = (chat) => setCurrentChat(chat)


    return (
        <div className="App">
            <header className="App-header">
                <div className={"chatMenu"}>
                    <List className="app__sidebar" subheader="Список чатов">
                        {chats.map((chat) => (
                            <ListItem
                                button
                                key={chat.id}
                                selected={chat.id === currentChat.id}
                                onClick={() => handleChangeChat(chat)}
                            >
                                {chat.name}
                            </ListItem>
                        ))}
                    </List>
                </div>
                {/*<Chat />*/}
            </header>
        </div>
    );
}

export default App;
