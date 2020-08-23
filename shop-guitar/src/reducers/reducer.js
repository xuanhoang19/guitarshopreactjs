import {combineReducers} from 'redux';
import rdcProductsType from './rdcProductsType';
import rdcProductsSellFast from './rdcProductsSellFast';
import rdcNewProducts from './rdcNewProducts';
import rdcProducts from './rdcProducts';
import rdcDetailProduct from './rdcDetailProduct';
import rdcUser from './rdcUser';

var appReducers = combineReducers({
    rdcUser : rdcUser,
    rdcProductsType : rdcProductsType,
    rdcDetailProduct : rdcDetailProduct,
    rdcProductsSellFast : rdcProductsSellFast,
    rdcNewProducts : rdcNewProducts,
    rdcProducts : rdcProducts,
});

export default appReducers;