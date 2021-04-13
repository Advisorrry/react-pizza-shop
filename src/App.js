
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Header } from './components/Header'
import { useFetchPizzas } from './hooks/useFetchPizzas'
import { CartPage } from './pages/CartPage'
import { HomePage } from './pages/HomePage'



function App() {
    const fetchPizzas = useFetchPizzas()
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" render={() => <HomePage data={fetchPizzas.items} />} />
                    <Route exact path="/cart" component={CartPage} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}

export default App
