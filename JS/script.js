/*document.getElementById("start").onclick = function () {
    location.href = "signup.html";
};
*/

function removeText(x){
    document.getElementById(x).style.display = 'none';
}


const form = document.getElementById('input_form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const date = document.getElementById('date');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
   

});

function checkInput(){
    const usernameVal = username.value;
    const emailVal = email.value;
    const numberVal = number.value;
    const dateVal = date.value;

    const nameReg = /^[A-Za-z]+$/;
    const emailReg = /^[a-z][a-z0-9_.]*@redberry.ge+$/;
    
    if(usernameVal.length < 2 || !usernameVal.match(nameReg) ){
        let text1 = 'Invalid name';
        let text2 = 'Please enter valid name';
        showError(username,text1,text2);
    }else{
        showSuccess(username);
    }

    if(!emailVal.match(emailReg) ){
        let text1 = 'Invalid email';
        let text2 = 'Please enter valid email';
        showError(email,text1,text2);
    }else{
        showSuccess(email);
    }
}


function showError(input,text1,text2){
    const error_header = document.getElementById('error');
    const error_box = document.querySelector('.error_box');
    const error_desc  = document.getElementById('description');

    const parent = input.closest('.each_input_wrapper');
   
    error_box.style.display = 'block';
    error_header.innerText = (text1);
    error_desc.innerText = (text2);
    parent.style.background = 'rgba(255, 239, 239, 1)';
    input.style.background = 'rgba(255, 239, 239, 1)';
    input.classList.add('error_color');
}

function showSuccess(input){
    let successImg = input.nextElementSibling;;
    successImg.style.display = 'block';
}


/*
checkName();
   checkMail();


    function checkName(){
        const letters = /^[A-Za-z]+$/;
        const input_err = document.getElementById('input_err');
        const success = document.getElementById('input_cont_img');
        if (username.value.length < 2 || !username.value.match(letters)) {
            let text1 = 'Invalid name';
            let text2 = 'Please enter valid name';
            errorHandler(text1,text2,input_err,username);
        }else{
            success.style.display = 'block';
        }
    
    }

   function checkMail(){
        const letters = /^[A-Za-z]+$/;
        const input_err = document.getElementById('input_err_two');
        const success = document.getElementById('input_cont_img_two');
        if (email.value.length < 2 || !email.value.match(letters)) {
            let text1 = 'Invalid name';
            let text2 = 'Please enter valid name';
            errorHandler(text1,text2,input_err,email);
        }else{
            success.style.display = 'block';
        }
    }

    function errorHandler(text1,text2,input_err,input){
        const error_header = document.getElementById('error');
        const error_box = document.querySelector('.error_box');
        const error_desc  = document.getElementById('description');
        
        
        error_box.style.display = 'block';
        error_header.innerText = (text1);
        error_desc.innerText = (text2);
        input_err.style.background = 'rgba(255, 239, 239, 1)';
        input.style.background = 'rgba(255, 239, 239, 1)';
        input.classList.add('error_color');
    }



*/