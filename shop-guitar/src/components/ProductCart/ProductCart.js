import React, { Component } from 'react';

class ProductCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
        };
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    minus() {
        if (this.state.amount > 0) {
            this.setState({ amount: this.state.amount - 1 });
            setTimeout(() => {
                this.props.moneyProduct(this.props.MaSanPham, -this.props.GiaSanPham, this.state.amount);
            }, 1000);
        }
    }

    plus() {
        this.setState({ amount: this.state.amount + 1 });
        setTimeout(() => {
            this.props.moneyProduct(this.props.MaSanPham, this.props.GiaSanPham, this.state.amount);
        }, 1000);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.moneyProduct(this.props.MaSanPham, this.props.GiaSanPham, this.state.amount);
        }, 1000);
    }

    render() {
        return (
            <tr data-index={0} className="item">
                <td data-show="true" data-title="Sản phẩm: " className="td-name">
                    <div className="td-name-inner">
                        <div className="td-name-inner-image">
                            <img height="40px" src={require('../../images/' + this.props.HinhURL)} alt="" /> {/*ImgP*/}
                        </div>
                        <div className="td-name-inner-name">
                            <a href="/guitar-acoustic-go-nguyen-tam-gia-sinh-vien" style={{ color: 'rgb(85, 85, 85)' }}>
                                {/* ĐÀN GUITAR ACOUSTIC SV-A2 */}
                                {this.props.children}
                            </a>
                        </div>
                    </div>
                </td>
                <td data-show="true" data-title="Giá: " className="td-price">
                    <span>{this.formatNumber(this.props.GiaSanPham)}<small> VND</small></span>
                </td>
                <td data-show="true" data-title="Số lượng: " className="td-quantity">
                    <div className="col-xs-4"></div>
                    <div className="input-group col-xs-4">
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default" onClick={this.minus}>
                                <i className=" glyphicon-minus"></i>
                            </button>
                        </span>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Số lượng" value={this.state.amount} />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default" onClick={this.plus}>
                                <i className=" glyphicon-plus" />
                            </button>
                        </span>
                    </div>
                </td>
                <td data-show="true" data-title="Thành tiền: " className="td-total">
                        {this.formatNumber(this.state.amount * this.props.GiaSanPham)}
                    <small> VND</small>
                </td>
                <td data-show="true" data-title className="td-action">
                    <a href="#" />
                </td>
            </tr>
        );
    }
}

export default ProductCart;