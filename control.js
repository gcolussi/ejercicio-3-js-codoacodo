let form = document.querySelector('form');


function validarEmail(string){

    let flag=false;
    for (i=0; i<string.length;i++){
        if (string[i]=='@') {
        flag = true;
        }
        }
    return flag;
    }	 



form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let email = document.querySelector('#user_mail');
    let password = document.querySelector('#pass');

    if(email.value == ""){
        alert("El campo usuario es obligatorio");

    }
    else if (password.value == ""){
        alert("El campo clave es obligatorio");
    }

    else if(!validarEmail(email.value)){
        alert("El campo usuario requiere un email");
    }

    else{
        form.submit();
    }

});

