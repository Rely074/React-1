import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import App from './components/App/App'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
                <BrowserRouter>
                    <App />

                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
