import React, { Component } from 'react';
import './MenuNav.css';
import { PostData } from '../../../services/PostData';
import { connect } from 'react-redux';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuDrop: [],
            isCallApi: false
        };
    }

    componentDidMount() {
        this.showManuFacturer();
    }

    showManuFacturer() {
        let id = { id: this.props.idProductType };
        PostData('listManuFacturer', id).then((result) => {
            if (result) {
                this.setState({ menuDrop: result.feedData });
            }
            else {
                alert(result.error);
            }
        });
    }

    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn">{this.props.children}</button>
                <div className="dropdown-content">
                    {
                        this.state.menuDrop.map((item, key) => {
                            return <a href={"/product-list/productType=" + this.props.idProductType + "&&manuFacturer=" + item.MaHangSanXuat} key={key}>{item.TenHangSanXuat}</a>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect()(Nav);