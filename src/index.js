import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './slices'

const middleware = getDefaultMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)
