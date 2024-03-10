import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <Link to="/">
          <h1>Anurupa</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/products" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-image"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default withRouter(Header)
