const userName = document.getElementById("userName"); //username
const pass = document.getElementById("pass"); //password
const sm = document.getElementById("sm"); //submit

function getLogin() {
  if (userName.value === "" || pass.value === "") {
    alert("Please fill in all fields");
  }
  else if (userName.value === "kminchelle" && pass.value === "0lelplR") {
    window.location.assign(`web.html`);
  } else  {

    alert("Incorrect username or password");
  }
}
function getAll() {
  return fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
  .then(res => res.json())
  .then(console.log);
}
window.onload= function(){
  getAll();
}

async function fetchData() {
  const products = await getAll();
    
  }
