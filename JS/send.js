const form = document.getElementById('form_experience');
let err_bx =  document.getElementById('error_box_1');
let next_btn = document.querySelector('.next_btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkValidation()){
        
        fetch('https://chess-tournament-api.devtest.ge/api/register', {
            method: 'POST',
            body: JSON.stringify({
                "name": localStorage.getItem('name'),
                "email": localStorage.getItem('email'),
                "phone": localStorage.getItem('phone'),
                "date_of_birth": localStorage.getItem('date_of_birth'),
                "experience_level": localStorage.getItem('experience_level'),
                "already_participated": localStorage.getItem('already_participated'),
                "character_id": localStorage.getItem('character_id')
            }),
            headers:{
                "accept": "application/json" ,
                "Content-Type": "application/json"
            }
        })

        
        localStorage.clear();
    
        next_btn.innerHTML = 'Done';
        location.href = "last.html";
    }else{
       err_bx.style.display= 'block';
        setTimeout(() => {
            err_bx.style.display = 'none';
          }, 1000);
    }
});

  function checkValidation(){
    let result;
    if(document.getElementById("selectText").textContent == 'level of knowledge *'){
      err_bx.classList.add('error_box_experience');
      err_bx.classList.remove('error_box_character');
      result = false;
    }else if(document.getElementById("selectText_character").textContent == 'Choose your character *'){
        err_bx.classList.add('error_box_character');
        err_bx.classList.remove('error_box_experience');
        result = false;
    }else{
        result = true;
    }
    return result;
  }