import axios from 'axios'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Header } from './components/Header'
import { CartPage } from './pages/CartPage'
import { HomePage } from './pages/HomePage'

function App() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const  getData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/db.json')
                const {pizzas} = response.data
        
                setData(pizzas)
            } catch (e) {
                throw new Error(e)
            }
        }
        getData()
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" render={() => <HomePage data={data} />} />
                    <Route exact path="/cart" component={CartPage} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}

export default App
