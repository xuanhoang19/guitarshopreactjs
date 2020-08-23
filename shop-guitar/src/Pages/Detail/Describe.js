import React, { Component } from 'react';

class Describe extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <dl className="item-property text-left">
                        <dt>Mô Tả</dt>
                        <dd>
                            <p>{this.props.content}</p>
                        </dd>
                    </dl>
                </div>

            </div>
        );
    }
}

export default Describe;