import React from "react";
import {Button, TextField} from "@material-ui/core";

const Authors ={
    Denis:"Denis",
    BOT:"Bot",
}

const Input = (props) => {
    const {MessageSubmit} = props
    const [InputValue, setInputValue] = React.useState('')
    const [messageList, setmessageList] = React.useState([])

    const MessageChange = (e) =>{
        setInputValue(e.target.value)
    }



    return (
        <div className="Input">
            <form className="app__form" onSubmit={MessageSubmit}>
                <TextField id="standard-secondary" label="Ваше сообщение" color="secondary" autoFocus
                           className={"app__form-input"} placeholder="Введите сообщение" value={InputValue}
                           onChange={MessageChange}/>
                <Button variant="contained" color="primary">Отправить</Button>
            </form>
        </div>

    )
}

export default Input;