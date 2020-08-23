import React, { Component } from 'react';
import './ItemProduct.css';
import { connect } from 'react-redux';

class ItemProduct extends Component {

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    render() {
        return (
            <div itemProp="itemListElement" itemScope="itemscope" className="col-xs-12 col-sm-4 col-md-3 mb-50">
                <div className="item-product-thumb">
                    <div className="product-inner text-left">
                        <div className="product-image">
                            <a href={"/product-detail/id=" + this.props.MaSanPham}>
                                <img src={require('../../images/'+this.props.HinhURL)} alt="GUITAR CLASSIC SV-C2"/>
                            </a>
                        </div>
                        <div className="product-content">
                            <a href={"/product-detail/id=" + this.props.MaSanPham} className="product-title" itemProp="url" title={this.props.children}>  {/* To Detail Page */}
                                <span className="name-product" onClick={() => this.callApiSaveDetailProduct}>{this.props.children}</span>
                            </a>
                            <p className="vue-line-clamp" style={{ fontSize: '14px', WebkitLineClamp: 2 }}>{this.props.MoTa}</p>
                            <div itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer" className="product-price">
                                <span itemProp="priceCurrency" content="VND" />
                                <span itemProp="price" content={1200000} className="product-price-new">
                                    <span>{this.formatNumber(this.props.GiaSanPham)} VNĐ</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(ItemProduct);