import { PostData } from '../services/PostData';
import { sprintf } from 'sprintf-js';

export const toDay = () => {
    var today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() < 10 ? ('0' + (today.getMonth()+1)) : (today.getMonth()+1)) + '-' + (today.getDate() < 10 ? ('0' + today.getDate()) : (today.getDate()));
}

export const keyTheOrder = () => {
    var day = {day : '' + toDay() + '%'};
    var today = new Date();
    var strDay = '' + (today.getDate() < 10 ? ('0' + today.getDate()) : (today.getDate())) + (today.getMonth() < 10 ? ('0' + (today.getMonth()+1)) : (today.getMonth()+1)) + today.getFullYear();
    return PostData('sttOrdersForTheDay', day).then((result) => {
        if(result.feedData){
            return strDay + '' + sprintf("%03s",(parseInt(result.feedData.map(item => item.SoThuTu)) + 1));
        }
    }); 
}

export const keyTheOrderDetail = (keyOrder, id) => {
    return '' + keyOrder + sprintf("%03s", id); 
}