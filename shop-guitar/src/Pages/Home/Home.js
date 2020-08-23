import React, { Component } from 'react';
import ItemProduct from '../../components/ItemProduct/ItemProduct';
import { connect } from 'react-redux';
import { actFetchProductsSellFastRequest, actFetchNewProductstRequest } from '../../actions/index';

class Home extends Component {

    componentDidMount() {
        var { dispatch } = this.props;
        dispatch(actFetchProductsSellFastRequest());
        dispatch(actFetchNewProductstRequest());
    }

    showProductsSellFast() {
        var productSellFast = [];
        productSellFast = this.props.rdcProductsSellFast.map((item, key) => {
            return <ItemProduct key={key} MaSanPham={item.MaSanPham} HinhURL={item.HinhURL} GiaSanPham={item.GiaSanPham} MoTa={item.MoTa}>{item.TenSanPham}</ItemProduct>
        });
        return productSellFast;
    }

    showNewProducts() {
        var newProducts = [];
        newProducts = this.props.rdcNewProducts.map((item, key) => {
            return <ItemProduct key={key} MaSanPham={item.MaSanPham} HinhURL={item.HinhURL} GiaSanPham={item.GiaSanPham} MoTa={item.MoTa}>{item.TenSanPham}</ItemProduct>
        });
        return newProducts;
    }

    render() {
        return (
            <div className="HomePage">
                <div className="jumbotron text-center">
                    <h2>Sản Phẩm Bán Chạy</h2>
                    <p>Ghi chú gì đó chả biết nữa !</p>
                </div>
                <div className="container">
                    <div className="row">
                        {this.showProductsSellFast()}
                    </div>
                </div>

                <div className="jumbotron text-center">
                    <h2>Sản Phẩm Bán Nhanh</h2>
                    <p>Ghi chú gì đó chả biết nữa !</p>
                </div>
                <div className="container">
                    <div className="row">
                        {this.showNewProducts()}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return { rdcProductsSellFast: state.rdcProductsSellFast,
             rdcNewProducts : state.rdcNewProducts }
})(Home);