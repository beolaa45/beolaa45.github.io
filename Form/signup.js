let date = document.getElementById('date');
let month = document.getElementById('month');
let year = document.getElementById('year');
for(let i = 1; i <= 31; i++){
    let option = document.createElement('option');
        option.setAttribute(`value`, `${i}`);
        option.innerText = `Day ${i}`;
        date.append(option)
        
}

for(let i = 1; i <= 12; i++){
    let option = document.createElement('option');
        option.setAttribute(`value`, `${i}`);
        option.innerText = `Month ${i}`;
        month.append(option)
        
}

for(let i = 1980; i <= 2020; i++){
    let option = document.createElement('option');
        option.setAttribute(`value`, `${i}`);
        option.innerText = `${i}`;
        year.append(option)
        
}








let password = document.getElementById('newpassword');
let checkpassword = document.getElementById('checkpassword');
let icon1 = document.getElementById('icon1');

function remove(id){
    document.getElementById(id).classList.remove('fa-eye');
        document.getElementById(id).classList.add('fa-eye-slash')
}

function add(id) {
    document.getElementById(id).classList.remove('fa-eye-slash');
    document.getElementById(id).classList.add('fa-eye')
}
function addValue(e){
   
    console.log(e)
    if(password.type === 'password'){
        password.type = 'text';
        remove('icon1')
        // icon1.classList.add('fa-eye-slash')
    }else{
        password.type = 'password';
       add('icon1')
    }

}

function addValue1(e){
   
    console.log(e)
    if(checkpassword.type === 'password'  ){
        checkpassword.type = 'text';
        remove('icon2')

    }else{
        checkpassword.type = 'password';
        add('icon2')
    }

}







