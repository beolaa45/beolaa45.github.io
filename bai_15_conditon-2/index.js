// Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. 
// Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:

function bai1(){

    let now = new Date();
  
 document.write(now.getDate() + ' / ');
 let month = document.write((now.getMonth() + 1) ) ;
 document.write( ' / ' + now.getFullYear())
  
  switch(3){
    case 1:
    case 2:
    case 3: {
      document.write('  Mua xuan')
      break;
    }
    case 4:
    case 5:
    case 6:{
      document.write('  Mua ha')
      break;
    }
    case 7:
    case 8:
    case 9:{
      document.write('  Mua thu')
      break;
    }
    case 10:
    case 11:
    case 12:{
      document.write('  Mua dong')
      break;
    }
  }
}

// Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10).
//  Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

function bai2(num){

        if(num >= 0 && num < 4){
            return 'F'
        } else if(num >= 4 && num < 5.5){
            return 'D'
        }else if(num >= 5.5 && num <7){
            return 'C'
        }else if(num >= 7 && num <8.5){
            return 'B'
        }else if(num >= 8.5 && num < 10){
            return 'A'
        }
    }
    // Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, 
    // sử dụng switch và mặc định dịch sang tiếng Việt.

    function translate(str){
        str.toUpperCase()
        switch(str){
            case 'DE':
               return 'Hallo'
                break;
            case 'GR':
               return 'γεια'
                break;
            case 'IT':
                return 'ciao'
                break;
            case 'JP':
               return 'こんにちは'
                break;
            default :
                return 'Xin Chao'
                break;
        }
    }

    // Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false. 
    // Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong 
    //mảng ở vị trí nào.

    function bai4(arr){

        return arr.findIndex(e => e === true)
    }