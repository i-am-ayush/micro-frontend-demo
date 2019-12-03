import React from 'react'
import './login.css'
class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'ayush',
            password: 'ayu'
        }
    }
     goto(title, href) {
        window.history.pushState({}, title, href);
      }
    submitLoginDetails = () => {
        const {key1}=this.props;
        console.log(key1);
        let userName = document.getElementById('username').value
        let Password = document.getElementById('password').value
        const { username, password } = this.state
        username === userName && key1=="1234" && password === Password ? 
        alert('login success') : alert('login failure')
        this.goto('tryout1 app', '/18react18')

        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitLoginDetails}>
                    <br /><span className="username">username : </span><input type='text' id='username' />
                    <br /><span className="username">password : </span><input type='password' id='password' />
                    <br /><input type='submit' />
                </form>
                {/* <div className="login">
                    login
                </div>
                <div className="register">
                    register
                </div> */}

            </div>
            
        )
    }
}
export default login