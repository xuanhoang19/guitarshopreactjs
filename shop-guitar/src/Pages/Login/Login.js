import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
import {PostData} from '../../services/PostData';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        if(this.state.username && this.state.password){
            PostData('login', this.state).then((result) => {
                if(result.userData){
                    sessionStorage.setItem('userData', JSON.stringify(result));
                    this.setState({redirectToReferrer : true});
                }else{
                    alert('Tài Khoản Hoặc Mật Khẩu Không Đúng');
                }
            })
        }
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/'} />)
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/'} />)
        }

        return (
            // <form className="form-signin">
            <div className="form-signin">
                <img className="mb-4" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/23559458_1898729183776173_4425021109365270337_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=8DB-DE-o4Y0AX8rhrIj&_nc_ht=scontent.fsgn4-1.fna&oh=4b8c3002075cb77bb81bef99daad580a&oe=5E977934" alt="" width={72} height={72} />
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <input type="text" name="username" id="inputEmail" className="form-control" placeholder="Account" onChange={this.onChange}/>
                <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.onChange}/>
                <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign in" onClick={this.login} />
                <a href="/signup">Signup ?</a>
                </div>
            // </form>
        );
    }
}

export default Login;