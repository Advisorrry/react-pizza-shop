import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Header } from './components/Header'
import { CartPage } from './pages/CartPage'
import { HomePage } from './pages/HomePage'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/cart" component={CartPage} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}

export default App
