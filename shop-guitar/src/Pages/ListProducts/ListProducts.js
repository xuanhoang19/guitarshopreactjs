import React, { Component } from 'react';
import ItemProduct from '../../components/ItemProduct/ItemProduct';
import {connect} from 'react-redux';
import {actFetchProductsRequest} from '../../actions/index';

class ListProducts extends Component {

    componentWillMount(){
        this.callApiFetchProducts();
    }

    callApiFetchProducts() {
        let infor = { productType: this.props.match.params.productType, manuFacturer: this.props.match.params.manuFacturer };

        var { dispatch } = this.props;
        dispatch(actFetchProductsRequest(infor));
    }

    showProducts() {
        var product = [];
        product = this.props.rdcProducts.map((item, key) => {
            return <ItemProduct key={key} MaSanPham={item.MaSanPham} HinhURL={item.HinhURL} GiaSanPham={item.GiaSanPham} MoTa={item.MoTa}>{item.TenSanPham}</ItemProduct>
        });
        return product;
    }

    render() {
        console.log(this.props.rdcProducts);
        //const isDetail = this.props.rdcDetailProduct;
        return (
            <div className="HomePage">
                <div className="jumbotron text-center">
                    <h2>Sản Phẩm</h2>
                    <p>Ghi chú gì đó chả biết nữa !</p>
                </div>
                <div className="container">
                    <div className="row">
                        {this.showProducts()}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return { rdcProducts : state.rdcProducts }
})(ListProducts);