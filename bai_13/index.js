// Bài 1: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, 
//ngăn cách nhau bởi ký tự "-". Ví dụ cho chuỗi "123" thì kết quả sẽ là 
//"123-123-123-123-123-123-123-123-123-123".
function bai1(number) {
    var i = 1;
    var arr = [];
    while(i <= 10){
        arr[i] = number;
        i++
    }

    return arr.join('-').slice(1)
}

console.log(bai1(123))

//- Bài 2. Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!).
//Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

function bai2(n){

    var i = 1;
    var x = 1
    while(i <= n){
        x *= i;
        i++;
        
    }
    return x
}

console.log(bai2(5))

//Bài 3. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
//Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh".
// Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

function bai3(str){
    var strNew = '';
    for(var i = str.length - 1; i >= 0; i-- ){

        strNew += str[i]
    }
    return strNew;
}

console.log(bai3('hello'))

// Bài 4. Cho 1 mảng tên của n học viên. 
// Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và
//  in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).

function bai4(arr){
    var arrNew = arr.sort((a, b) => {
       return a.localeCompare(b)
    });

    arrNew.forEach(element => {
        document.write(element)
        document.write(' ')

    });
}

bai4(['Viet','Khanh', 'Minh', 'Tri'])

// Bài 5. Cho 1 mảng các số. 
// Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2. 
// Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).

function bai5(arr){

   return arr.map(e => e % 2)
}

console.log(bai5([1,2,4,6,4]))

// - Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 
// sao cho những giá trị là chẵn sẽ có màu xanh, 
// những giá trị là lẻ có màu đỏ.

function bai6(num){
  
    var i = 1;
    while(i <= num){
        if(i%2 === 0){
           var num1 = document.createElement('p');
           num1.textContent = i;
           num1.classList.add('green');
            
            document.querySelector('.box').appendChild(num1);
             
            
        }else if(i%2 === 1){

            var num2 = document.createElement('p');
            num2.textContent = i;
            num2.classList.add('red');
             
             document.querySelector('.box').appendChild(num2);
             
        };
        i++;
    }
    // document.querySelector('.red').style.color = 'red';
    // document.querySelector('.green').style.color = 'green';
}

bai6(5);