import {Route, Switch, Redirect} from 'react-router-dom'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/products/:id" component={ProductItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
