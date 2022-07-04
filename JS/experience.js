changeBox();
getCharacters();
dropdown();



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
    let image = document.createElement('img');
    image.src = 'https://chess-tournament-api.devtest.ge/' + element.image;
    list.appendChild(text);
    list.appendChild(image);
    listWrap.appendChild(list);
    dropdownCharacter();
  });
})
}

function dropdown(){
var selectField= document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowIcon');

selectField.onclick = function(){
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
   }

for (option of options) {
option.onclick= function () {
    selectText.innerHTML = this.textContent;
    console.log(option.id);
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
    }
  } 
}
function dropdownCharacter(){
  
  var selectField= document.getElementById("selectField_character");
  var selectText = document.getElementById("selectText_character");
  var options = document.getElementsByClassName("text_character");
  
  var list = document.getElementById('list_character');
  var arrowIcon = document.getElementById('arrowIcon_character');

  selectField.onclick = function(){
    list.classList.toggle('hide_character');
    arrowIcon.classList.toggle('rotate_character');
   }

for (option of options) {
  console.log(option);
option.onclick= function () {
    selectText.innerHTML = this.textContent;
    console.log(option.id);
    list.classList.toggle('hide_character');
    arrowIcon.classList.toggle('rotate_character');

}
}
}

/* Change Box Color */
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

