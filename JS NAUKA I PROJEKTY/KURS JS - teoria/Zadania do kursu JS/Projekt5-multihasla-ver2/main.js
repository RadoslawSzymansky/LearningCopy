const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna", "Ania"];
const messages = ["wyjechałam na zawsze", "piękna pora roku", "Fajny styl masz"];

input.addEventListener('input', (e) => {
 div.textContent = '';
 const text = e.target.value;
 // console.log(text);

 passwords.forEach((password, index) => {
  if (password === text) {
   // console.log(password, index);
   div.textContent = messages[index];
   e.target.value = '';
  }
 })

})

input.addEventListener('focus', (e) => {
 e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
 e.target.classList.remove('active');
})

 // if (password === e.target.value) {
 //  div.textContent = message;
 //  
 // } else {
 //  div.textContent = '';
 // }