import * as Types from '../constants/ActionTypes';

var initialState = [];

var rdcUser = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_USER:
            state = action.products.feedData; //.map(item => item.TenLoaiSanPham); 
            return [...state];
        default:
            return [...state];
    }
}

export default rdcUser;