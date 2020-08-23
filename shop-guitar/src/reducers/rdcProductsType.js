import * as Types from '../constants/ActionTypes';

var initialState = [];

var rdcProductsType = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCTS_TYPE:
            state = action.products.feedData; //.map(item => item.TenLoaiSanPham); 
            return [...state];
        default:
            return [...state];
    }
}

export default rdcProductsType;