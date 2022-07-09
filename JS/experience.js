changeBox();
getCharacters();
dropdownExperience();
getRadioVal();

let err_bx =  document.getElementById('error_box_1');
let next_btn = document.querySelector('.next_btn');

const form = document.getElementById('form_experience');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  if(localStorage.getItem('experience_level') == null){
      err_bx.classList.add('error_box_experience');
      err_bx.classList.remove('error_box_character');
      err_bx.style.display= 'block';
      setTimeout(() => {
          err_bx.style.display = 'none';
        }, 1000);
    }else if(localStorage.getItem('character_person') == null){
      err_bx.classList.remove('error_box_experience');
      err_bx.classList.add('error_box_character');
      err_bx.style.display= 'block';
      setTimeout(() => {
          err_bx.style.display = 'none';
        }, 1000);
    }else{
      next_btn.innerHTML = 'Done';
      location.href = "send.html";
    }
})

function getCharacters(){
    let api ="https://chess-tournament-api.devtest.ge/api/grandmasters";
    fetch(api, {
      method: "get"
    })
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        let listWrap = document.getElementById('list_character');
        let list = document.createElement('li');
        list.classList.add('options_character');
        let text = document.createElement('p');
        text.innerHTML = element.name;
        text.classList.add('text_character');
        text.setAttribute('id',element.id);
        let image = document.createElement('img');
        image.src = 'https://chess-tournament-api.devtest.ge/' + element.image;
        list.appendChild(text);
        list.appendChild(image);
        listWrap.appendChild(list);
        dropdownCharacter();
      });
    })
  }
  
  function dropdownCharacter(){ 
    let selectField= document.getElementById("selectField_character");
    let selectText = document.getElementById("selectText_character");
    let options = document.getElementsByClassName("text_character");
    let list = document.getElementById('list_character');
    let arrowIcon = document.getElementById('arrowIcon_character');
    if(localStorage.getItem('character_person')){
      selectText.textContent = localStorage.getItem('character_person');
    }
    itemList(list,arrowIcon,selectText,options,selectField,'character_id','character_person');
  }
  
  function dropdownExperience(){
    let selectField= document.getElementById("selectField");
    let selectText = document.getElementById("selectText");
    let options = document.getElementsByClassName("options");
    let list = document.getElementById('list');
    let arrowIcon = document.getElementById('arrowIcon');
    if(localStorage.getItem('experience_level')){
      selectText.textContent = localStorage.getItem('experience_level');
    }
    itemList(list,arrowIcon,selectText,options,selectField,'option_id','experience_level');
  }
  
  function itemList(list,arrowIcon,selectText,options,selectField,localitem,localitem2){
    selectField.onclick = function(){
      list.classList.toggle('hide');
      arrowIcon.classList.toggle('rotate');
    }
    
    for (option of options) {
    option.onclick= function () {
      selectText.innerHTML = this.textContent;
      selectText.dataset.value = this.id;
      selectText.dataset.character = this.textContent;
      list.classList.toggle('hide');
      arrowIcon.classList.toggle('rotate');
      let dataAttr = selectText.getAttribute('data-value');
      let dataAttrTwo = selectText.getAttribute('data-character');
      addLocal(dataAttr,dataAttrTwo,localitem,localitem2);
      }
  
    }
  
  }
  
  function addLocal(dataAttr,dataAttrTwo,localitem,localitem2){
    if(dataAttr !== null && dataAttrTwo !== null){
      let data = dataAttrTwo.toLowerCase();
      localStorage.setItem(localitem,dataAttr);
      localStorage.setItem(localitem2,data);
    }
  }

  function getRadioVal(){
    document.addEventListener('input',(e)=>{
      if(e.target.getAttribute('name')=="yes_no")
      localStorage.setItem('already_participated',e.target.value);
      });
 }


let radioValue = localStorage.getItem("already_participated");
if(radioValue == 'true'){ 
    const yesBtn = document.getElementById('yes');
    yesBtn.checked = true;
  }else if(radioValue == 'false'){
    const noBtn = document.getElementById('no');
    noBtn.checked = true;
}
  
 

/* change experience box */
function changeBox(){
    let select = document.querySelectorAll(".selector");
  for (let i = 0; i < select.length; i++) {
          let eachSelect = select[i];
          eachSelect.onclick = function () {
              let box = document.querySelector('.second .box');
              box.style.background = '#E9FAF1';
      } 
    }
  }


