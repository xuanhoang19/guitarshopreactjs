import * as Types from '../constants/ActionTypes';

var initialState = [];

var rdcDetailProduct = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_DETAIL_PRODUCT:
            state = action.products.feedData; //.map(item => item.HinhURL); 
            return [...state];
        default:
            return [...state];
    }
}

export default rdcDetailProduct;