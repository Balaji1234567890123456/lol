// Write your JS code here
import './index.css'
import {Component} from 'react'
class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }
  componentDidMount() {
    this.getHeader()
  }
  getHeader = async event => {
    event.preventDefault()
    const a = 'https://apis.ccbp.in/login'
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const b = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const c = await fetch(a, b)
    const d = await c.json()
    console.log(d)
    if (d.ok === true) {
      this.onSubmission()
    }
  }

  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  render() {
    const {userName, password} = this.state
    return (
      <div className="lol">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" />
        <form onSubmit={this.getHeader}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="pol"
          />
          <div className="oop">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={userName}
              onChange={this.onChangeUser}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    )
  }
}
export default LoginForm
