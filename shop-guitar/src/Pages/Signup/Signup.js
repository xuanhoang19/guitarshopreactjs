import React, { Component } from 'react';
import './Signup.css';
import {PostData} from '../../services/PostData';
import { Redirect } from 'react-router-dom';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            address: '',
            phone: '',
            gmail: '',
            redirectToReferrer: false
        };
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup(){
        if(this.state.name && this.state.username && this.state.password && this.state.gmail && this.state.phone && this.state.address){
            PostData('signup', this.state).then((result) => {
                if(result.userData) {
                    console.log(result);
                    this.setState({redirectToReferrer : true});
                    alert('Đăng ký thành công!');
                }else{
                    alert('Đăng ký thất bại: ' + result.error);
                }
            }).catch((result) => {
                alert('Đăng ký thất bại: ' + result);
            })
        }
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }

        return (
            <form className="form-signup">
                <img className="mb-4" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/23559458_1898729183776173_4425021109365270337_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=8DB-DE-o4Y0AX8rhrIj&_nc_ht=scontent.fsgn4-1.fna&oh=4b8c3002075cb77bb81bef99daad580a&oe=5E977934" alt="" width={72} height={72} />
                <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                <input type="name" id="inputName" name="name" className="form-control" placeholder="Name" required onChange={this.onChange} />
                <input type="account" id="inputEmail" name="username" className="form-control" placeholder="Account" required onChange={this.onChange} />
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required onChange={this.onChange} />
                <input type="address" id="inputAddress" name="address" className="form-control" placeholder="Address" required onChange={this.onChange} />
                <input type="phone" id="inputPhone" name="phone" className="form-control" placeholder="Phone" required onChange={this.onChange} />
                <input type="gmail" id="inputGmail" name="gmail" className="form-control" placeholder="Gmail" required onChange={this.onChange} />
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signup}>Sign up</button>
                <a href="/login">Login ?</a>
            </form>
        );
    }
}

export default Signup;