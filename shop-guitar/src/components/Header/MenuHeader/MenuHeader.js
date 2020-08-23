import React, { Component } from 'react';
import {actFetchUsersRequest} from '../../../actions/index';
import {connect} from 'react-redux';

class MenuHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false,
        }
        this.getUser = this.getUser.bind(this);
        this.logout = this.logout.bind(this);
    }


    componentWillMount(){
        if(sessionStorage.getItem("userData")){
            this.getUser();
            this.setState({redirectToReferrer : true });
        }
    }

    getUser(){
        let data = JSON.parse(sessionStorage.getItem("userData"));
        let idUser = {idUser : data.userData.MaTaiKhoan};
        
        var {dispatch} =this.props;
        dispatch(actFetchUsersRequest(idUser));
    }
    
    logout(){
        sessionStorage.setItem("userData", '');
        sessionStorage.removeItem('userData');
        this.setState({redirectToReferrer : false});
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href={`/`}>WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/">Home</a>
                        </li>
                        <li><a href={`/`}>Page 1</a></li>
                        <li><a href={`/`}>Page 2</a></li>
                    </ul>
                    <form className="navbar-form navbar-left" action="/action_page.php">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>

                    {
                        this.state.redirectToReferrer ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><a><span className="glyphicon glyphicon-user"></span> Hello, {this.props.rdcUser.map(item=>item.TenHienThi)}</a></li>
                                <li onClick={this.logout}><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Đăng Xuất</a></li>
                            </ul>
                        ) : (
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                    <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                </ul>
                            )
                    }
                </div>
            </nav >
        );
    }
}

export default connect(function(state){
    return { rdcUser : state.rdcUser }
}) (MenuHeader);