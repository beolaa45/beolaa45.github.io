


// Bài 1. Viết 1 function tính bình phương của 1 số.

// Tham số truyền vào là 1 số.
// Kết quả là bình phương của số đó.

function bai1(number) {
    console.log(number*number);
}
bai1(3)

// Bài 2: . Viết function tính thế kỷ của 1 năm.
// Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

function bai4(x) {
    var z;
    z=Math.ceil(x/100);	
     console.log("the ky" + " " + z);
}

bai4(2019);


// Bài 3:  Cho 1 chuỗi dài hơn 15 ký tự. 
//Viết 1 function cắt chuỗi, 
//lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.

//Tham số truyền vào là 1 chuỗi dài hơn 15 ký tự.
//Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, 
//cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.


function bai3(str) {
  console.log("Chỗi cần lấy là:" + str.substr(0, 10) + "...")
}
bai3("hoc tap cham chi");
// Bài 4: Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
//Tham số truyền vào là 1 chuỗi.
//Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
//Gợi ý: Để chuyển 1 chuỗi sang viết hoa thì dùng phương thức toUpperCase, để chuyển 1 chuỗi sang viết thường thì dùng phương thức toLowerCase.
function thayDoi(str) {
  var thdoi = str.charAt(0).toUpperCase + str.slice(1).toLowerCase();
}





// Bài 5:Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
//Tham số truyền vào là 1 mảng các số.
//Kết quả là số nhỏ nhất trong mảng.
//Gợi ý: có thể dùng phương thức sort() hoặc object Math,
// chú ý khi sort số khác với chữ.

var numbers = [4, 100, 5, 100, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers[0]);

console.log(Math.min(...numbers));



// Bài 6: Cho 1 mảng gồm tên của 5 học viên. 
//Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.

// Tham số truyền vào là 1 mảng gồm tên của 5 người.
// Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái (tiếng Anh), mỗi người trên 1 dòng.
// Gợi ý: dùng phương thức join() để biến 1 mảng thành 1 chuỗi và chèn thêm ký tự <br> để hiển thị xuống dòng trong HTML.

function student(str) {
  let strNew = '';
  let sigleStusdent = str.sort(function(a, b) {
    return a.localeCompare(b);
  });

 let arr =  sigleStusdent.map(element => {
    return `<div> ${element}</div>`
  });

  strNew1 = arr.join('');
  console.log(strNew1)

  document.querySelector('.demo').innerHTML = strNew1;
}

student(['khanh', 'an', 'huy', 'duy', 'khoa']);



