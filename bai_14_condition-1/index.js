// Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ,
//  kiểm tra xem 2 tham số có phải là number không 
// và tìm ra số lớn nhất trong 2 số đó.

function bai1(num1, num2){
    if(typeof(num1) === "number" && typeof(num2) === "number"){
      return  Math.max(num1, num2)
    }else return;
}

console.log(bai1(2,5));

// Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. 
// Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, 
// sau đó tính giai thừa và in ra kết quả.

function bai2(num){
    let result = num;
    if(num >= 0){
        if(num === 0 && num === 1){
            return 1;
        }
        
        while(num > 1){

            num--;
            result *= num;
        }
    }
    return result;
}

console.log(bai2(5));

// Bài 3. Cho 1 mảng các số bất kỳ. 
// Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và 
// sắp xếp theo thứ tự giảm dần.

function bai3(arr){

    let arrNew = [];
   arrNew = arr.filter(e => {
       return e%2 === 0
});

   return arrNew.sort((a, b) =>{
    return a-b
   }
       
    );


}

console.log(bai3([1,2,5,3,4]));

// Bài 4. Một trang web cho phép người dùng tạo tài khoản. 
// Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. 
// Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".
// Giả sử tham số đầu vào là 1 object có dạng như sau 
// (giá trị của thuộc tính là do người dùng nhập và đều là chuỗi): 

function bai4(obj){
    
    let confirm1 = false;
    let arr = [];
    for( let i of obj.password){
      arr[i] = obj.password[i] === obj.confirm[i]
    };
    if(arr.indexOf(false) === -1 ){
        confirm1 = true
    }else {
        confirm1 = false;
    }

    if(obj.username.length < 20 && obj.username.length > 0 && obj.password.length >= 6 && obj.password.length <= 32 && obj.password.length === obj.confirm.length && confirm1 ){
        return true
    }else {
        return false
    }
}

console.log(bai4({
    username: "username",
    password: "secret",
    confirm: "secret"
  }));

  