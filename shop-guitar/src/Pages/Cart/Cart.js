import React, { Component, useCallback } from 'react';
import './Cart.css';
import { connect } from 'react-redux';
import { PostData } from '../../services/PostData';
import ProductCart from '../../components/ProductCart/ProductCart';
import { keyTheOrder, keyTheOrderDetail } from '../../Order/CreateKey';
import {postOrder} from '../../Order/Order';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listIDProduct: [],
            listProduct: [],
            islistProduct: false,
            totalMoney: 0,
        }
        this.getListIDProduct = this.getListIDProduct.bind(this);
        this.getListProduct = this.getListProduct.bind(this);
        this.showProduct = this.showProduct.bind(this);
        this.moneyProduct = this.moneyProduct.bind(this);
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    componentWillMount() {
        this.getListIDProduct();

        setTimeout(() => {
            this.getListProduct();
        }, 1000);
    }

    getListIDProduct() {
        if (sessionStorage.getItem("arrIDCart")) {
            this.setState({
                islistProduct: true,
                listIDProduct: JSON.parse(sessionStorage.getItem("arrIDCart"))
            });
        }
    }

    getListProduct() {
        this.state.listIDProduct.map((item, key) => {
            var idDetailProduct = { idDetailProduct: item };
            PostData('detailProduct', idDetailProduct).then((result) => {
                this.setState({ listProduct: this.state.listProduct.concat(result.feedData) })
            });
        })
    }

    moneyProduct(id, money, amount) {
        this.setState({ totalMoney: parseInt(this.state.totalMoney, 10) + parseInt(money, 10) })

        let listProductTemp = [...this.state.listProduct];

        listProductTemp.map((item, key) => {
            if(item.MaSanPham == id) {
                let productTemp = {...item, ["SoLuong"]: '' + amount};
                item = productTemp;
                listProductTemp[key] = item;
            }
        });

        this.setState({
            listProduct : listProductTemp
        })
    }

    showProduct() {
        var data = [];
        data = this.state.listProduct.map((item, key) => {
            return <ProductCart key={key} MaSanPham={item.MaSanPham} HinhURL={item.HinhURL} GiaSanPham={item.GiaSanPham} totalmoney={this.state.totalMoney} moneyProduct={this.moneyProduct}>{item.TenSanPham}</ProductCart>;
        });
        return data;
    }

    pay = () => {
        postOrder(this.state.listProduct, this.state.totalMoney);

        sessionStorage.removeItem("arrIDCart");
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <table className="table table-cart">
                            <thead>
                                <tr>
                                    <th className="td-name">TÊN SẢN PHẨM</th>
                                    <th className="td-price text-center">GIÁ TIỀN</th>
                                    <th className="td-quantity text-center">SỐ LƯỢNG</th>
                                    <th className="td-total text-center">THÀNH TIỀN</th>
                                    <th className="td-action" />
                                </tr>
                            </thead>
                            <tbody>
                                {this.showProduct()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={5}>
                                        <div className="text-right">
                                            <h4><strong>Tổng tiền: </strong><strong>{this.formatNumber(this.state.totalMoney)}</strong>đ</h4>
                                        </div>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    {/**/}
                    <div className="col-xs-12">
                        <div className="cart-buttons">
                            <div className="text-left col-xs-6">
                                <a href="/" className="btn btn-submit">
                                    <i className="fa fa-arrow-left" /> TIẾP TỤC MUA SẮM
                                </a>
                            </div>
                            <div className="text-right col-xs-6">
                                <a href="#" onClick={this.pay} className="btn btn-success">THANH TOÁN
                                     {/* <i className="fa fa-arrow-right" /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(function(state){})(Cart);