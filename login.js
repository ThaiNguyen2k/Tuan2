
let contents = document.getElementsByClassName("content");
for(let i = 0; i < contents.length; i++) {
    contents[i].addEventListener("click", function(e){
        clickEvent(e);
    });
}
function cancelBtn() {
    document.getElementById("form").reset();
}

function closeBtn() {
    document.getElementById("top").style.display = "none";
}
function openSett() {
    document.getElementById("top").style.display = "initial";

}

function clickEvent(e) {
    for(let i = 0; i < contents.length; i++){
        contents[i].style.color = "black";
    }
    e.currentTarget.style.color = "green";
}
function reset(){
    document.getElementById("test").style.fontWeight="normal";
    
}

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
}
window.onload= function(){
  getAll();
  fetchData();
}

async function fetchData() {
  const data = await getAll();
  console.log(data);
  }
