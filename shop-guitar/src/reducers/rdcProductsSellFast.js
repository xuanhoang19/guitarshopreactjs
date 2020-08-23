import * as Types from '../constants/ActionTypes';

var initialState = [];

var rdcProductsSellFast = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCTS_SELL_FAST:
            state = action.products.feedData; //.map(item => item.TenLoaiSanPham);
            return [...state];
        default:
            return [...state];
    }
}

export default rdcProductsSellFast;