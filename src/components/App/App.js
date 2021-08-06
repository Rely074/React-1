import './App.css';
import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../../actions/profile";
import Input from "../Input/Input";


function App() {
    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Чат 1' },
        { id: 'chat2', name: 'Чат 2' },
        { id: 'chat3', name: 'Чат 3' },
    ])

    const dispatch = useDispatch()
    const {name,age} = useSelector(state => state.profile)

    const [currentChat, setCurrentChat] = React.useState(chats[0])
    const handleChangeChat = (chat) => setCurrentChat(chat)

    const handleNameSubmit = (newName) => {
        console.log("call action with", newName)
        dispatch(changeName(newName))
    }


    return (
        <>
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

                    <div className="bordered">
                        <p><b>Name:</b>{name}</p>
                        <p><b>Age:</b>{age}</p>
                        <Input onSubmit={handleNameSubmit}/>
                    </div>
                    {/*<Chat />*/}
                </header>
            </div>
        </>
    );
}

export default App;
