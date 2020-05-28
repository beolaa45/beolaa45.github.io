let pass = document.getElementById('password');
console.log(pass)

function remove(id){
    document.getElementById(id).classList.remove('fa-eye');
        document.getElementById(id).classList.add('fa-eye-slash')
}

function add(id) {
    document.getElementById(id).classList.remove('fa-eye-slash');
    document.getElementById(id).classList.add('fa-eye')
}

function addValue() {
    if(pass.type === 'password'){
        pass.type = 'text';
        remove('icon')

    }else {
        pass.type = 'password';
        add('icon')
    }
}