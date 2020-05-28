let infoStr = window.location.href;
let info = document.getElementById('info');
console.log(info)

let arr = infoStr.split('?')[1].replace('%40', '@').split('&');


let userObj = {};

for (item of arr) {
    let items = item.split('=');
    let key = items[0];
    let value = items[1];
    userObj[key] = value;
}
let userInfo = ''
for(let key in userObj){
    
    userInfo += `<p> ${key}: ${userObj[key]} </p>`;
 
    console.log(userInfo)
}

info.innerHTML = userInfo;