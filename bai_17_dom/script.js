// Tạo 1 trang HTML với nội dung là 3 đoạn văn. Hãy viết các function có tác dụng như sau:

// function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor(){
   var x = document.getElementsByTagName('div');
   let b = document.getElementsByClassName('hi');
   
  
   x[0].style.color = 'green';
   x[1].style.color = 'yellow';
   x[2].style.color = 'red'
}
// changeColor();

// function changeBgColor(color): Thay đổi màu nền của trang thành màu color.


function changeBgColor(color){
    var y = document.body;
    console.log(y)
        y.style.backgroundColor = color
    
}

// changeBgColor('red')

// function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 
// (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).
function copyContent(paragraph1, paragraph2) {
   let p1 = document.getElementById(paragraph1);
   let p2 = document.getElementById(paragraph2);
   let str1;
    str1 = p1.textContent;
    p2.textContent = str1

}
// copyContent(1,2)


//function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x){
    let p1 =document.getElementsByClassName('4');
    for(let i = 0; i < p1.length; i++){
        p1[i].style.fontSize = x + 'px';
    }
    
}

changeFontSize(10)


// function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn 
// (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, 
// kích thước tăng lên không được vượt quá 30 pixels 
// (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).

function increaseFontSize(paragraph) {
    let para = document.getElementsByClassName(`${paragraph}`);
    let size =parseFloat(para[0].style.fontSize.replace('px', '')) ;

     if(size <= 30) {
         para[0].style.fontSize = `${size + 1}px`;
     }
}

increaseFontSize(4)

// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn 
// (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, 
// kích thước giảm xuống không vượt quá 10 pixels.

function decreaseFontSize(paragraph) {
    let para = document.getElementsByClassName(`${paragraph}`);
    let size =parseFloat(para[1].style.fontSize.replace('px', '')) ;

     if(size >= 10) {
         para[1].style.fontSize = `${size - 1}px`;
     }
}

decreaseFontSize(4)
