const form = document.getElementById('input_form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date_of_birth');




function displayPlaceholder(input,storage){
    const parent = input.closest('.input_cont');
    const target = parent.nextElementSibling;


    input.addEventListener("focus", check);

    if(localStorage.getItem(storage) ){
      check(); 
    }else{
        target.style.display = 'block';  
    }  

    function check(){
        target.style.display = 'none'; 
    }
}

displayPlaceholder(username,'name');
displayPlaceholder(email,'email');
displayPlaceholder(phone,'phone');
displayPlaceholder(date,'date_of_birth');

email.value = localStorage.getItem('email');
username.value = localStorage.getItem('name');
phone.value = localStorage.getItem('phone');
date.value = localStorage.getItem('date_of_birth');



username.addEventListener('keyup' , event => {
    localStorage.setItem('name',event.target.value);
});
email.addEventListener('keyup' , event => {
    localStorage.setItem('email',event.target.value);
});
phone.addEventListener('keyup' , event => {
    localStorage.setItem('phone',event.target.value);
});
date.addEventListener('keyup' , event => {
    localStorage.setItem('date_of_birth',event.target.value);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    

});


function checkInput(){
    const usernameVal = username.value;
    const emailVal = email.value;
    const phoneVal = phone.value;
    const dateVal = date.value;

    const nameReg = /^[A-Za-z]+$/;
    const emailReg = /^[a-z][a-z0-9_.]*@redberry.ge+$/;
    const phoneReg = /^\d{9}$/;

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

    if(!phoneVal.match(phoneReg)){
        let text1 = 'Invalid phone number';
        let text2 = 'Please enter valid phone number';
        showError(phone,text1,text2);
    }else{
        showSuccess(phone);
    }

    if(dateVal){
        showSuccess(date);
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
    let successImg = input.nextElementSibling;
    successImg.style.display = 'block';
}




