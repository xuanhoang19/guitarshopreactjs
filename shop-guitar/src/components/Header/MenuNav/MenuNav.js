import React, { Component } from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { actFetchProductsTypeRequest } from '../../../actions/index';

class MenuNav extends Component {

    componentDidMount() {
        var { dispatch } = this.props;
        dispatch(actFetchProductsTypeRequest());
    }

    showProductType(){
       var data = [];
       data = this.props.rdcProductsType.map((item, key) => {
            return <Nav key={key} idProductType = {item.MaLoaiSanPham}>{item.TenLoaiSanPham}</Nav>
       })
       return data;
    }

    render() {
        return (
            <div className="MenuNav">
                <div className="Menu-Logo">
                    <a href="/" className="router-link-exact-active router-link-active">
                        <img alt="" src="https://www.guitarsinhvien.vn/upload/guitarsinhvien.iamsale.vn/anh-thuong-hieu/images/2019-07/7030_1563509798.jpg" title="" height="70px" />
                    </a>
                </div>
                <div className="navbar">
                    {
                        this.showProductType()
                    }
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return { rdcProductsType: state.rdcProductsType }
})(MenuNav);