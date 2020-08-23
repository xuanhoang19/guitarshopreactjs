import React, { Component } from 'react';
import Describe from './Describe';
import { actFetchDetailProductsRequest } from '../../actions/index';
import { connect } from 'react-redux';
import './Detail.css';
import { Redirect } from 'react-router-dom';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.clickBuy = this.clickBuy.bind(this);
    }

    componentWillMount() {
        this.callApiSaveDetailProduct();
    }

    callApiSaveDetailProduct() {
        let idDetailProduct = { idDetailProduct: this.props.match.params.id };
        var { dispatch } = this.props;
        dispatch(actFetchDetailProductsRequest(idDetailProduct));
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    reloadPage() {
        window.location.reload();
    }

    clickBuy() {
        var idProduct = this.props.match.params.id;
        var arrIDCart;
        if(sessionStorage.getItem("arrIDCart")){
            arrIDCart = JSON.parse(sessionStorage.getItem("arrIDCart"));
            arrIDCart = arrIDCart.concat([idProduct]);
            sessionStorage.setItem("arrIDCart", JSON.stringify(arrIDCart));
        }else {
            arrIDCart = [idProduct];
            sessionStorage.setItem("arrIDCart", JSON.stringify(arrIDCart));
        }
    }

    render() {
        const isDetail = this.props.rdcDetailProduct;
        return (
            <div className="destail">
                <div className="container">
                    <hr />
                    <div className="card">
                        <div className="row">
                            <aside className="col-sm-5 border-right">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        {
                                            isDetail[0] ? (
                                                <a href={() => this.reloadPage()}><img src={require('../../images/' + isDetail.map(item => item.HinhURL))} alt="" /></a>
                                            ) : (<div></div>)
                                        }
                                        {/* <div> <a href="#"><img src={require('../../images/'+this.strHinhURL())} /></a></div> */}
                                    </div> {/* slider-product.// */}
                                    {/* <div className="img-small-wrap">
                                        <div className="item-gallery"> <img src="" /> </div>
                                        <div className="item-gallery"> <img src="" /> </div>
                                        <div className="item-gallery"> <img src="" /> </div>
                                        <div className="item-gallery"> <img src="" /> </div>
                                    </div> slider-nav.// */}
                                </article> {/* gallery-wrap .end// */}
                            </aside>
                            <aside className="col-sm-7 text-left">
                                <article className="card-body p-5">
                                    <h3 className="title mb-3">
                                        {
                                            isDetail[0] ? (
                                                isDetail.map(item => item.TenSanPham)
                                            ) : (<div></div>)
                                        }
                                    </h3>
                                    <p className="price-detail-wrap">
                                        <span className="price h3 text-warning">
                                            <span className="currency">Giá: </span>
                                            <span className="num">
                                                {
                                                    isDetail[0] ? (
                                                        this.formatNumber(isDetail.map(item => item.GiaSanPham))
                                                    ) : (<div></div>)
                                                } VNĐ
                                            </span>
                                        </span>
                                    </p> {/* price-detail-wrap .// */}
                                    <dl className="param param-feature">
                                        <dt>Số lượng tồn: </dt>
                                        <dd>
                                            {
                                                isDetail[0] ? (
                                                    isDetail.map(item => item.SoLuongTon)
                                                ) : (<div></div>)
                                            }
                                        </dd>
                                    </dl>  {/* item-property-hor .// */}
                                    <dl className="param param-feature">
                                        <dt>Số lượng bán: </dt>
                                        <dd>
                                            {
                                                isDetail[0] ? (
                                                    isDetail.map(item => item.SoLuongBan)
                                                ) : (<div></div>)
                                            }
                                        </dd>
                                    </dl>  {/* item-property-hor .// */}
                                    <dl className="param param-feature">
                                        <dt>Số lượng xem: </dt>
                                        <dd>
                                            {
                                                isDetail[0] ? (
                                                    isDetail.map(item => item.SoLuocXem)
                                                ) : (<div></div>)
                                            }
                                        </dd>
                                    </dl>  {/* item-property-hor .// */}
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <dl className="param param-inline">
                                                <dt>Quantity: </dt>
                                                <dd>
                                                    <select className="form-control form-control-sm" style={{ width: '70px' }}>
                                                        <option> 1 </option>
                                                        <option> 2 </option>
                                                        <option> 3 </option>
                                                    </select>
                                                </dd>
                                            </dl>  {/* item-property .// */}
                                        </div> {/* col.// */}
                                    </div> {/* row.// */}
                                    <hr />
                                    <a href="/cart" className="btn btn-lg btn-primary text-uppercase" onClick={this.clickBuy}> Buy now </a>
                                    <a href={() => this.reloadPage()} className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart" /> Add to cart </a>
                                </article> {/* card-body.// */}
                            </aside> {/* col.// */}
                        </div> {/* row.// */}
                    </div> {/* card.// */}
                </div>
                <hr />
                <Describe content={
                    isDetail[0] ? (
                        isDetail.map(item => item.MoTa)
                    ) : (<div></div>)
                }></Describe>
            </div>
        );
    }
}

export default connect(function (state) {
    return {
        rdcDetailProduct: state.rdcDetailProduct,
        rdcProductCart: state.rdcProductCart
    }
})(Detail);