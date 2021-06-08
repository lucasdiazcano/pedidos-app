import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Orders from './pages/pedido/orders'
import Cocina from './pages/cocina/cocina'
import Carta from './pages/carta/carta'

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' >
                    <Login />
                </Route>

                <Route path='/carta'>
                    <Carta />
                </Route>

                <Route path='/cocina'>
                    <Cocina />
                </Route>

                <Route path='/pedido'>
                    <Orders />
                </Route>

                <Route >
                    <h1>Ruta 404</h1>
                </Route>
            </Switch>

        </Router>
    )
}

export default routes
