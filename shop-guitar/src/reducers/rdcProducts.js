import * as Types from '../constants/ActionTypes';

var initialState = [];

var rdcProducts = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products.feedData; //.map(item => item.TenLoaiSanPham); 
            return [...state];
        default:
            return [...state];
    }
}

export default rdcProducts;