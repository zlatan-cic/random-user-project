const btn = document.getElementById('btn-generate');

btn.addEventListener('click', function(){
  getPerson(getData)
})

function getPerson(cb){
  const url = 'https://randomuser.me/api/';
  const request = new XMLHttpRequest()

  request.open("GET", url, true)
  request.onload = function(){
    if(this.status === 200){
      cb(this.responseText, showData);
    }
  }

  request.send();
}

function getData(response, cb){
  const data = JSON.parse(response);

  const {
    name: {first},
    name: {last},
    location: {street},
    phone,
    email,
     picture: { large },
  } = data.results[0]
  cb(first, last, large, street.name, phone, email);
}

function showData(first, last, large, street, phone, email) {
  document.getElementById('name').textContent = `${first} ${last}`;
  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('location').textContent = street;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
  document.getElementById('img').src = large; // Set the src attribute to change the image
}