import { PostData } from '../services/PostData';
import * as Types from '../constants/ActionTypes';

export const actFetchProductsTypeRequest = () => {
    return (dispatch) => {
        return PostData('listProductType', null).then((result) => {
            dispatch(actFetchProductsType(result));
        });
    }
}

export const actFetchProductsType = (products) => {
    return {
        type: Types.FETCH_PRODUCTS_TYPE,
        products
    }
}

export const actFetchProductsSellFastRequest = () => {
    return (dispatch) => {
        return PostData('listProductSellFast', null).then((result) => {
            dispatch(actFetchProductsSellFast(result));
        });
    }
}

export const actFetchProductsSellFast = (products) => {
    return {
        type: Types.FETCH_PRODUCTS_SELL_FAST,
        products
    }
}

export const actFetchNewProductstRequest = () => {
    return (dispatch) => {
        return PostData('listNewProduct', null).then((result) => {
            dispatch(actFetchNewProducts(result));
        });
    }
}

export const actFetchNewProducts = (products) => {
    return {
        type: Types.FETCH_NEW_PRODUCTS,
        products
    }
}

export const actFetchProductsRequest = (infor) => {
    return (dispatch) => {
        return PostData('listProduct', infor).then((result) => {
            dispatch(actFetchProducts(result));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchDetailProductsRequest = (idDetailProduct) => {
    return (dispatch) => {
        return PostData('detailProduct', idDetailProduct).then((result) => {
            dispatch(actFetchDetailProducts(result));
        });
    }
}

export const actFetchDetailProducts = (products) => {
    return {
        type: Types.FETCH_DETAIL_PRODUCT,
        products
    }
}

export const actFetchUsersRequest = (idUser) => {
    return (dispatch) => {
        return PostData('getUser', idUser).then((result) => {
            dispatch(actFetchUserProducts(result));
        });
    }
}

export const actFetchUserProducts = (products) => {
    return {
        type: Types.FETCH_USER,
        products
    }
}
