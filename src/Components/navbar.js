import {Component} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Login from './login'
import SignUp from './signup'
class Navbar extends Component{
  render(){
    return (
        <Router>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Home</a>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item "><a className="nav-link" href="/signup">Đăng Kí</a></li>
                    <li className="list-group-item"><a className="nav-link" href="/login">Đăng Nhập</a></li>
                </ul>
            </nav>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp}/>
        </Router>
        

    );
  }
}
export default Navbar
