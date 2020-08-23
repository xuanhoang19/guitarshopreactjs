import { PostData } from '../services/PostData';
import { keyTheOrder, keyTheOrderDetail } from './CreateKey';

export const postOrder = (theOrder, totalMoney) => {

    if (!sessionStorage.getItem("userData")) {
        alert('Ban chua dang nhap!');
        return;
    }

    var user = sessionStorage.getItem("userData");
    var maUser = JSON.parse(user);


    // madondathang, ngaylap, tongthanhtien, mataikhoan, matinhtrang

    var keyOrder = keyTheOrder(); // ma don dat hang
    Promise.resolve(keyOrder).then(function (value) {
        keyOrder = value;
    })

    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let data
    setTimeout(() => {
        data = {MaDonHang : keyOrder, NgayLap : today, TongThanhTien : totalMoney, MaTaiKhoan : maUser.userData.MaTaiKhoan, MaTinhTrang : 1};
        PostData('postOrder', data).then((result) => {
            //alert('Mua hang thanh cong!');
        }).catch((result) => {
            //alert('Mua hang that bai!');
        })
    }, 1000);


    // machitietdondathang, soluong, giaban, madondathang, masanpham

    console.log(theOrder);

    theOrder.map((item, key) => {
        var keyOrderDetail // ma chi tiet don dat hang
        setTimeout(() => {
            keyOrderDetail = keyTheOrderDetail(keyOrder, key);
        }, 1000);
        Promise.resolve(keyOrderDetail).then(function (value) {
            keyOrderDetail = value;
        })

        let dataOrderDetail;
        setTimeout(() => {
            dataOrderDetail = { MaChiTietDonDatHang: keyOrderDetail, SoLuong: item.SoLuong, GiaBan: '' + (parseInt(item.SoLuong) * parseInt(item.GiaSanPham)), MaDonDatHang: keyOrder, MaSanPham: item.MaSanPham};
            console.log(dataOrderDetail)
            setTimeout(() => {
                PostData('postOrderDetail', dataOrderDetail).then((result) => {
                    console.log(result)
                    alert('Mua hang thanh cong!');
                }).catch((result) => {
                    console.log(result)
                    alert('Mua hang that bai!');
                })
            }, 2000);
           
        }, 1000);
    });
}