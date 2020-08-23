import * as Types from '../constants/ActionTypes';

var initialState = [];

var rdcNewProducts = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_NEW_PRODUCTS:
            state = action.products.feedData; //.map(item => item.TenLoaiSanPham); 
            return [...state];
        default:
            return [...state];
    }
}

export default rdcNewProducts;