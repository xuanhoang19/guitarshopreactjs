import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from '../Pages/Home/Home';
import NotFoundPage from '../Pages/NotFound/NotFound';
import ListProductPage from '../Pages/ListProducts/ListProducts';
import DetailProductPage from '../Pages/Detail/Detail';
import LoginPage from '../Pages/Login/Login';
import SignupPage from '../Pages/Signup/Signup';
import CartPage from '../Pages/Cart/Cart';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/product-list/productType=:productType&&manuFacturer=:manuFacturer" component={ListProductPage} />
                    <Route path="/product-detail/id=:id" component = {DetailProductPage} />
                    <Route path="/login" component = {LoginPage} />
                    <Route path="/signup" component = {SignupPage} />
                    <Route path="/cart" component = {CartPage} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;