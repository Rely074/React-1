// import logo from './logo.svg';
import './App.css';


const Message =(props) => {
    return <p className={"App-message"}>{props.text}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Message text ={"Текст компонента меседж"}  />
      </header>
    </div>
  );
}

export default App;
