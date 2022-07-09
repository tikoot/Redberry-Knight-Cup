let username = localStorage.getItem('name');
let email  = localStorage.getItem('email');
let phone = localStorage.getItem('phone');

let date = localStorage.getItem('date_of_birth');
let experience =  localStorage.getItem('experience_level');
let partipicated = JSON.parse(localStorage.getItem('already_participated'));
let character = JSON.parse(localStorage.getItem('character_id'));

let xhr = new XMLHttpRequest();
xhr.open("POST", 'https://chess-tournament-api.devtest.ge/api/register', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "name": username,
    "email": email,
    "phone": phone,
    "date_of_birth": date,
    "experience_level": experience,
    "already_participated": partipicated,
    "character_id": character
})); 


localStorage.clear();