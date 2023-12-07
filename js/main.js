// một số hằng số về loại xe
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

// gọi sự kiện onclick cho nút tính tiền
document.querySelector(".contact100-form-btn").onclick = function () {
  console.log("Hello");
  //   lấy dữ liệu từ người dùng nhập
  //   ở đây có thể dùng querySelector để gọi tới các thẻ có một số thuộc tính bằng một giá trị mà ta muốn lấy vd: lấy input có thuộc tính name=selector
  //   với các input có type là radio có thể sử dụng :checked trong câu querySelector để xác định input được người dùng chọn

  //   kiểm tra xem người dùng đã chọn loại xe hay chưa
  if (document.querySelector("input[name='selector']:checked") == null) {
    alert("Vui lòng chọn loại xe");
    // sử dụng một lệnh return để cho khi người dùng không chọn loại xe, hàm sẽ ngưng và không xử ký các đoạn code bên dưới
    return;
  }

  var loaiXe = document.querySelector("input[name='selector']:checked").value;

  //   nếu như số Km và số thời gian chờ không nhập gì hết thì sẽ có alert và không cho xử lý các đoạn code bên dưới

  var soKm = document.getElementById("txt-km").value * 1;
  if (soKm == 0) {
    alert("Vui lòng nhập số Km");
    return;
  }

  var soThoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(soKm);
  console.log(soThoiGianCho);

  //   số tiền của km đầu tiên, số tiền của km từ 1 đến 19, số tiền của km từ 19 trở lên
  var tienKmDauTien = giaTienKmDauTien(loaiXe);
  var tienKmTu1Den19 = giaTienKmTu1Den19(loaiXe);
  var tienKmTu19TroLen = giaTienKmTu19TroLen(loaiXe);

  console.log(tienKmDauTien);
  console.log(tienKmTu1Den19);
  console.log(tienKmTu19TroLen);

  // hàm giúp kiểm tra và lấy ra số tiền dựa trên loại xe người dùng chọn
  function giaTienKmDauTien(loaiXe) {
    // switch case lấy ra số tiền km đầu tiên
    //   khi sự dụng lệnh return sẽ tự động thoát ra khỏi hàm nên không cần dùng break;
    switch (loaiXe) {
      case UBER_CAR:
        return 8000;
      case UBER_SUV:
        return 9000;
      case UBER_BLACK:
        return 10000;
    }
  }

  function giaTienKmTu1Den19(loaiXe) {
    switch (loaiXe) {
      case UBER_CAR:
        return 7500;
      case UBER_SUV:
        return 8500;
      case UBER_BLACK:
        return 9500;
    }
  }

  function giaTienKmTu19TroLen(loaiXe) {
    switch (loaiXe) {
      case UBER_CAR:
        return 7000;
      case UBER_SUV:
        return 8000;
      case UBER_BLACK:
        return 9000;
    }
  }

  // anh Đông đi hết 32km
  // var tong = tienKmDauTien + 18 * tienKmTu1Den19 + (32 -19) * tienKmTu19TroLen;
  // console.log(tong);
  // TH1: người dùng đi 1km
  // TH2: người dùng đi tỏng khoảng 1 đến 19km
  // TH3: người dùng đi hơn 19km
  var tong = 0;
  if (soKm > 0 && soKm <= 19) {
    tong = tienKmDauTien + (soKm - 1) * tienKmTu1Den19;
  } else {
    tong = tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }
  console.log(tong);

  // dom tới div id=divThanhTien để cho hiện lên giao diện
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = `${tong.toLocaleString(
    "it-IT",
    { style: "currency", currency: "VND" }
  )}`;
};
