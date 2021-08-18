import React from "react";
import {Button, TextField} from "@material-ui/core";

const Input = (props) => {
    const {onSubmit} = props
    const [inputValue, setInputValue] = React.useState('')

    const messageChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
        }
    }

    return (
        <div className="Input">
            <form className="app__form" onSubmit={handleSubmit}>
                <TextField id="standard-secondary" label="Ваше сообщение" color="secondary" autoFocus
                           className={"app__form-input"} placeholder="Введите сообщение" value={inputValue}
                           onChange={messageChange}/>
                <button variant="contained" color="primary">Отправить</button>
            </form>
        </div>

    )
}

export default Input;